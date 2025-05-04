import { Status } from '../../../constants';
import { useAppContext }from '../../../contexts/Context'
import { setupNewGame } from '../../../reducer/actions/game';
import './GameEnds.css'

const GameEnds = ({onClosePopup}) => {

    const { appState : {status} , dispatch } = useAppContext();

    if (status === Status.ongoing || status === Status.promoting)
        return null

    const newGame = () => {
        dispatch(setupNewGame())
    }
    const isWin = status.endsWith('wins')

    return <div className="popup--inner popup--inner__center"></div>