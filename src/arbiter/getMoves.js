import arbiter from "./arbiter"

export const getRookMoves = ({position,piece,rank,file}) => {
    const moves = []
    const us = piece[0]
    const enemy = us === 'w' ? 'b' : 'w'

    const direction = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1],
    ]

    