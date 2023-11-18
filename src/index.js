import "./index.css";
import menuIcon from "./menu.svg";
import starIcon from "./star.svg";
import DropDownList from "./DropDownList";
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
  const dropDownListBtnIconHtml = buildIconHtml(btnIcon);
  const dropDownListBtnHtml = wrapHtmlElements(
    "input",
    dropDownListBtnIconHtml,
  );
  dropDownListBtnHtml.id = "drop-down-list-btn";
  dropDownListBtnHtml.type = "button";
  return dropDownListBtnHtml;
}

const dropDownList = DropDownList(dropDownListIconTextClickFuncObjects);

const dropDownListBtnHtml = buildDropDownListBtnHtml(dropDownListBtnIcon);
dropDownListBtnHtml.addEventListener("click", displayDropDownList);

const header = wrapHtmlElements("header", dropDownListBtnHtml);

const body = document.querySelector("body");
body.appendChild(header);
