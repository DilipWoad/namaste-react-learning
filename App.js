const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "childern" }, [ 
    React.createElement("h2", { id: "head2" }, "This is from the GrandChild1"),
    React.createElement("h3", { id: "head3" }, "This is from the GrandChild2"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello Everyone from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
