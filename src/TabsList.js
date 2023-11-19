import { buildListItemHtml } from "./htmlBuilders";

export default function TabsList(iconTextClickFuncObjects) {
  const HTML = document.createElement("ul");
  HTML.classList.add("tabs-list");

  function insertNewItemAtEnd(iconTextClickFuncObject) {
    const { icon, text, clickFunc } = iconTextClickFuncObject;
    const newTabListItemHtml = buildListItemHtml(icon, text, clickFunc);
    newTabListItemHtml.classList.add("tabs-list-item");
    HTML.appendChild(newTabListItemHtml);
  }

  iconTextClickFuncObjects.forEach((iconTextClickFuncObject) => {
    insertNewItemAtEnd(iconTextClickFuncObject);
  });

  function removeLastItem() {
    HTML.removeChild(HTML.lastChild);
  }

  return {
    HTML,
    insertNewItemAtEnd,
    removeLastItem,
  };
}
