import types from "../types/index";
import BeerService from "../../util/BeerService";

export function loadData(page) {
  return function(dispatch) {
    dispatch({ type: types.LOAD_DATA, payload: false });
    return BeerService.getList(page, 10).then(data => {
      dispatch({ type: types.DATA_LOADED, payload: data });
    });
  };
}
