import './Pieces.css'
import Piece from './Piece'
import { useRef  } from 'react'
import { useAppContext }from '../../contexts/Context'
import { openPromotion } from '../../reducer/actions/popup'
import { getCastlingDirections } from '../../arbiter/getMoves'
import { updateCastling, detectStalemate, detectInsufficientMaterial, detectCheckmate} from '../../reducer/actions/game'

import { makeNewMove, clearCandidates } from '../../reducer/actions/move'
import arbiter from '../../arbiter/arbiter'
import { getNewMoveNotation } from '../../helper'

