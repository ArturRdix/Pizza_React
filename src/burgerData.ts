
const burgerItems = [
    {
      name: "Чизбургер",
      weight: "200 г",
      desc: "Говядина, чеддер, салат, помидор, лук, соус",
      price: 250,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Бургер с курицей",
      weight: "220 г",
      desc: "Куриное филе, моцарелла, соус барбекю, салат, огурец",
      price: 280,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Вегетарианский бургер",
      weight: "190 г",
      desc: "Чёрные бобы, авокадо, помидор, салат, соус йогурта",
      price: 260,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Бургер с беконом",
      weight: "230 г",
      desc: "Говядина, бекон, чеддер, лук, майонез, салат",
      price: 300,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Бургер с грибами",
      weight: "210 г",
      desc: "Говядина, грибы, сыр, майонез, лук, салат",
      price: 290,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Классический бургер",
      weight: "200 г",
      desc: "Говядина, сыр, лук, помидор, солёные огурцы, соус",
      price: 270,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Бургер с яйцом",
      weight: "240 г",
      desc: "Говядина, яйцо, бекон, сыр, салат, соус",
      price: 320,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Бургер с рыбой",
      weight: "220 г",
      desc: "Филе рыбы, салат, помидор, соус тартар",
      price: 290,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Бургер с авокадо",
      weight: "210 г",
      desc: "Говядина, авокадо, сыр, лук, майонез, салат",
      price: 310,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Острый бургер",
      weight: "230 г",
      desc: "Говядина, острый соус, перец, лук, сыр",
      price: 330,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Бургер с двойной говядиной",
      weight: "250 г",
      desc: "Двойная порция говядины, сыр, помидор, салат, соус",
      price: 350,
      img: "./img/burger.png",
      id: 0,
    },
    {
      name: "Бургер с грибами",
      weight: "210 г",
      desc: "Говядина, грибы, сыр, майонез, лук, салат",
      price: 290,
      img: "./img/burger.png",
      id: 0,
    },
];

  
  
  function addId() {
    let idCount = 1;
  
    burgerItems.map((e) => {
      e.id = idCount;
      idCount++;
    });
  }
  
  addId();
  
  export default burgerItems;
  