export const dataSidebarItems = [
    {
      title: "Home",
      icon: "home",
      route: "/Home",
      id: "menuHome",
    },
    {
      title: "Properties",
      icon: "office",
      route: "/Properties",
      id: "menuProperties",
  
      submenu: [
        {
          title: "Manage Properties",
          route: "/",
        },
        {
          title: "Zik Facilities",
          route: "/",
        },
        {
          title: "Zik Rooms",
          route: "/",
        },
        {
          title: "Zik Boards",
          route: "/",
        },
      ],
    },
    {
      title: "Media Library",
      icon: "image",
      route: "/Media",
      id: "menuMedia",
    },
    {
      title: "Suppliers",
      icon: "earth",
      route: "/Suppliers",
      id: "menuSuppliers",
    },
    {
      title: "Accounts",
      icon: "user",
      route: "/Accounts",
      id: "menuAccounts",
    },
    {
      title: "Plans",
      icon: "credit-card",
      route: "/Plans",
      id: "menuPlans",
    },
    {
      title: "Settings",
      icon: "cog",
      route: "/Settings",
      id: "menuSettings",
    },
  ];
  