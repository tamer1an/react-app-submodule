import React from 'react';
import Git from 'GithubInterface';

let Dashboard = React.createClass({
  getInitialState() {
    let git = new Git().instance;
    git.listStarredRepos(git.getUser());

    return  { git };
  },

  render () {
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

export default Dashboard;

// let me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
// me.listNotifications(function(err, notifications) {
//   // do some stuff
// });
