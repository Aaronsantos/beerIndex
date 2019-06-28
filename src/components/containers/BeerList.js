import React from "react";
import { withRouter } from "react-router";
import BeerListItem from "../presentional/BeerListItem";
import { loadData } from "../../store/actions";
import { connect } from "react-redux";
import Loading from "../presentional/Loading";

const mapStateToProps = state => {
  return {
    beers: state.beers,
    next: state.next,
    error: state.error,
    loaded: state.loaded
  };
};

function ConnectedBeerList(props) {
  const firstRender = React.useRef(true);

  const clickHandler = id => {
    console.log("olha o redirect");
    props.history.push(`beer/${id}`);
  };

  const scrollHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 5 >=
      document.documentElement.offsetHeight
    ) {
      if (!props.next || props.error) return;

      if (props.loaded) props.loadData(props.next);
    }
  };

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      props.loadData(props.next);
    }
    scrollHandler();
  });

  window.onscroll = scrollHandler;

  return (
    <div>
      <ul>
        {Object.keys(props.beers).map(id => {
          return (
            <BeerListItem
              key={id}
              name={props.beers[id].name}
              tagline={props.beers[id].tagline}
              click={() => clickHandler(id)}
            />
          );
        })}
      </ul>
      {!props.loaded ? <Loading /> : ""}
      {props.next ? "" : <p>No more Beers to show </p>}
    </div>
  );
}

export default withRouter(
  connect(
    mapStateToProps,
    { loadData }
  )(ConnectedBeerList)
);
