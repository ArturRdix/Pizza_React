import pizzaModifiers from "./modifierPizzaData";

const pizzaItems = [
  {
    name: "Маргарита",
    weight: "250 г",
    desc: "Томатный соус, моцарелла, свежий базилик, оливковое масло",
    price: 250,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Пепперони",
    weight: "300 г",
    desc: "Томатный соус, моцарелла, пепперони, орегано",
    price: 350,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Греческая",
    weight: "280 г",
    desc: "Томатный соус, моцарелла, оливки, фета, помидоры, орегано",
    price: 320,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Гавайская",
    weight: "320 г",
    desc: "Томатный соус, моцарелла, ветчина, ананас, базилик",
    price: 330,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Вегетарианская",
    weight: "290 г",
    desc: "Томатный соус, моцарелла, грибы, перец, цукини, помидоры",
    price: 310,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Четыре сезона",
    weight: "350 г",
    desc: "Томатный соус, моцарелла, грибы, ветчина, оливки, артишоки",
    price: 340,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Барбекю",
    weight: "330 г",
    desc: "Барбекю соус, моцарелла, курица, красный лук, кукуруза",
    price: 360,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Карбонара",
    weight: "300 г",
    desc: "Кремовый соус, моцарелла, бекон, яйца, пармезан",
    price: 340,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Мексиканская",
    weight: "320 г",
    desc: "Томатный соус, моцарелла, говядина, перец, кукуруза, острый соус",
    price: 350,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Пицца с лососем",
    weight: "310 г",
    desc: "Кремовый соус, моцарелла, лосось, шпинат, лимон",
    price: 370,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Дьявольская",
    weight: "330 г",
    desc: "Томатный соус, моцарелла, острый колбаски, перец чили, оливки",
    price: 360,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
  {
    name: "Классическая",
    weight: "340 г",
    desc: "Томатный соус, моцарелла, колбаса, грибы, оливки",
    price: 300,
    img: "./img/pizza.png",
    id: 0,
    modifier: pizzaModifiers,
  },
];


function addId() {
  let idCount = 1;

  pizzaItems.map((e) => {
    e.id = idCount;
    idCount++;
  });
}

addId();

export default pizzaItems;
