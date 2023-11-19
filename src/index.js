import "./index.css";
import "./dropDownList.css";
import menuIcon from "./menu.svg";
import starIcon from "./star.svg";
import buildDropDownListHtml from "./buildDropDownListHtml";
import { buildIconHtml, wrapHtmlElements } from "./htmlBuilders";

const dropDownListBtnIcon = menuIcon;
const defaultIcon = starIcon;

function defaultClickFunc(event) {
  console.log(event.target);
}

const dropDownListIconTextClickFuncObjects = [
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
];

function buildDropDownListBtnHtml(btnIcon) {
  const dropDownListBtnHtml = buildIconHtml(btnIcon);
  dropDownListBtnHtml.classList.add("drop-down-list-btn");
  return dropDownListBtnHtml;
}

function displayDropDownList(dropDownListHtml) {
  dropDownListHtml.classList.toggle("displayed");
}

const dropDownListHtml = buildDropDownListHtml(
  dropDownListIconTextClickFuncObjects,
);
dropDownListHtml.classList.add("drop-down-list");

const dropDownListBtnHtml = buildDropDownListBtnHtml(dropDownListBtnIcon);
dropDownListBtnHtml.addEventListener("click", () => {
  displayDropDownList(dropDownListHtml);
});

const header = wrapHtmlElements(
  "header",
  dropDownListBtnHtml,
  dropDownListHtml,
);

const body = document.querySelector("body");
body.appendChild(header);
