import GitHub from 'github-api';
import { username, password } from 'auth';

class GithubInterface {

  static newGit(username = username, password = password) {
    return new GitHub({
      username,
      password,
      /* also acceptable:
       token: 'MY_OAUTH_TOKEN'
       */
    });
  }

  constructor(config) {
    function run(config = {}) {
      console.log(this)
      return (config.username && config.password)
        ? this.setGit(
          GithubInterface.newGit(config.username, config.password)
          )
        : this.setGit();
    }

    return {
      instance: this,
      gh: run(config),
    };
  }

  getGit() {
   return this._gh;
  }

  setGit(gh = GithubInterface.newGit()) {
    this._gh = gh;
    return gh;
  }

  getUser(user = 'tamer1an') {
    return this._gh.getUser(user);
  }

  listStarredRepos(user) {
    user.listStarredRepos(function(err, repos) {
      // look at all the starred repos!

      console.log('THE REPOS', repos.slice(1,6));
    });
  }
}

export default GithubInterface;