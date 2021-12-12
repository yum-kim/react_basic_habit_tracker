import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  render() {
    return (
      <>
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
