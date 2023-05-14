import mock from "../mock";
import { sub } from "date-fns";
import { Chance } from "chance";

const chance = new Chance();

const ProductsData = [
  {
    title: "2 Bedroom House",
    location: "Braga",
    price: 275,
    related: false,
    category: ["House"],
    rating: 3,
    stock: true,
    qty: 1,
    photo: "/images/products/h1.jpeg",
    id: 1,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: "3 Bedroom Apartment",
    location: "Porto",
    price: 699,
    related: true,
    category: ["books"],
    rating: 3,
    stock: false,
    qty: 1,
    photo: "/images/products/h2.jpeg",
    id: 2,
    created: sub(new Date(), { days: 10, hours: 8, minutes: 69 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: "4 Bedroom House",
    location: "Braga",
    price: 350,
    related: false,
    category: ["fashion", "books"],
    rating: 3,
    stock: true,
    qty: 1,
    photo: "/images/products/h3.jpeg",
    id: 3,
    created: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: "1 Bedroom Apartment",
    location: "Guimarães",
    price: 125,
    related: true,
    category: ["electronics"],
    rating: 3,
    stock: true,
    qty: 1,
    photo: "/images/products/h4.jpeg",
    id: 4,
    created: sub(new Date(), { days: 4, hours: 9, minutes: 40 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: "2 Bedroom House",
    location: "Famalicão",
    price: 150,
    related: true,
    category: ["fashion", "electronics"],
    rating: 3,
    stock: false,
    qty: 1,
    photo: "/images/products/h5.jpeg",
    id: 5,
    created: sub(new Date(), { days: 2, hours: 5, minutes: 50 }),
    description: chance.paragraph({ sentences: 2 }),
  },
  {
    title: "6 Bedroom Apartment",
    location: "Braga",
    price: 25,
    related: true,
    category: ["electronics"],
    rating: 3,
    stock: true,
    qty: 1,
    photo: "/images/products/h6.jpeg",
    id: 6,
    created: sub(new Date(), { days: 2, hours: 9, minutes: 45 }),
    description: chance.paragraph({ sentences: 2 }),
  },
];

mock.onGet("/api/data/eCommerce/ProductsData").reply(() => {
  return [200, ProductsData];
});

export default ProductsData;
