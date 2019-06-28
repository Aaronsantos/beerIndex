import reducer from "../store/reducers";

const initialState = {
  beers: {},
  loaded: false,
  next: 1,
  error: false
};

describe("Root Reducer", () => {
  it("Should return initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("Should return initial state", () => {
    expect(
      reducer(
        {
          beers: {},
          loaded: true,
          next: 1,
          error: false
        },
        { type: "LOAD_DATA", payload: false }
      )
    ).toEqual({
      beers: {},
      loaded: false,
      next: 1,
      error: false
    });
  });

  it("Should fill BeerList with a payload from action", () => {
    expect(
      reducer(
        { beers: {}, loaded: false, next: 1, error: false },
        {
          type: "DATA_LOADED",
          payload: {
            "1": {
              name: "Buzz",
              id: 1,
              tagline: "A Real Bitter Experience.",
              description:
                "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
              image_url: "https://images.punkapi.com/v2/keg.png"
            },
            "2": {
              name: "Trashy Blonde",
              id: 2,
              tagline: "You Know You Shouldn't",
              description:
                "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
              image_url: "https://images.punkapi.com/v2/2.png"
            },
            "3": {
              name: "Berliner Weisse With Yuzu - B-Sides",
              id: 3,
              tagline: "Japanese Citrus Berliner Weisse.",
              description:
                "Japanese citrus fruit intensifies the sour nature of this German classic.",
              image_url: "https://images.punkapi.com/v2/keg.png"
            }
          }
        }
      )
    ).toEqual({
      beers: {
        "1": {
          name: "Buzz",
          id: 1,
          tagline: "A Real Bitter Experience.",
          description:
            "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
          image_url: "https://images.punkapi.com/v2/keg.png"
        },
        "2": {
          name: "Trashy Blonde",
          id: 2,
          tagline: "You Know You Shouldn't",
          description:
            "A titillating, neurotic, peroxide punk of a Pale Ale. Combining attitude, style, substance, and a little bit of low self esteem for good measure; what would your mother say? The seductive lure of the sassy passion fruit hop proves too much to resist. All that is even before we get onto the fact that there are no additives, preservatives, pasteurization or strings attached. All wrapped up with the customary BrewDog bite and imaginative twist.",
          image_url: "https://images.punkapi.com/v2/2.png"
        },
        "3": {
          name: "Berliner Weisse With Yuzu - B-Sides",
          id: 3,
          tagline: "Japanese Citrus Berliner Weisse.",
          description:
            "Japanese citrus fruit intensifies the sour nature of this German classic.",
          image_url: "https://images.punkapi.com/v2/keg.png"
        }
      },
      loaded: true,
      next: 2,
      error: false
    });
  });
});
