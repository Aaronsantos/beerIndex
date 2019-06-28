import React from "react";
import { withRouter } from "react-router";
import BeerService from "../../util/BeerService";
import BeerTitle from "../presentional/BeerTittle";
import { connect } from "react-redux";
import styled from "styled-components";

const BeerImg = styled.img`
  max-height: 55vh;
  @media (max-width: 768px) {
    max-width: 30vh;
    margin: auto;
  }
`;

const TextBox = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const mapStateToProps = state => {
  return { beerList: state.beers };
};

function ConnectedBeerDetail(props) {
  const firstRender = React.useRef(true);
  const [beer, setbeer] = React.useState({});

  const getBeer = async id => {
    let newBeer = await BeerService.getBeer(props.id);
    setbeer(newBeer);
  };

  React.useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      if (props.id in props.beerList) setbeer(props.beerList[props.id]);
      else getBeer(props.id);
    }
    return;
  });

  return (
    <div>
      <BeerTitle id={beer.id} name={beer.name} tagline={beer.tagline} />
      <DetailWrapper>
        <BeerImg src={beer.image_url} />
        <TextBox>
          <h2>About: </h2>
          <p>{beer.description}</p>
        </TextBox>
      </DetailWrapper>
    </div>
  );
}

const BeerDetail = connect(mapStateToProps)(ConnectedBeerDetail);

export default withRouter(BeerDetail);
