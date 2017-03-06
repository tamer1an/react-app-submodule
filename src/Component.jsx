import React from 'react';

var Component = React.createClass({
  render: function () {
    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div>
        <h2 className='mdc-typography--display2'>Hello world</h2>
        <button className='mdc-button'>
          Flat button
        </button>
      </div>
    );
  },
  propTypes: {
    onRender: React.PropTypes.func
  }
});

export default Component;
