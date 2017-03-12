/* eslint no-unused-vars: 0 */
import GitHub from 'github-api';
import { username, password } from 'auth';

class GithubInterface {

/* eslint no-use-before-define: 0 */
  static newGit(username = username, password = password, baseUrl = 'https://api.github.com') {
    return new GitHub({
      username,
      password
    }, baseUrl);
  }

  constructor(config = {}) {
    let gh = (config.username && config.password) ?
      this.setGit(GithubInterface.newGit(config.username, config.password)) :
      this.setGit();

    return {
      instance: this,
      gh
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

  listStarredRepos(user, callback = (err, repos) => console.log('*', repos.slice(1, 6))) {
    /* eslint handle-callback-err: 0 */
    user.listStarredRepos(callback);
  }
}

export default GithubInterface;
