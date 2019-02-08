export let getTerminalDate = () => {
  let time = new Date();

  return time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false
  });
};

export let getReposList = () => {
  fetch("https://api.github.com/users/bradabayor/repos")
    .then(res => {
      return res.json();
    })
    .then(repos => {
      console.log(repos[1]);
    });
  return "ok";
};

export let add = input => {
  let toAdd = input.split("+");
  return toAdd;
};
