import { Status } from '../../../constants';
import { useAppContext }from '../../../contexts/Context'
import { setupNewGame } from '../../../reducer/actions/game';
import './GameEnds.css'

const GameEnds = ({onClosePopup}) => {

    const { appState : {status} , dispatch } = useAppContext();