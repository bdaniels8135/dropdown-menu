import buildDropDownListHtml from "./buildDropDownListHtml";
import buildTabsListHtml from "./buildTabsListHtml";
import { wrapHtmlElements, buildIconHtml } from "./htmlBuilders";

function buildDropDownListBtnHtml(btnIcon) {
  const dropDownListBtnIconHtml = buildIconHtml(btnIcon);
  const dropDownListBtnHtml = wrapHtmlElements("div", dropDownListBtnIconHtml);
  dropDownListBtnHtml.classList.add("drop-down-list-btn");
  return dropDownListBtnHtml;
}

function toggleDisplayedClass(htmlElement) {
  htmlElement.classList.toggle("displayed");
}

export default function buildMobileNavHtml(
  dropDownListBtnIcon,
  iconTextClickFuncObjects,
) {
  const tabsListObjects = iconTextClickFuncObjects.slice(0, 2);
  const dropDownListObjects = iconTextClickFuncObjects.slice(2, 5);

  const tabsListHtml = buildTabsListHtml(tabsListObjects);
  tabsListHtml.classList.add("tabs-list");

  const dropDownListHtml = buildDropDownListHtml(dropDownListObjects);
  dropDownListHtml.classList.add("drop-down-list");
  dropDownListHtml.addEventListener("click", () => {
    toggleDisplayedClass(dropDownListHtml);
  });

  const dropDownListBtnHtml = buildDropDownListBtnHtml(dropDownListBtnIcon);
  dropDownListBtnHtml.addEventListener("click", () => {
    toggleDisplayedClass(dropDownListHtml);
  });

  const mobileNavHtml = wrapHtmlElements(
    "nav",
    tabsListHtml,
    dropDownListBtnHtml,
    dropDownListHtml,
  );
  return mobileNavHtml;
}
