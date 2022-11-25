import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import DishForm from "./components/DishForm/DishForm";
import Dishes from "./components/Dishes/Dishes";
import {CartDish, Dish} from "./types";
import Cart from "./components/Cart/Cart";
import Home from "./containers/Home/Home";
import NewDish from "./containers/NewDish/NewDish";

function App() {

  const [location, setLocation] = useState('home');
  const [dishes, setDishes] = useState<Dish[]>([
    {id: '1', name: 'Plov', description: 'Very tasty pilaf', image: '', price: 250},
    {id: '2', name: 'Another plov', description: 'Also pilaf', image: '', price: 280},
  ]);

  const [cartDishes, setCartDishes] = useState<CartDish[]>([]);

  const addDish = (newDish: Dish) => {
    setDishes(prev => [...prev, newDish]);
  };

  const addDishToCart = (dish: Dish) => {
    setCartDishes(prev => {
      const existingIndex = prev.findIndex(item => {
        return item.dish === dish;
      });

      if(existingIndex !== -1) {
        const itemsCopy = [...prev];
        const itemCopy = {...prev[existingIndex]};
        itemCopy.amount++;
        itemsCopy[existingIndex] = itemCopy;
        return itemsCopy;
      }
      return [...prev, {dish, amount: 1}];
    });
    console.log(cartDishes);
  };

  let content = null;

  if(location === 'home') {
    content = (
      <Home dishes={dishes} addToCart={addDishToCart} cartDishes={cartDishes}/>
    );
  }
  if(location === 'new-dish') {
    content = (
      <NewDish onCreate={addDish}/>
    );
  }

  return (
    <>
      <header>
        <Navbar changeLocation={setLocation}/>
      </header>
      <main className="container-fluid">
        {content}
      </main>
    </>
  );
}

export default App;
