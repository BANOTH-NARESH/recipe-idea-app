import Itemlist from "./Itemlist";
import styles from "./search.module.css";
import { useEffect, useState } from "react";


export default function FoodDetails({ foodid }) {
  const [food, setFood] = useState(null);

  const API_KEY = "81ee3792637b48dfa2141c009ba87b7c"; // Move to env in production
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        setFood(data);
      } catch (error) {
        console.error("Error fetching food details:", error);
      }
    }
    fetchFood();
  }, [foodid]);

  if (!food) return <p>Loading...</p>;

  return (
    <div className={styles.recipecard}>
      <h1 className={styles.colour}>{food.title}</h1>
      <img  className={styles.recipeimage} src={food.image} alt={food.title} />

      <div className={styles.recipedetails}>
        <span> <strong>⌚ {food.readyInMinutes} MINUTES</strong></span>
        <span><strong> 👨‍👩‍👧‍👦 Serves {food.servings}</strong></span>
        <span> <strong> {food.vegetarian ? "🥕 Vegetarian" : "🍗 Non-Vegetarian"} </strong> </span>
        <span> <strong> {food.vegan ? " 🐄 Vegan" : ""} </strong></span>
      </div>

      <p>$ <span>{food.pricePerServing / 100} per serving</span></p>
      <h2>Ingredients</h2>
      <Itemlist  food={food} />
      <div className={styles.instructions}>
        <h2>Instructions</h2>
        {food.analyzedInstructions?.length > 0 ? (
          <ol>
            {food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))}
          </ol>
        ) : (
          <p>No instructions available.</p>
        )}
      </div>
    </div>
  );
}
