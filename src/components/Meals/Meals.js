import MealsSummary from "./MealsSummary";
import AvaibleMeals from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvaibleMeals />
    </Fragment>
  );
};

export default Meals;
