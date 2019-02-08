import React, { Component } from "react";
import { add } from "./helpers";

class Response extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: null,
      showHelp: false
    };
  }

  getReposList = (username = "bradabayor") => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(res => {
        return res.json();
      })
      .then(repos => this.setState({ repos: repos }));
  };

  handleResponse = input => {
    if (/calc\s(\d+\D\d+)/g.test(input)) {
      console.log("OK");
    }

    if (input === "projects") {
      return this.getReposList();
    }
    if (input === "help") {
      return this.setState({ showHelp: true });
    }
    if (input === "clear") {
      return this.props.handleClear();
    }
  };

  componentDidMount = () => {
    this.handleResponse(this.props.input);
  };

  render() {
    var repoList = this.state.repos ? (
      <RepoList repos={this.state.repos} />
    ) : null;

    var textResponse = this.state.textResponse ? (
      <TextResponse response={this.state.textResponse} />
    ) : null;

    return (
      <div className="response">
        {repoList}
        {textResponse}
      </div>
    );
  }
}

const TextResponse = props => <p>{props.response}</p>;

const RepoList = props => {
  var repolist = [];
  Object.values(props.repos).map(repo => {
    repolist.push(
      <tr>
        <td>{repo.id}</td>
        <td>{repo.size}</td>
        <td>{repo.owner.login}</td>
        <td>
          {repo.updated_at.slice(0) + " " + repo.updated_at.slice(-9, -1)}
        </td>
        <td>
          <a href={repo.html_url} className="reccommended">
            {repo.name}
          </a>
        </td>
      </tr>
    );
    return null;
  });
  return (
    <div>
      <table className="repos">
        <thead>
          <th>id</th>
          <th>size</th>
          <th>owner</th>
          <th>lastUpdated</th>
          <th>name</th>
        </thead>
        <tbody>{repolist}</tbody>
      </table>
      <p> Check out the RECCOMMENDED repos!</p>
    </div>
  );
};

const Skills = () => {};

export default Response;
