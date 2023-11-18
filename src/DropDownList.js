import { buildIconHtml, buildTextHtml, wrapHtmlElements } from "./htmlBuilders";

function buildDropDownListItemHtml(icon, text) {
  const iconHtml = buildIconHtml(icon);
  iconHtml.classList.add("list-item-icon");
  const textHtml = buildTextHtml(text);
  textHtml.classList.add("list-item-text");
  const dropDownListItemHtml = wrapHtmlElements("li", iconHtml, textHtml);
  dropDownListItemHtml.classList.add("drop-down-list-item");
  return dropDownListItemHtml;
}

function buildEmptyDropDownListHtml() {
  const emptyDropDownListHtml = document.createElement("ul");
  return emptyDropDownListHtml;
}

export default function DropDownList(iconTextClickFuncObjects) {
  return (() => {
    const HTML = buildEmptyDropDownListHtml();
    iconTextClickFuncObjects.forEach(({ icon, text, clickFunc }) => {
      const dropDownListItemHtml = buildDropDownListItemHtml(icon, text);
      dropDownListItemHtml.addEventListener("click", (event) => {
        clickFunc(event);
      });
      HTML.appendChild(dropDownListItemHtml);
    });
    return {
      HTML,
    };
  })();
}
