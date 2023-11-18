export function wrapHtmlElements(wrapperTag, ...elements) {
  const wrapper = document.createElement(wrapperTag);
  return wrapper.append(...elements);
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
