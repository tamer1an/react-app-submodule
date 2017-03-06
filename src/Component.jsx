import React from 'react';

var Component = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <h2 className='mdc-typography--display2'>Hello world</h2>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
