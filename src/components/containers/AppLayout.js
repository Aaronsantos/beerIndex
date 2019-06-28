import React from "react";
import { Route, Switch } from "react-router-dom";
import BeerList from "./BeerList";
import BeerDetail from "./BeerDetail";
import GlobalStyle from "../../theme/globalStyle";
import AppContainer from "../presentional/AppContainer";
import Header from "../presentional/Header";
import About from "./About";

export default function AppLayout() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header />
        <Switch>
          <Route path="/" exact component={BeerList} />
          <Route
            path="/beer/:id"
            render={props => <BeerDetail id={props.match.params.id} />}
          />
          <Route path="/about" exact component={About} />
          <Route
            render={() => (
              <div>
                <h3>Page Not Found</h3>
              </div>
            )}
          />
        </Switch>
      </AppContainer>
    </>
  );
}
