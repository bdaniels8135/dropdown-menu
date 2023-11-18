function wrapHtmlElements(wrapperTag, ...elements) {
  const wrapper = document.createElement(wrapperTag);
  return wrapper.append(...elements);
}

function buildIconHtml(icon) {
  const iconHtml = document.createElement("img");
  iconHtml.src = icon;
  return iconHtml;
}

function buildTextHtml(text) {
  const textHtml = document.createElement("p");
  textHtml.innerText = text;
  return textHtml;
}

function buildDropDownListItemHtml(icon, text) {
  const iconHtml = buildIconHtml(icon);
  iconHtml.classList.add("list-item-icon");
  const textHtml = buildTextHtml(text);
  textHtml.classList.add("list-item-text");
  return wrapHtmlElements("li", iconHtml, textHtml);
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
      dropDownListItemHtml.addEventListener("click", clickFunc);
      HTML.appendChild(dropDownListItemHtml);
    });
    return {
      HTML,
    };
  })();
}
