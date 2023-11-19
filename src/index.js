import "./index.css";
import "./dropDownList.css";
import "./tabsList.css";
import menuIcon from "./menu.svg";
import starIcon from "./star.svg";
import { wrapHtmlElements } from "./htmlBuilders";
import buildMobileNavHtml from "./buildMobileNavHtml";

const dropDownListBtnIcon = menuIcon;
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

const mobileNavHtml = buildMobileNavHtml(
  dropDownListBtnIcon,
  defaultListIconTextClickFuncObjects,
);

const header = wrapHtmlElements("header", mobileNavHtml);
body.appendChild(header);
