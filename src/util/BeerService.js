import axios from "axios";

const getList = (page, perPage) => {
  return axios
    .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`)
    .then(res => {
      if (res.data) {
        let beerList = {};
        res.data.forEach(
          beer =>
            (beerList[beer.id] = {
              name: beer.name,
              id: beer.id,
              tagline: beer.tagline,
              description: beer.description,
              image_url: beer.image_url
            })
        );
        return beerList;
      } else {
        return false;
      }
    });
};

const getBeer = id => {
  return axios.get(`https://api.punkapi.com/v2/beers/${id}`).then(res => ({
    name: res.data[0].name,
    id: res.data[0].id,
    tagline: res.data[0].tagline,
    description: res.data[0].description,
    image_url: res.data[0].image_url
  }));
};

export default { getList, getBeer };
