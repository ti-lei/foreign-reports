// Cloudflare Pages Function — /api/itineraries.csv
// 同 itineraries.js，但輸出 CSV（含 BOM 讓 Excel 正確讀中文）。
export async function onRequestGet({ env }) {
  const { results } = await env.DB.prepare(
    `SELECT id, event_date, event_time, broker, company, ticker, meeting_type, topic, location, signup_url
     FROM itineraries
     ORDER BY event_date IS NULL, event_date, event_time`
  ).all();

  const cols = [
    "id", "event_date", "event_time", "broker", "company",
    "ticker", "meeting_type", "topic", "location", "signup_url",
  ];
  const cell = (v) => {
    if (v === null || v === undefined) return "";
    const s = String(v);
    return /[",\r\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  };
  const lines = [cols.join(",")];
  for (const r of results) lines.push(cols.map((c) => cell(r[c])).join(","));
  const csv = "﻿" + lines.join("\r\n");

  return new Response(csv, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": 'attachment; filename="itineraries.csv"',
    },
  });
}
