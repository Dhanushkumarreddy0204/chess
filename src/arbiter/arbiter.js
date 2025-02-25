import { areSameColorTiles, findPieceCoords } from '../helper';
import { getKnightMoves, getRookMoves, getBishopMoves, getQueenMoves, getKingMoves, getPawnMoves, getPawnCaptures, getCastlingMoves, getPieces, getKingPosition } from './getMoves'
import { movePiece,movePawn } from './move';

const arbiter = {

    getRegularMoves : function ({position,piece,rank,file}) {
    },
    },