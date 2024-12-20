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
      { id: 14, name:  "Buttons" ,path: "/dashboard/elements/buttons" },
      { id: 15, name: "Modals & Alerts", path: "/dashboard/elements/modals" },
      { id: 16, name: "Navbar & Tabs" , path: "/dashboard/elements/navs" }, 
      { id: 17, name: "General" , path: "/dashboard/elements/general" }, 
    ],
  },
  {
    id: 2,
    name: "Forms",
    icon: <FontAwesomeIcon icon={faFilePen} />,
    children: [
      { id: 3, name:  "General Elements" ,path: "/dashboard/forms/general" },
      { id: 4, name: "Advanced Elements", path: "/dashboard/forms/advanced" },
      { id: 5, name: "Editors" , path: "/dashboard/forms/editors" },
    ],
  },
  {
    id: 6,
    name: "Tables",
    icon: <FontAwesomeIcon icon={faTable} />,
    children: [
      { id: 7, name: "Basic Tables" , path: "/dashboard/tables/basic" },
      { id: 8, name: "DataTables", path: "/dashboard/tables/datatables" },
    ],
  },
  {
    id: 9,
    name: "Charts",
    path:"/dashboard/charts",
    icon: <FontAwesomeIcon icon={faChartSimple} />,
  },
  {
    id: 10,
    name: "Pages",
    icon: <FontAwesomeIcon  icon={faFile} />,
    children: [
      { id: 11, name: "Register & Login" ,path: "/dashboard/pages/register-login"},
    ],
  },
];
