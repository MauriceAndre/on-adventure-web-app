import * as actionTypes from "./actionTypes";
import { tripService } from '../../services/index'; 

export const setTrips = (trips) => {
    return {
        type: actionTypes.SET_TRIPS,
        trips
    };
}

export const getTrips = () => {
    return async (dispatch) => {
        const trips = await tripService.getAllTrips();
        dispatch(setTrips(trips));
    };
};