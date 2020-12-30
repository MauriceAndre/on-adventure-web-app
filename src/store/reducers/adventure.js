import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../utils/objectUtils";

const initialState = {
    trips: [],
};

const setTrips = (state, { trips }) => {
    return updateObject(state, { trips });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TRIPS:
            return setTrips(state, action);   
        default:
            break;
    }

    return state;
};

export default reducer;