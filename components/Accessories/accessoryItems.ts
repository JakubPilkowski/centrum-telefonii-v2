import { nanoid } from "nanoid";

import { AccessoryProps } from "components/Accessory";

import bookCase from "public/etui_venus.png";
import rubberCase from "public/guma_jelly.png";
import charger from "public/ladowarka.png";
import battery from "public/bateria_samsung.png";
import smartphone from "public/smartphone.png";
import glassProtection from "public/szklo_9d.png";
import carHandle from "public/uchwyt_na_szybe.png";
import headphones from "public/sluchawki.png";

type AccessoryItem = Omit<AccessoryProps, "className"> & {
  id: string;
};

const accessoryItems: AccessoryItem[] = [
  {
    id: nanoid(),
    icon: "shield",
    image: bookCase,
    imageAlt: "Etui zamykane",
    name: "Etui zamykane",
    price: "od 30zł",
  },
  {
    id: nanoid(),
    icon: "shield",
    image: rubberCase,
    imageAlt: "Etui gumowe",
    name: "Etui gumowe",
    price: "od 30zł",
  },
  {
    id: nanoid(),
    icon: "power",
    image: charger,
    imageAlt: "Ładowarka",
    name: "Ładowarki",
    price: "od 20zł",
  },
  {
    id: nanoid(),
    icon: "battery_charging_full",
    image: battery,
    imageAlt: "Bateria samsung",
    name: "Baterie",
    price: "od 30zł",
  },
  {
    id: nanoid(),
    icon: "phone_iphone",
    image: smartphone,
    imageAlt: "Smartfon",
    name: "Smartfony",
    price: "od 200zł",
  },
  {
    id: nanoid(),
    icon: "phonelink_lock",
    image: glassProtection,
    imageAlt: "Szkło hartowane",
    name: "Szkła hartowane",
    price: "od 25zł",
  },
  {
    id: nanoid(),
    icon: "directions_car",
    image: carHandle,
    imageAlt: "Uchwyt samochodowy",
    name: "Uchwyty samochodowe",
    price: "od 30zł",
  },
  {
    id: nanoid(),
    icon: "headphones",
    image: headphones,
    imageAlt: "Słuchawki",
    name: "Słuchawki",
    price: "od 20zł",
  },
];

export default accessoryItems;
