import actionTypes from '../actionTypes';
import { initGameState } from '../../constants';

export const updateCastling = (direction) => {
    return {
        type: actionTypes.CAN_CASTLE,
        payload: direction,
    }
}

export const detectStalemate = () => {
    return {
        type: actionTypes.STALEMATE,
    }
}