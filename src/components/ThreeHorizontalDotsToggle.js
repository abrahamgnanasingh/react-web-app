import React from 'react';

class ThreeHorizontalDotsToggle extends React.Component {
  render() {
    return (
      <button className="border navbar-toggler px-1 py-0 rounded-0" onClick={this.props.onClick}>
        <span className="navbar-toggler-icon three-horizontal-dots-icon"></span>
      </button>
    )
  }
}

export default ThreeHorizontalDotsToggle;