export type ProductItems = {
  id: number;
  name: string;
  desc: string;
  weight: string;
  img: string;
  price: number;
  modifier?: PizzaModifier[];
};
export type CurrentProduct = {
  name: string;
  weight: string;
  desc: string;
  price: number;
  img: string;
  id: number;
  idOrder: string;
  quantity: number;
  modifier: PizzaModifier[];
};
export type PizzaModifier = {
  name: string;
  price: number;
  id: number;
  quantity: number;
};

