/* eslint no-unused-vars: 0 */
import GitHub from 'github-api';

class GithubInterface {
  static newGit(username, password, baseUrl = 'https://api.github.com') {
    return new GitHub({
      username,
      password
    }, baseUrl);
  }

  constructor(config = {}) {
    this.user = {};

    let gh = (config.username && config.password) ?
      this.setGit(GithubInterface.newGit(config.username, config.password)) :
      { error: 'Error auth' };

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

  getUser(user) {
    const u = user || 'me';
    const git = this.getGit();

    if (!this.user[u] && u !== 'me') {
      this.user[u] = git.getUser(u);
    } else if (u === 'me') {
      this.user[u] = git.getUser();
    }

    return this.user[u];
  }

  listRepos(user = this.getUser('tamer1an'), pthen = (data) => console.log('*', data.data)) {
    return user.listRepos().then(pthen);
  }

  getEmails(user = this.getUser('tamer1an'), pthen = (data) => console.log('*', data.data)) {
    return user.getEmails().then(pthen);
  }

  listStarredRepos(user = this.getUser('tamer1an'), cb = (err, repos) => console.log('*', repos.slice(1, 6))) {
    /* eslint handle-callback-err: 0 */
    return user.listStarredRepos(cb);
  }

  listIssues(user = 'octocat', repo = 'Hello-World') {
    return this.getGit().getIssues(user, repo);
  }

  listNotifications(pthen = (data) => console.log('*', data.data)) {
    return this.getUser().listNotifications().then(pthen);
  }
}

export default GithubInterface;
