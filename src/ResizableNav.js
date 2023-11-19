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

  const dropDownListBtnHtml = buildDropDownListBtnHtml(dropDownListBtnIcon);
  dropDownListBtnHtml.addEventListener("click", () => {
    toggleDisplayedClass(dropDownList.HTML);
  });

  function isTabsListOverflowed() {
    console.log(
      `Overflow Checked. Scroll: ${tabsList.HTML.scrollWidth} Client: ${tabsList.HTML.clientWidth}`,
    );
    if (tabsList.HTML.scrollWidth > tabsList.HTML.clientWidth) return true;
    return false;
  }

  function moveLastTabToDropDown() {
    const movedListObject = tabsListObjects.pop();
    dropDownListObjects.unshift(movedListObject);
    tabsList.removeLastItem();
    dropDownList.insertNewItemAtBeginning(movedListObject);
    console.log(`Item Moved ${movedListObject}`);
  }

  function moveFirstDropDownToTab() {
    const movedListObject = dropDownListObjects.shift();
    tabsListObjects.push(movedListObject);
    dropDownList.removeFirstItem();
    tabsList.insertNewItemAtEnd(movedListObject);
  }

  function reset() {
    console.log("Reset Run");
    while (dropDownList.HTML.firstChild) moveFirstDropDownToTab();
  }

  function fit() {
    reset();
    while (isTabsListOverflowed()) {
      moveLastTabToDropDown();
    }
    if (dropDownList.HTML.firstChild) {
      dropDownListBtnHtml.classList.add("displayed");
    } else {
      dropDownListBtnHtml.classList.remove("displayed");
      dropDownList.HTML.classList.remove("displayed");
    }
  }

  const HTML = wrapHtmlElements(
    "nav",
    tabsList.HTML,
    dropDownListBtnHtml,
    dropDownList.HTML,
  );
  HTML.classList.add("resizable-nav");

  return {
    HTML,
    fit,
  };
}
