import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  //부모 컴포넌트로부터 전달받은 props를 실행
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    /* 외부에서 props으로 전달받은 데이터!
        -> 직접 내부의 state가 아닌 이벤트가 들어왔을 때 콜백함수를 호출하는 용도의 컴포넌트로 만들기
        -> 콜백함수도 부모로부터 전달받기
        => 이 컴포넌트는 단순한 역할로.
    */

    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
