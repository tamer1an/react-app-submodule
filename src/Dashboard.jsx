import React from 'react';
import Git from 'GithubInterface';
import { username, password } from 'auth';
import Rx from 'rxjs/Rx';

let Dashboard = React.createClass({
  getInitialState() {
    let { instance, git } = new Git({username, password});

    // instance.listStarredRepos();
    // instance.getEmails()
    // instance.listRepos();
    // instance.listNotifications()

    console.log(instance.listIssues());

    return { git };
  },

  render() {
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
