import React, { useState } from "react";
import Levels from "./plan_levels";

const PlanLevel = () => {
  const [lvls, setLvls] = useState([
    {
      title: "Plan Level for Underweight",
      exercise1: "10 Dumbell",
      exercise2: "12 Squats",
      exercise3: "10 leg raise",
      id: 1,
    },
    {
      title: "Plan Level for Healthy Weight",
      exercise1: "15 Dumbell",
      exercise2: "15 Squats",
      exercise3: "12 leg raise",
      id: 2,
    },
    {
      title: "Plan Level for Overweight",
      exercise1: "5 Dumbell",
      exercise2: "12 Squats",
      exercise3: "15 leg raise",
      id: 3,
    },
    {
      title: "Plan Level for Obese",
      exercise1: "0 Dumbell",
      exercise2: "20 Squats",
      exercise3: "15 leg raise",
      id: 4,
    },
  ]);
  return (
    <div className="level">
      <div className="levellist">
        <Levels no={lvls} />
      </div>
    </div>
  );
};

export default PlanLevel;
