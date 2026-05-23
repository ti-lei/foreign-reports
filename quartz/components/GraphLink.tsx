import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import script from "./scripts/graph.inline"
import { classNames } from "../util/lang"

const globalGraphCfg = {
  drag: true,
  zoom: true,
  depth: -1,
  scale: 0.9,
  repelForce: 0.5,
  centerForce: 0.2,
  linkDistance: 30,
  fontSize: 0.6,
  opacityScale: 1,
  showTags: true,
  removeTags: [],
  focusOnHover: true,
  enableRadial: true,
}

export default (() => {
  const GraphLink: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    return (
      <div class={classNames(displayClass, "graph-link-wrapper")}>
        <button class="global-graph-icon graph-link-btn" aria-label="Open Graph View">
          Graph View
        </button>
        <div class="global-graph-outer">
          <div class="global-graph-container" data-cfg={JSON.stringify(globalGraphCfg)}></div>
        </div>
      </div>
    )
  }

  GraphLink.css = `
    .graph-link-wrapper {
      margin-top: -0.8rem;
      margin-bottom: -0.8rem;
    }

    .graph-link-btn {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      color: var(--secondary);
      font-size: 0.85rem;
      font-family: inherit;
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    .graph-link-btn:hover {
      color: var(--tertiary);
    }

    .global-graph-outer {
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100%;
      backdrop-filter: blur(4px);
      display: none;
      overflow: hidden;
    }

    .global-graph-outer.active {
      display: inline-block;
    }

    .global-graph-container {
      border: 1px solid var(--lightgray);
      background-color: var(--light);
      border-radius: 5px;
      box-sizing: border-box;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 80vh;
      width: 80vw;
    }
  `

  GraphLink.afterDOMLoaded = script

  return GraphLink
}) satisfies QuartzComponentConstructor
