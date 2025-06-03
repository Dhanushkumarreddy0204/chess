import { Status } from "../constants";
import actionTypes from "./actionTypes";
export const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.NEW_MOVE : {
            let {position,movesList,turn} = state 
            position = [
                ...position,
                action.payload.newPosition
            ]
            movesList = [
                ...movesList,
                action.payload.newMove
            ]
            