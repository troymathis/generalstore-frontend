import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Drinks(props) {
  const api = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const [drinks, setDrink] = useState(null);
  const getDrinks = async (i) => {
    const response = await fetch(api + i);
    const data = await response.json();
    setDrink(data.drinks);
  }

  useEffect(() => {getDrinks()}, []);

  const loadDrinks = () => {
    return (
      drinks.map((drink, index) => {
        return (
        //   console.log(drink)
            <div key={index} className='drinks-div'>
                <Link to={`/drinks/${drink.idDrink}`}>
                    <h1>{drink.strDrink}</h1>
                </Link>
                <span id="name"><h2>{drink.strDrink}</h2></span>
                <img src={drink.strDrinkThumb} alt="" />
                {/* <span id="price"><h2>${drink.price}</h2></span> */}
          </div>
        )
        })
    )
    };

  return (
    <section>
      <form onSubmit={getDrinks}>
        <input type="text"/>
        <input type="button" value="Search" />
      </form>
      {drinks ? loadDrinks() : <h1>Loading</h1>}
    </section>
  )
}