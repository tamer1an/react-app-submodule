import GitHub from 'github-api';

const local = { log: () => {} };

class GithubInterface {
  static newGit(username, password, baseUrl = 'https://api.github.com') {
    return new GitHub({
      username,
      password,
    }, baseUrl);
  }

  static defaultProps = {
    username: 'tamer1an',
    reponame: 'react-app-submodule ',
  }

  constructor(config = {}) {
    this.user = {};

    const gh = (config.username && config.password)
      ? this.setGit(GithubInterface.newGit(config.username, config.password))
      : { error: 'Error auth' };

    return {
      instance: this,
      gh,
    };
  }

  getGit() {
    return this._gh;
  }

  async getAllUsersOrganizations() {
    return await Promise.all([
      this.allOrganizations(0),
      this.allOrganizations(420),
      this.allOrganizations(1115),
    ]);
  }

  allOrganizations(page = 0, user = this.getUser(), pthen = responseText => {
    const resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
    local.log(resp);
    return resp;
  }, pcatch = err => local.log(err)) {
    return fetch(`${user.__apiBase}/organizations?since=${page}`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Authorization: user.__authorizationHeader,
        Accept: 'application/vnd.github.luke-cage-preview+json',
        'Accept-Encoding': 'gzip, deflate, sdch, br',
        'Accept-Language': 'en-GB,en-US;q=0.8,en;q=0.6',
        Connection: 'keep-alive',
        Host: 'github.com',
        Origin: 'http://localhost:8888',
        Referer: 'http://localhost:8888/dev/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36' +
        '(KHTML, like Gecko) Chrome/54.0.2832.2 Safari/537.36',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()).then(pthen).catch(pcatch);
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

  getProtectionInfo(reposBranchesToProtect, org) {
    return reposBranchesToProtect.map(result => {
      const itemName = Object.keys(result)[0];
      const item = result[itemName];
      return item.branches.map(branch => {
        const url = item.url.replace('{/branch}', `/${branch.name}`);
        return this.listBranchProtection({ url })
          .then(protection => ({
            org,
            repo: itemName,
            name: branch.name,
            protection,
            url,
          }));
      });
    });
  }

  /**
   * Loop through the repos array and find if exist
   * branches that in branch set plus, default_branch enabled by deafult
   * @param repos
   * @param org
   * @param branchesSet
   * @param defaultBranch
   * @returns {*}
   */
  getReposBranchesIfExist(
    repos,
    org = 'tamer1an',
    branchesSet = ['master', 'develop'],
    defaultBranch = true
  ) {
    return repos.map(repo => this.getGit()
      .getRepo(org, repo.name)
      .listBranches().then(({ data }) => {
        const toProtect = data.filter(item => branchesSet.some(v => v === item.name));

        if (defaultBranch && !toProtect.some(v => v.name === repo.default_branch)) {
          toProtect.push({ name: repo.default_branch });
        }

        return {
          [repo.name]: {
            url: repo.branches_url,
            branches: toProtect,
          },
        };
      })
    );
  }

  getOrganisationRepos(org) {
    return this.getGit().getOrganization(org).getRepos();
  }

  listUserRepos(
    user = this.getUser(GithubInterface.defaultProps.username),
    pthen = (data) => data.data) {
    return user.listRepos().then(pthen);
  }

  getUserEmails(
    user = this.getUser(GithubInterface.defaultProps.username),
    pthen = (data) => local.log('emails', data.data)) {
    return user.getEmails().then(pthen);
  }

  listStarredRepos(
    user = this.getUser(GithubInterface.defaultProps.username),
    pthen = (err, repos) => local.log('stars', repos.slice(1, 6))) {
    return user.listStarredRepos(pthen);
  }

  listIssues(
    user = GithubInterface.defaultProps.username,
    repo = GithubInterface.defaultProps.reponame,
    pthen = data => data
  ) {
    const remoteIssues = this.getGit().getIssues(user, repo);
    return remoteIssues.listIssues({}, pthen);
  }

  listNotifications(pthen = (data) => data.data) {
    return this.getUser().listNotifications().then(pthen);
  }

  listBranchProtection({ url, branch }, user = this.getUser(), pthen = responseText => {
    const resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
    return resp;
  }, pcatch = err => local.log(err)) {
    return fetch(`${url}/protection`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Authorization: user.__authorizationHeader,
        Accept: 'application/vnd.github.luke-cage-preview+json',
        Connection: 'keep-alive',
        Host: 'github.com',
        Origin: 'http://localhost:8888',
        Referer: 'http://localhost:8888/dev/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36' +
        '(KHTML, like Gecko) Chrome/54.0.2832.2 Safari/537.36',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()).then(pthen).catch(pcatch);
  }

  setBranchProtection(
    { url },
    protectionOptions = {
      required_pull_request_reviews: {
        dismiss_stale_reviews: true,
        require_code_owner_reviews: false,
      },
      enforce_admins: false,
      restrictions: null,
      required_status_checks: null,
    },
    pthen = responseText => {
      const resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
      return resp;
    },
    user = this.getUser(),
    pcatch = err => local.log(err),
  ) {
    protectionOptions.restrictions = protectionOptions.restrictions ? protectionOptions.restrictions : null;
    return fetch(`${url}/protection`, {
      mode: 'cors',
      method: 'PUT',
      body: JSON.stringify(protectionOptions),
      headers: {
        Authorization: user.__authorizationHeader,
        Accept: 'application/vnd.github.luke-cage-preview+json',
        Connection: 'keep-alive',
        Host: 'github.com',
        Origin: 'http://localhost:8888',
        Referer: 'http://localhost:8888/dev/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36' +
        '(KHTML, like Gecko) Chrome/54.0.2832.2 Safari/537.36',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()).then(pthen).catch(pcatch);
  }

  listUserIssues(user = this.getUser(), pthen = responseText => {
    const resp = typeof responseText === 'string' ? JSON.parse(responseText) : responseText;
    local.log(resp);
    return resp;
  }, pcatch = err => local.log(err)) {
    return fetch(`${user.__apiBase}/issues`, {
      mode: 'cors',
      method: 'GET',
      headers: {
        Authorization: user.__authorizationHeader,
        Accept: 'application/vnd.github.luke-cage-preview+json',
        'Accept-Encoding': 'gzip, deflate, sdch, br',
        'Accept-Language': 'en-GB,en-US;q=0.8,en;q=0.6',
        Connection: 'keep-alive',
        Host: 'github.com',
        Origin: 'http://localhost:8888',
        Referer: 'http://localhost:8888/dev/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36' +
        '(KHTML, like Gecko) Chrome/54.0.2832.2 Safari/537.36',
        'Content-Type': 'application/json',
      },
    }).then(response => response.json()).then(pthen).catch(pcatch);
  }

  static wrapFetchArr(
    branchesPromise,
    resolveCatch = message => ({
      error: {
        message,
        branches: [],
      },
    }),
    then = thenData => thenData
  ) {
    return branchesPromise.map(promise =>
      new Promise(
        resolve =>
          promise
            .then(v => resolve(then(v)))
            .catch(({ message }) => {
              resolve(resolveCatch(message));
            })
      ));
  }

}

export default GithubInterface;
