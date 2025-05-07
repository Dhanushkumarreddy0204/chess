import { useAppContext } from "../../../contexts/Context";
import { copyPosition, getNewMoveNotation } from "../../../helper";
import { makeNewMove, clearCandidates } from "../../../reducer/actions/move";
import "./PromotionBox.css";