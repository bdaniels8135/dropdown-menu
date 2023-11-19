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
  return (() => {
    const tabsListObjects = [];
    const dropDownListObjects = [...listObjects];

    const tabsList = TabsList(tabsListObjects);
    tabsList.HTML.classList.add("tabs-list");
    const HTML = wrapHtmlElements("nav", tabsList.HTML);

    if (dropDownListObjects.length > 0) {
      const dropDownList = DropDownList(dropDownListObjects);
      dropDownList.HTML.classList.add("drop-down-list");
      dropDownList.HTML.addEventListener("click", () => {
        toggleDisplayedClass(dropDownList.HTML);
      });

      const dropDownListBtnHtml = buildDropDownListBtnHtml(dropDownListBtnIcon);
      dropDownListBtnHtml.addEventListener("click", () => {
        toggleDisplayedClass(dropDownList.HTML);
      });
      HTML.append(dropDownListBtnHtml, dropDownList.HTML);
    }

    function isTabsListOverflowed() {
      if (tabsList.HTML.clientWidth < tabsList.HTML.scrollWidth) return true;
      return false;
    }

    function moveLastTabListObjectToDropDown() {
      dropDownListObjects.unshift(tabsListObjects.pop());
    }

    return {
      HTML,
    };
  })();
}
