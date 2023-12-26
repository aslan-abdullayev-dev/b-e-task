import {
  bicycle,
  camera,
  climate_control,
  controller,
  iron,
  laptop,
  monitor,
  phone,
  refrigirator,
} from "../assets/svg/index";

export const sidebarData = [
  {
    name: "Telefonlar və qadcetlər",
    icon: phone,
    children: [
      {
        categoryName: "Brendlər",
        categoryItems: [
          { itemName: "Apple" },
          { itemName: "Huawei" },
          { itemName: "Samsung" },
          { itemName: "Realme" },
          { itemName: "Xiaomi" },
          { itemName: "Infinix" },
        ],
      },
      {
        categoryName: "Xiaomi",
        categoryItems: [
          { itemName: "Xiaomi Lite Series" },
          { itemName: "Xiaomi 12 Series" },
          { itemName: "Redmi Note Series" },
          { itemName: "Redmi Series" },
          { itemName: "Redmi Note 12" },
          { itemName: "Redmi Series 13" },
        ],
      },

      {
        categoryName: "Samsung",
        categoryItems: [
          { itemName: "Galaxy watch A03" },
          { itemName: "Galaxy S23" },
          { itemName: "Samsung Watch" },
          { itemName: "Samsung Galaxy A03" },
          { itemName: "Samsung Galaxy " },
          { itemName: "Samsung Galaxy A03" },
        ],
      },
      {
        categoryName: "Smart saatlar",
        categoryItems: [
          { itemName: "Apple watch" },
          { itemName: "Samsung watch" },
          { itemName: "Huawei" },
          { itemName: "Canyon" },
          { itemName: "Huawei" },
          { itemName: "Canyon Watch" },
        ],
      },
      {
        categoryName: "Apple",
        categoryItems: [
          { itemName: "iPhone 14 Pro Max" },
          { itemName: "iPhone 13 Pro Max" },
          { itemName: "iPhone 11 Pro" },
          { itemName: "Apple watch SE" },
        ],
      },
    ],
    path: "telefonlar-qadcetler",
  },
  {
    name: "Televizorlar, audio-video",
    icon: monitor,
    children: [],
    path: "televozizorlar-audio-video",
  },
  {
    name: "Noutbuklar və kompüterlər",
    icon: laptop,
    children: [],
    path: "noutbuklar-kompyuterler",
  },
  {
    name: "Böyük məişət texnikası",
    icon: refrigirator,
    children: [],
    path: "boyuk-meiset-texnikasi",
  },
  {
    name: "Kiçik məişət texnikası",
    icon: iron,
    children: [],
    path: "kicik-meiset-texnikasi",
  },
  {
    name: "İqlim texnikası",
    icon: climate_control,
    children: [],
    path: "iqlim-texnikasi",
  },
  { name: "Foto və Video", icon: camera, children: [], path: "foto-video" },
  {
    name: "Oyun konsolları, oyunlar",
    icon: controller,
    children: [],
    path: "oyun-konsollari",
  },
  {
    name: "Fərdi nəqliyyat",
    icon: bicycle,
    children: [],
    path: "ferdi-neqliyyat",
  },
];
