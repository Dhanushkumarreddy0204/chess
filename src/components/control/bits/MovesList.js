import { useAppContext }from '../../../contexts/Context'
import './MovesList.css'

const MovesList = () => {

    const { appState : {movesList} } = useAppContext();
