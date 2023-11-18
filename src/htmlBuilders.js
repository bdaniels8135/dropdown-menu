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
