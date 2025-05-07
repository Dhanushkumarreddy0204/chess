import { useAppContext } from "../../../contexts/Context";
import { copyPosition, getNewMoveNotation } from "../../../helper";
import { makeNewMove, clearCandidates } from "../../../reducer/actions/move";
import "./PromotionBox.css";

const PromotionBox = ({ onClosePopup }) => {
    const { appState, dispatch } = useAppContext();
    const { promotionSquare } = appState;

    if (!promotionSquare) return null;