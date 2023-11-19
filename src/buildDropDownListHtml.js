import { buildListItemHtml } from "./htmlBuilders";

export default function buildDropDownListHtml(iconTextClickFuncObjects) {
  return (() => {
    const dropDownListHtml = document.createElement("ul");
    iconTextClickFuncObjects.forEach(({ icon, text, clickFunc }) => {
      const dropDownListItemHtml = buildListItemHtml(icon, text, clickFunc);
      dropDownListItemHtml.classList.add("drop-down-list-item");
      dropDownListHtml.appendChild(dropDownListItemHtml);
    });
    return dropDownListHtml;
  })();
}
