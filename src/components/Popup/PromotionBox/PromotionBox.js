import { useAppContext } from "../../../contexts/Context";
import { copyPosition, getNewMoveNotation } from "../../../helper";
import { makeNewMove, clearCandidates } from "../../../reducer/actions/move";
import "./PromotionBox.css";

const PromotionBox = ({ onClosePopup }) => {
    const { appState, dispatch } = useAppContext();
    const { promotionSquare } = appState;

    if (!promotionSquare) return null;

    
  const color = promotionSquare.x === 7 ? "w" : "b";
  const options = ["q", "r", "b", "n"];

  const getPromotionBoxPosition = () => {
    let style = {};
    if (promotionSquare.x === 7) {
      style.top = "-12.5%";
    } else {
      style.top = "97.5%";
    }
