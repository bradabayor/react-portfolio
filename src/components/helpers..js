export let getTerminalDate = () => {
  let time = new Date();

  return time.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
};
