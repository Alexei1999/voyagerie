import { PlaceOverviewType, PlaceType } from "entities/place/models";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import image4 from "./image4.png";

export const placesMock: PlaceType[] = [
  {
    image: image1,
    airTemperature: 28,
    waterTemperature: 25,
    hotelsNumber: 36,
    name: { ru: "Мальдивы", de: "Maldives", en: "Maldives", fr: "Maldives" },
    slug: "maldives",
    countryCode: "mv",
  },
  {
    image: image2,
    airTemperature: 27,
    waterTemperature: 26,
    hotelsNumber: 10,
    name: {
      ru: "Сейшеллы",
      de: "Seychelles",
      en: "Seychelles",
      fr: "Seychelles",
    },
    slug: "seychelles",
    countryCode: "sc",
  },
  {
    image: image3,
    airTemperature: 23,
    waterTemperature: 20,
    hotelsNumber: 15,
    name: { ru: "Турция", de: "Turkey", en: "Turkey", fr: "Turkey" },
    slug: "turkey",
    countryCode: "tr",
  },
  {
    image: image1,
    airTemperature: 28,
    waterTemperature: 25,
    hotelsNumber: 36,
    name: { ru: "Мальдивы", de: "Maldives", en: "Maldives", fr: "Maldives" },
    slug: "maldives2",
    countryCode: "mv",
  },
];

export const placeMock: PlaceOverviewType = {
  countryCode: "mv",
  totalHotelsNumber: 860,
  airTemperature: 28,
  hotelsNumber: 36,
  image: image1,
  name: { ru: "Мальдивы", de: "Maldives", en: "Maldives", fr: "Maldives" },
  slug: "maldives",
  waterTemperature: 25,
  hotels: [
    {
      time: 2,
      image: image4,
      name: {
        ru: "Отель в Мальдивах",
        de: "Hotel in Maldives",
        en: "Hotel in Maldives",
        fr: "Hotel in Maldives",
      },
      timeType: "days",
      transferType: "air",
      cost: 1000,
      slug: "maldives-hotel",
    },
    {
      time: 16,
      image: image4,
      name: {
        ru: "Отель в Сейшелах",
        de: "Hotel in Seychelles",
        en: "Hotel in Seychelles",
        fr: "Hotel in Seychelles",
      },
      timeType: "hours",
      transferType: "water",
      cost: 500,
      slug: "seychelles-hotel",
    },
  ],
};
