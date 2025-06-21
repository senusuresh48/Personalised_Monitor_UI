import React from 'react';

const HabitTracker = ({ habits }) => {
  return (
    <div className="habit-tracker">
      <h3>Daily Habits</h3>
      <div className="habits-grid">
        {habits.map((habit, index) => (
          <div key={index} className="habit-item">
            <span>{habit.name}</span>
            <input type="checkbox" checked={habit.completed} readOnly />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitTracker;
