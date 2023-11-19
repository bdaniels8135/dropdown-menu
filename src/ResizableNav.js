import menuIcon from "./menu.svg";
import DropDownList from "./DropDownList";
import TabsList from "./TabsList";
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

const defaultDropDownMenuIcon = menuIcon;

export default function ResizableNav(
  listObjects,
  dropDownListBtnIcon = defaultDropDownMenuIcon,
) {
  const tabsListObjects = [...listObjects];
  const dropDownListObjects = [];

  const tabsList = TabsList(tabsListObjects);

  const dropDownList = DropDownList(dropDownListObjects);
  dropDownList.HTML.addEventListener("click", () => {
    toggleDisplayedClass(dropDownList.HTML);
  });

  function buildHtml() {
    const tabsListHtml = tabsList.HTML;
    const dropDownListHtml = dropDownList.HTML;

    const dropDownListBtnHtml = buildDropDownListBtnHtml(dropDownListBtnIcon);
    dropDownListBtnHtml.addEventListener("click", () => {
      toggleDisplayedClass(dropDownList.HTML);
    });

    return wrapHtmlElements(
      "nav",
      tabsListHtml,
      dropDownListBtnHtml,
      dropDownListHtml,
    );
  }

  function isTabsListOverflowed() {
    if (tabsList.HTML.clientWidth < tabsList.HTML.scrollWidth) return true;
    return false;
  }

  function moveLastTabToDropDown() {
    const movedListObject = tabsListObjects.pop();
    dropDownListObjects.unshift(movedListObject);
    tabsList.removeLastItem();
    dropDownList.insertNewItemAtBeginning(movedListObject);
  }

  function moveFirstDropDownToTab() {
    const movedListObject = dropDownListObjects.shift();
    tabsListObjects.push(movedListObject);
    dropDownList.removeFirstItem();
    tabsList.insertNewItemAtEnd(movedListObject);
  }

  function reset() {
    while (dropDownList.HTML.firstChild) moveFirstDropDownToTab();
  }

  const HTML = buildHtml();
  HTML.classList.add("resizable-nav");

  return {
    HTML,
    isTabsListOverflowed,
    moveLastTabToDropDown,
    reset,
  };
}
