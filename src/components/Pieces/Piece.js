import arbiter from '../../arbiter/arbiter';
import { useAppContext }from '../../contexts/Context'
import { generateCandidates } from '../../reducer/actions/move';

const Piece = ({
    rank,
    file,
    piece,
})  => {
    
    const { appState, dispatch } = useAppContext();
    const { turn, castleDirection, position : currentPosition } = appState

    const onDragStart = e => {
