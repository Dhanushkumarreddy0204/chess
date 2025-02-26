import { areSameColorTiles, findPieceCoords } from '../helper';
import { getKnightMoves, getRookMoves, getBishopMoves, getQueenMoves, getKingMoves, getPawnMoves, getPawnCaptures, getCastlingMoves, getPieces, getKingPosition } from './getMoves'
import { movePiece,movePawn } from './move';

const arbiter = {

    getRegularMoves : function ({position,piece,rank,file}) {
        if (piece.endsWith('n'))
            return getKnightMoves({position,rank,file});
        if (piece.endsWith('b'))
            return getBishopMoves({position,piece,rank,file});
        if (piece.endsWith('r'))
            return getRookMoves({position,piece,rank,file});
        if (piece.endsWith('q'))
            return getQueenMoves({position,piece,rank,file});
    },
}
