function customRender(reactElement, container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   container.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  for (props in reactElement.props) {
    if (props === "children") domElement.innerHTML = reactElement.props[props];
    else domElement.setAttribute(props, reactElement.props[props]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click Me",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
