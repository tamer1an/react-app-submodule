import React from 'react';
import Git from 'GithubInterface';
import { AgGridReact } from 'ag-grid-react';
// import Rx from 'rxjs/Rx';
import '../../node_modules/ag-grid/dist/styles/ag-grid.css';
import '../../node_modules/ag-grid/dist/styles/theme-fresh.css';
import { username, password } from 'auth';

let Dashboard = React.createClass({
  getInitialState() {
    let { clone, gh } = new Git({username, password});
    let myUser = clone.getUser();

    // instance.listStarredRepos();
    // instance.getEmails()
    // instance.listRepos();
    // instance.listNotifications()
    // console.log(instance.listIssues());
    // var test = instance.listNotifications();
    // console.log(test);

    // clone.listNotifications().then(d => {
    //   console.log(d);
    // });

    console.log('myUser->', myUser, gh, clone);
    console.log('auth->', myUser.__apiBase, myUser.__authorizationHeader);

    // fetch(myUser.__apiBase)

    // clone.getUser(user)
    // /search/code?q=addClass+in:file+language:js+repo:jquery/jquery

    // clone.getGit().search('/search/code?q=addClass+in:file+language:js+repo:jquery/jquery').then(d => {
    //   console.log(d);
    // });

    // let tamer1an = clone.getUser();

    // console.log('issues', gh.getIssues(tamer1an));

    // tamer1an.listStarredRepos(function(err, repos) {
    //   // look at all the starred repos!
    //   console.log('THE REPOS', repos.slice(1,6));
    // });

    return {
      gh,
      clone,
      columnDefs: [
        {headerName: "Id", field: "id", width: 100, filter: 'number'},
        {headerName: "Reason", field: "reason", width: 100},
        {headerName: "Last_read_at", field: "last_read_at", width: 100},
        // {headerName: "Repository",
        //   children: [
        //     {headerName: "Description", field: "repository.description", width: 150, filter: 'text'},
        //     {headerName: "compare_url", field: "repository.compare_url", width: 90, columnGroupShow: 'closed'},
        //   ]
        // }, {
        //   headerName: "Subject",
        //   children: [
        //     {headerName: "Latest_comment_url", columnGroupShow: 'open', field: "subject.latest_comment_url", width: 150},
        //     {headerName: "Title", field: "subject.title", columnGroupShow: 'closed', width: 90},
        //     {headerName: "Type", field: "subject.type", width: 120},
        //     {headerName: "Url", field: "subject.url", width: 120}
        //   ]
        // },
        // {headerName: "Subscription_url", field: "subscription_url", width: 100},
        // {headerName: "Unread", field: "unread", width: 100},
        // {headerName: "Updated_at", field: "updated_at", width: 100},
        // {headerName: "Url", field: "url", width: 100},
      ],
      rowData: [
        {
          "id": "169316295",
          "unread": true,
          "reason": "commentcomment commentcommen",
          "updated_at": "2017-05-10T14:40:42Z",
          "last_read_at": null,
          "subject": {
            "title": "Unable to resolve module error and reproduction of issue",
            "url": "https://api.github.com/repos/webpack-contrib/less-loader/issues/109",
            "latest_comment_url": "https://api.github.com/repos/webpack-contrib/less-loader/issues/comments/300503682",
            "type": "Issue"
          },
          "repository": {
            "id": 4192593,
            "name": "less-loader",
            "full_name": "webpack-contrib/less-loader",
            "owner": {
              "login": "webpack-contrib",
              "id": 25012217,
              "avatar_url": "https://avatars0.githubusercontent.com/u/25012217?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/webpack-contrib",
              "html_url": "https://github.com/webpack-contrib",
              "followers_url": "https://api.github.com/users/webpack-contrib/followers",
              "following_url": "https://api.github.com/users/webpack-contrib/following{/other_user}",
              "gists_url": "https://api.github.com/users/webpack-contrib/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/webpack-contrib/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/webpack-contrib/subscriptions",
              "organizations_url": "https://api.github.com/users/webpack-contrib/orgs",
              "repos_url": "https://api.github.com/users/webpack-contrib/repos",
              "events_url": "https://api.github.com/users/webpack-contrib/events{/privacy}",
              "received_events_url": "https://api.github.com/users/webpack-contrib/received_events",
              "type": "Organization",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/webpack-contrib/less-loader",
            "description": "Less loader for webpack. Compiles Less to CSS. ",
            "fork": false,
            "url": "https://api.github.com/repos/webpack-contrib/less-loader",
            "forks_url": "https://api.github.com/repos/webpack-contrib/less-loader/forks",
            "keys_url": "https://api.github.com/repos/webpack-contrib/less-loader/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/webpack-contrib/less-loader/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/webpack-contrib/less-loader/teams",
            "hooks_url": "https://api.github.com/repos/webpack-contrib/less-loader/hooks",
            "issue_events_url": "https://api.github.com/repos/webpack-contrib/less-loader/issues/events{/number}",
            "events_url": "https://api.github.com/repos/webpack-contrib/less-loader/events",
            "assignees_url": "https://api.github.com/repos/webpack-contrib/less-loader/assignees{/user}",
            "branches_url": "https://api.github.com/repos/webpack-contrib/less-loader/branches{/branch}",
            "tags_url": "https://api.github.com/repos/webpack-contrib/less-loader/tags",
            "blobs_url": "https://api.github.com/repos/webpack-contrib/less-loader/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/webpack-contrib/less-loader/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/webpack-contrib/less-loader/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/webpack-contrib/less-loader/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/webpack-contrib/less-loader/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/webpack-contrib/less-loader/languages",
            "stargazers_url": "https://api.github.com/repos/webpack-contrib/less-loader/stargazers",
            "contributors_url": "https://api.github.com/repos/webpack-contrib/less-loader/contributors",
            "subscribers_url": "https://api.github.com/repos/webpack-contrib/less-loader/subscribers",
            "subscription_url": "https://api.github.com/repos/webpack-contrib/less-loader/subscription",
            "commits_url": "https://api.github.com/repos/webpack-contrib/less-loader/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/webpack-contrib/less-loader/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/webpack-contrib/less-loader/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/webpack-contrib/less-loader/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/webpack-contrib/less-loader/contents/{+path}",
            "compare_url": "https://api.github.com/repos/webpack-contrib/less-loader/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/webpack-contrib/less-loader/merges",
            "archive_url": "https://api.github.com/repos/webpack-contrib/less-loader/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/webpack-contrib/less-loader/downloads",
            "issues_url": "https://api.github.com/repos/webpack-contrib/less-loader/issues{/number}",
            "pulls_url": "https://api.github.com/repos/webpack-contrib/less-loader/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/webpack-contrib/less-loader/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/webpack-contrib/less-loader/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/webpack-contrib/less-loader/labels{/name}",
            "releases_url": "https://api.github.com/repos/webpack-contrib/less-loader/releases{/id}",
            "deployments_url": "https://api.github.com/repos/webpack-contrib/less-loader/deployments"
          },
          "url": "https://api.github.com/notifications/threads/169316295",
          "subscription_url": "https://api.github.com/notifications/threads/169316295/subscription"
        },
        {
          "id": "58911545",
          "unread": true,
          "reason": "mention",
          "updated_at": "2017-04-21T18:22:47Z",
          "last_read_at": null,
          "subject": {
            "title": "Invalid syntax highlighting for tagged template strings",
            "url": "https://api.github.com/repos/pangloss/vim-javascript/issues/242",
            "latest_comment_url": "https://api.github.com/repos/pangloss/vim-javascript/issues/comments/296266491",
            "type": "Issue"
          },
          "repository": {
            "id": 293477,
            "name": "vim-javascript",
            "full_name": "pangloss/vim-javascript",
            "owner": {
              "login": "pangloss",
              "id": 10115,
              "avatar_url": "https://avatars3.githubusercontent.com/u/10115?v=3",
              "gravatar_id": "",
              "url": "https://api.github.com/users/pangloss",
              "html_url": "https://github.com/pangloss",
              "followers_url": "https://api.github.com/users/pangloss/followers",
              "following_url": "https://api.github.com/users/pangloss/following{/other_user}",
              "gists_url": "https://api.github.com/users/pangloss/gists{/gist_id}",
              "starred_url": "https://api.github.com/users/pangloss/starred{/owner}{/repo}",
              "subscriptions_url": "https://api.github.com/users/pangloss/subscriptions",
              "organizations_url": "https://api.github.com/users/pangloss/orgs",
              "repos_url": "https://api.github.com/users/pangloss/repos",
              "events_url": "https://api.github.com/users/pangloss/events{/privacy}",
              "received_events_url": "https://api.github.com/users/pangloss/received_events",
              "type": "User",
              "site_admin": false
            },
            "private": false,
            "html_url": "https://github.com/pangloss/vim-javascript",
            "description": "Vastly improved Javascript indentation and syntax support in Vim.",
            "fork": false,
            "url": "https://api.github.com/repos/pangloss/vim-javascript",
            "forks_url": "https://api.github.com/repos/pangloss/vim-javascript/forks",
            "keys_url": "https://api.github.com/repos/pangloss/vim-javascript/keys{/key_id}",
            "collaborators_url": "https://api.github.com/repos/pangloss/vim-javascript/collaborators{/collaborator}",
            "teams_url": "https://api.github.com/repos/pangloss/vim-javascript/teams",
            "hooks_url": "https://api.github.com/repos/pangloss/vim-javascript/hooks",
            "issue_events_url": "https://api.github.com/repos/pangloss/vim-javascript/issues/events{/number}",
            "events_url": "https://api.github.com/repos/pangloss/vim-javascript/events",
            "assignees_url": "https://api.github.com/repos/pangloss/vim-javascript/assignees{/user}",
            "branches_url": "https://api.github.com/repos/pangloss/vim-javascript/branches{/branch}",
            "tags_url": "https://api.github.com/repos/pangloss/vim-javascript/tags",
            "blobs_url": "https://api.github.com/repos/pangloss/vim-javascript/git/blobs{/sha}",
            "git_tags_url": "https://api.github.com/repos/pangloss/vim-javascript/git/tags{/sha}",
            "git_refs_url": "https://api.github.com/repos/pangloss/vim-javascript/git/refs{/sha}",
            "trees_url": "https://api.github.com/repos/pangloss/vim-javascript/git/trees{/sha}",
            "statuses_url": "https://api.github.com/repos/pangloss/vim-javascript/statuses/{sha}",
            "languages_url": "https://api.github.com/repos/pangloss/vim-javascript/languages",
            "stargazers_url": "https://api.github.com/repos/pangloss/vim-javascript/stargazers",
            "contributors_url": "https://api.github.com/repos/pangloss/vim-javascript/contributors",
            "subscribers_url": "https://api.github.com/repos/pangloss/vim-javascript/subscribers",
            "subscription_url": "https://api.github.com/repos/pangloss/vim-javascript/subscription",
            "commits_url": "https://api.github.com/repos/pangloss/vim-javascript/commits{/sha}",
            "git_commits_url": "https://api.github.com/repos/pangloss/vim-javascript/git/commits{/sha}",
            "comments_url": "https://api.github.com/repos/pangloss/vim-javascript/comments{/number}",
            "issue_comment_url": "https://api.github.com/repos/pangloss/vim-javascript/issues/comments{/number}",
            "contents_url": "https://api.github.com/repos/pangloss/vim-javascript/contents/{+path}",
            "compare_url": "https://api.github.com/repos/pangloss/vim-javascript/compare/{base}...{head}",
            "merges_url": "https://api.github.com/repos/pangloss/vim-javascript/merges",
            "archive_url": "https://api.github.com/repos/pangloss/vim-javascript/{archive_format}{/ref}",
            "downloads_url": "https://api.github.com/repos/pangloss/vim-javascript/downloads",
            "issues_url": "https://api.github.com/repos/pangloss/vim-javascript/issues{/number}",
            "pulls_url": "https://api.github.com/repos/pangloss/vim-javascript/pulls{/number}",
            "milestones_url": "https://api.github.com/repos/pangloss/vim-javascript/milestones{/number}",
            "notifications_url": "https://api.github.com/repos/pangloss/vim-javascript/notifications{?since,all,participating}",
            "labels_url": "https://api.github.com/repos/pangloss/vim-javascript/labels{/name}",
            "releases_url": "https://api.github.com/repos/pangloss/vim-javascript/releases{/id}",
            "deployments_url": "https://api.github.com/repos/pangloss/vim-javascript/deployments"
          },
          "url": "https://api.github.com/notifications/threads/58911545",
          "subscription_url": "https://api.github.com/notifications/threads/58911545/subscription"
        }
      ],
    };
  },

  onCellClicked: function () {
    console.log('cell', arguments);
    // this.api.selectAll();
    // this.columnApi.setColumnVisible('country', visible);
  },

  onRowSelected: function () {
    console.log('rowSel', arguments);
  },

  onGridReady: function(params) {
    this.api = params.api;
    this.columnApi = params.columnApi;

    window.addEventListener('resize', () => {
      this.sizeToFit();
      this.columnApi.setColumnWidth(this.columnApi.getAllColumns()[0],500);
    });
  },

  sizeToFit: function(res) {
    console.log(res);
    this.api.sizeColumnsToFit();
  },

  autoSizeAll: function() {
    let allColumnIds = [];
    this.state.columnDefs.forEach( function(columnDef) {
      allColumnIds.push(columnDef.field);
    });

    this.columnApi.autoSizeColumns([allColumnIds[1]]);
  },

  render() {
    // let gridOptions = {
    //   debug: true,
    //   columnDefs: columnDefs,
    //   rowData: null,
    //   enableSorting: true,
    //   enableFilter: true,
    //   enableColResize: true
    // };

    if (this.props.onRender) {
      this.props.onRender();
    }
    return (
      <div style={{ height: '700px' }} className="ag-fresh">
        <div style={{ height: 'l0%' }}>
          <button onClick={this.sizeToFit}>Size to Fit</button>
          <button onClick={this.autoSizeAll}>Auto-Size All</button>
        </div>
        <div style={{ height: '90%' }}>
          <AgGridReact
            // listen for events with React callbacks
            onRowSelected={this.onRowSelected}
            onCellClicked={this.onCellClicked}
            onGridReady={this.onGridReady}
            // binding to properties within React State or Props
            quickFilterText={this.state.quickFilterText}

            // column definitions and row data are immutable, the grid
            // will update when these lists change
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}

            // or provide props the old way with no binding
            rowSelection="multiple"
            enableSorting="true"
            enableFilter="true"
            rowHeight="22"
            enableColResize="true"
          />
        </div>
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


//Notification model
//   id,
//   last_read_at,
//   reason,
//   repository,
//   subject,
//   subscription_url,
//   unread,
//   updated_at,
//   url,

/* https://api.github.com/issues
  Accept:application/vnd.github.v3+json
  Accept-Encoding:gzip, deflate, sdch, br
  Accept-Language:en-US,en;q=0.8,pl;q=0.6,ru;q=0.4
  Authorization:Basic dGFtZXIxYW46YW52JHAzdHJpYjMz
  Cache-Control:no-cache
  Connection:keep-alive
  Host:api.github.com
  Origin:http://localhost:3001
  Pragma:no-cache
  Referer:http://localhost:3001/popup.html
  User-Agent:Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36
*/
