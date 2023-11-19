import { buildListItemHtml } from "./htmlBuilders";

export default function DropDownList(iconTextClickFuncObjects) {
  const HTML = document.createElement("ul");

  function insertNewItemAtBeginning(iconTextClickFuncObject) {
    const { icon, text, clickFunc } = iconTextClickFuncObject;
    const newDropDownListItemHtml = buildListItemHtml(icon, text, clickFunc);
    newDropDownListItemHtml.classList.add("drop-down-list-item");
    HTML.insertBefore(newDropDownListItemHtml, HTML.firstChild);
  }

  iconTextClickFuncObjects.reverse().forEach((iconTextClickFuncObject) => {
    insertNewItemAtBeginning(iconTextClickFuncObject);
  });

  function removeFirstItem() {
    HTML.removeChild(HTML.firstChild);
  }

  return {
    HTML,
    removeFirstItem,
    insertNewItemAtBeginning,
  };
}
