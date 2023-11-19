import { buildListItemHtml } from "./htmlBuilders";

export default function buildTabsListHtml(iconTextClickFuncObjects) {
  const tabsListHtml = document.createElement("ul");
  iconTextClickFuncObjects.forEach(({ icon, text, clickFunc }) => {
    const tabsListItemHtml = buildListItemHtml(icon, text, clickFunc);
    tabsListItemHtml.classList.add("tabs-list-item");
    tabsListHtml.appendChild(tabsListItemHtml);
  });
  return tabsListHtml;
}
