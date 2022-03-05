import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd}></HabitAddForm>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
              ref={(ref) => {
                this.li = ref;
              }}
            />
          ))}
        </ul>
        <button onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;
