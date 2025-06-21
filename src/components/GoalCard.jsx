import React from 'react';

const GoalCard = ({ goal }) => {
  return (
    <div className="goal-card">
      <h3>{goal.title}</h3>
      <p>{goal.description}</p>
      <div className="goal-progress">
        <span>{goal.progress}%</span>
      </div>
    </div>
  );
};

export default GoalCard;
