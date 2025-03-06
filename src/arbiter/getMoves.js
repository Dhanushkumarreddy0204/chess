import arbiter from "./arbiter"

export const getRookMoves = ({position,piece,rank,file}) => {
    const moves = []
    const us = piece[0]
    const enemy = us === 'w' ? 'b' : 'w'