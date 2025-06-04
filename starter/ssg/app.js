import { createElement } from "react";

function App() {
  return createElement(
    "div",
    null,
    createElement("h1", null, "Hello World from Front End Masters"),
    createElement("p", null, "This is a paragraph in SSG")
  );
}

export default App;
