import React from 'react';
import GitHub from 'github-api';
import { username, password } from 'auth';

let Component = React.createClass({

  getInitialState() {
    let gh = new GitHub({
      username,
      password,
      /* also acceptable:
       token: 'MY_OAUTH_TOKEN'
       */
    });

    let tamer1an = gh.getUser('tamer1an');

    tamer1an.listStarredRepos(function(err, repos) {
      // look at all the starred repos!

      console.log('THE REPOS', repos.slice(1,6));
    });

    return {
      user: tamer1an
    };
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

export default Component;

// let me = gh.getUser(); // no user specified defaults to the user for whom credentials were provided
// me.listNotifications(function(err, notifications) {
//   // do some stuff
// });
