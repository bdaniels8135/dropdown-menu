export function wrapHtmlElements(wrapperTag, ...elements) {
  const wrapperHtml = document.createElement(wrapperTag);
  wrapperHtml.append(...elements);
  return wrapperHtml;
}

export function buildIconHtml(icon) {
  const iconHtml = document.createElement("img");
  iconHtml.src = icon;
  return iconHtml;
}

export function buildTextHtml(text) {
  const textHtml = document.createElement("p");
  textHtml.innerText = text;
  return textHtml;
}

export function buildListItemHtml(icon, text, clickFunc) {
  const iconHtml = buildIconHtml(icon);
  iconHtml.classList.add("list-item-icon");
  const textHtml = buildTextHtml(text);
  textHtml.classList.add("list-item-text");
  const listItemHtml = wrapHtmlElements("li", iconHtml, textHtml);
  listItemHtml.addEventListener("click", (event) => {
    clickFunc(event);
  });
  return listItemHtml;
}
