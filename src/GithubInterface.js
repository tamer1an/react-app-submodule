import GitHub from 'github-api';
import { username, password } from 'auth';

class GithubInterface {

  constructor(){
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
      user: tamer1an,
    };
  }

}

export default GithubInterface;