import React, { useState, useEffect } from 'react';
import MealItem from './MealItem'; // Import the MealItem component

const Meals = () => {
  const [meals, setMeals] = useState([]);

  // Function to fetch meals from the backend
  async function getMealsFromUrl() {
    try {
      const response = await fetch("http://localhost:3001/meals");
      if (response.ok) {
        const data = await response.json();
        setMeals(data); // Save the fetched data to the state
      } else {
        console.error('Failed to fetch meals data');
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  }

  // Fetch meals data when the component is first mounted
  useEffect(() => {
    getMealsFromUrl();
  }, []);

  return (
    <div>
      <ul id="meals">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} /> // Pass each meal to MealItem
          ))
        ) : (
          <li>No meals available</li>
        )}
      </ul>
    </div>
  );
};

export default Meals;
