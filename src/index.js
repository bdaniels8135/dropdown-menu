import "./index.css";
import "./dropDownList.css";
import "./tabsList.css";
import starIcon from "./star.svg";
import { wrapHtmlElements } from "./htmlBuilders";
import ResizableNav from "./ResizableNav";

const defaultIcon = starIcon;

function defaultClickFunc(event) {
  console.log(event.currentTarget);
}

const defaultListIconTextClickFuncObjects = [
  {
    icon: defaultIcon,
    text: "Option 1",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 2",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 3",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 4",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 5",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 6",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 7",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 8",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 9",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 10",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 11",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 12",
    clickFunc: defaultClickFunc,
  },
  {
    icon: defaultIcon,
    text: "Option 13",
    clickFunc: defaultClickFunc,
  },
];

const body = document.querySelector("body");

const nav = ResizableNav(defaultListIconTextClickFuncObjects);

const header = wrapHtmlElements("header", nav.HTML);

body.appendChild(header);

function fitNav() {
  nav.reset();
  while (nav.isTabsListOverflowed()) {
    nav.moveLastTabToDropDown();
  }
  const dropDownListBtnHtml = nav.HTML.querySelector(".drop-down-list-btn");
  const dropDownListHtml = nav.HTML.querySelector(".drop-down-list");
  if (dropDownListHtml.firstChild) {
    dropDownListBtnHtml.classList.add("displayed");
  } else {
    dropDownListBtnHtml.classList.remove("displayed");
    dropDownListHtml.classList.remove("displayed");
  }
}

fitNav();
nav.moveLastTabToDropDown();
window.addEventListener("resize", fitNav);
