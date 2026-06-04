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
          if (f.slug === "index") return false
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
