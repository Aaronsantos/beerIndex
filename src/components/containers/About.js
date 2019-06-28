import React from "react";

export default function About() {
  return (
    <div>
      <h2> About </h2>
      <p>
        Hello! This is a simple app by{" "}
        <a href="https://github.com/Aaronsantos">AaronSantos</a> to list some
        cool beers. Checkout the source code in{" "}
        <a href="https://github.com/Aaronsantos/beerIndex">GitHub</a>
      </p>
      <h4>Technologies</h4>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Redux</li>
        <li>Redux Thunk</li>
        <li>Stylled-Components</li>
        <li>Axios</li>
      </ul>
      <h4>API</h4>
      <p>
        This product uses the <a href="https://punkapi.com/">PunkAPI</a>{" "}
      </p>
    </div>
  );
}
