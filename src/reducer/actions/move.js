import actionTypes from '../actionTypes';

export const makeNewMove = ({newPosition,newMove}) => {
    return {
        type: actionTypes.NEW_MOVE,
        payload: {newPosition,newMove},
    }
}

export const clearCandidates = () => {
    return {
        type: actionTypes.CLEAR_CANDIDATE_MOVES,
    }
}