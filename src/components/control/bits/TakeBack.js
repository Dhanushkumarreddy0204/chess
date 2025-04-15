import { useAppContext }from '../../../contexts/Context'
import { takeBack } from '../../../reducer/actions/move';

const TakeBack = () => {

    const { dispatch } = useAppContext();