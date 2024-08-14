
const sushiItems = [
  {
    name: "Филадельфия с лососем",
    weight: "250 г",
    desc: "Лосось, сливочный сыр, авокадо, огурец, кунжут",
    price: 250,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Калифорния с крабом",
    weight: "300 г",
    desc: "Крабовое мясо, огурец, авокадо, соус",
    price: 350,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Спайси тунец",
    weight: "280 г",
    desc: "Тунец, острый соус, авокадо, огурец, кунжут",
    price: 320,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Темпура суши",
    weight: "320 г",
    desc: "Темпура-роллы, сливочный сыр, огурец, соус",
    price: 330,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Унаги",
    weight: "290 г",
    desc: "Угорь, соус унаги, авокадо, огурец",
    price: 310,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Острые креветки",
    weight: "350 г",
    desc: "Креветки, острый соус, огурец, авокадо",
    price: 340,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Сашими",
    weight: "330 г",
    desc: "Ассорти из свежих видов рыбы, соевый соус, васаби",
    price: 360,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Кунсэй",
    weight: "300 г",
    desc: "Лосось, соус кунжут, авокадо, огурец",
    price: 340,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Ролл с лососем и авокадо",
    weight: "320 г",
    desc: "Лосось, авокадо, крем-сыр, огурец",
    price: 350,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Ролл с тунцом и острым соусом",
    weight: "310 г",
    desc: "Тунец, острый соус, огурец, авокадо",
    price: 370,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Ролл с крабом и авокадо",
    weight: "330 г",
    desc: "Крабовое мясо, авокадо, огурец, соус",
    price: 360,
    img: "./img/sushi.png",
    id: 0,
  },
  {
    name: "Суши-миксы",
    weight: "340 г",
    desc: "Ассорти суши с разными начинками",
    price: 300,
    img: "./img/sushi.png",
    id: 0,
  },
];



function addId() {
  let idCount = 1;

  sushiItems.map((e) => {
    e.id = idCount;
    idCount++;
  });
}

addId();

export default sushiItems;
