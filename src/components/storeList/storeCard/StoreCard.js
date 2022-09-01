import { useContext } from "react";
import context from "../../../context/context";
import "./StoreCard.css";
import config from "../../../config";
const StoreCard = ({ img, maxPayoutRate, currency, storeName, id }) => {
  const globalState = useContext(context);
  const { setURL, getStoreById } = globalState;
  const onCliclHandle = () => {
    setURL("/offStore/store");
    getStoreById(id);
  };
  return (
    <div className="StoreCard" onClick={() => onCliclHandle()}>
      <div className="upperCirlce">{storeName}</div>
      <img src={config.baseURL + img} alt="banner" crossOrigin="anonymous" />
      <div className="downCirlce">
        <strong className="maxPayoutRate">{maxPayoutRate} {maxPayoutRate.includes("Upto") ? "% off" : currency}</strong>
      </div>
    </div>
  );
};
export default StoreCard;
