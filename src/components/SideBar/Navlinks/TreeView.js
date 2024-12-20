import { faFile } from "@fortawesome/free-regular-svg-icons";
import {
  faChartSimple,
  faFilePen,
  faGauge,
  faLaptop,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const treeData = [
  {
    id: 1,
    name:"Dashboard",
    path:"/",
    icon: <FontAwesomeIcon icon={faGauge} />,
  },
  {
    id: 13,
    name: "Elements",
    icon: <FontAwesomeIcon icon={faLaptop} />,
    children: [
      { id: 14, name:  "Buttons" ,path: "/elements/buttons" },
      { id: 15, name: "Modals & Alerts", path: "/elements/modals" },
      { id: 16, name: "Navbar & Tabs" , path: "/elements/navs" }, 
      { id: 17, name: "General" , path: "/elements/general" }, 
    ],
  },
  {
    id: 2,
    name: "Forms",
    icon: <FontAwesomeIcon icon={faFilePen} />,
    children: [
      { id: 3, name:  "General Elements" ,path: "/forms/general" },
      { id: 4, name: "Advanced Elements", path: "/forms/advanced" },
      { id: 5, name: "Editors" , path: "/forms/editors" },
    ],
  },
  {
    id: 6,
    name: "Tables",
    icon: <FontAwesomeIcon icon={faTable} />,
    children: [
      { id: 7, name: "Basic Tables" , path: "/tables/basic" },
      { id: 8, name: "DataTables", path: "/tables/datatables" },
    ],
  },
  {
    id: 9,
    name: "Charts",
    path:"/charts",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
  },
  {
    id: 10,
    name: "Pages",
    icon: <FontAwesomeIcon  icon={faFile} />,
    children: [
      { id: 11, name: "Register & Login" ,path: "/pages/register-login"},
    ],
  },
];
