import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {},
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.RecentNotes({
        title: "今日更新",
        limit: 50,
        showTags: false,
        filter: (f) => {
          if (!f.dates?.modified) return false
          // 只列真正的報告：排除首頁、工具頁(行程日曆)、爬蟲頁(史萊姆的聊天室)
          const excludedSlugs = ["index", "calendar", "史萊姆的聊天室"]
          if (excludedSlugs.includes(f.slug)) return false
          // 排除產業地圖整個資料夾：這些頁由 build_industry_map.py 產生、無 modified
          // frontmatter，Cloudflare 上會 fallback 到 filesystem=build 時間，天天誤判為今天
          if (f.slug?.startsWith("產業地圖/")) return false
          const today = new Date()
          const m = f.dates.modified
          return (
            m.getFullYear() === today.getFullYear() &&
            m.getMonth() === today.getMonth() &&
            m.getDate() === today.getDate()
          )
        },
      }),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.GraphLink(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        // 置頂項目：券商行程日曆、史萊姆的聊天室 固定排在最前
        const pinned = ["券商行程日曆", "史萊姆的聊天室"]
        const rankA = pinned.indexOf(a.displayName)
        const rankB = pinned.indexOf(b.displayName)
        if (rankA !== -1 || rankB !== -1) {
          if (rankA === -1) return 1
          if (rankB === -1) return -1
          return rankA - rankB
        }
        if (!a.isFolder && !b.isFolder) {
          var dateA = (a.slugSegment.match(/\d{8}/) || [""])[0]
          var dateB = (b.slugSegment.match(/\d{8}/) || [""])[0]
          if (dateA && dateB) return dateB.localeCompare(dateA)
        }
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        return a.isFolder ? -1 : 1
      },
    }),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.GraphLink(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      sortFn: (a, b) => {
        // 置頂項目：券商行程日曆、史萊姆的聊天室 固定排在最前
        const pinned = ["券商行程日曆", "史萊姆的聊天室"]
        const rankA = pinned.indexOf(a.displayName)
        const rankB = pinned.indexOf(b.displayName)
        if (rankA !== -1 || rankB !== -1) {
          if (rankA === -1) return 1
          if (rankB === -1) return -1
          return rankA - rankB
        }
        if (!a.isFolder && !b.isFolder) {
          var dateA = (a.slugSegment.match(/\d{8}/) || [""])[0]
          var dateB = (b.slugSegment.match(/\d{8}/) || [""])[0]
          if (dateA && dateB) return dateB.localeCompare(dateA)
        }
        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          })
        }
        return a.isFolder ? -1 : 1
      },
    }),
  ],
  right: [],
}
