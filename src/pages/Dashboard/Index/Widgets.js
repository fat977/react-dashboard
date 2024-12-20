

import { faUserPlus, faUsers, faChartSimple,faCartShopping } from "@fortawesome/free-solid-svg-icons";
export const widgets = [
    {
        count: 40,
        name: "Users Registeration",
        icon: faUserPlus,
        iconColor:'rgb(242 183 7',
        class: "warning"
      },
      {
        count: 70,
        name: "Orders",
        icon: faCartShopping,
        iconColor:'rgb(25 129 81',
        class: "success"
      },
      {
        count: 20,
        name: "Visitors",
        icon: faUsers,
        iconColor:'rgb(229 60 76)',
        class: "danger"
      },
      {
        count: '90%',
        name: "Sales",
        icon: faChartSimple,
        iconColor:'rgb(36 109 217)',
        class: "primary"
      },
]