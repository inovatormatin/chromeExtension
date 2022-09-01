import { useContext } from "react";
import context from "../../context/context";
import config from "../../config";
import "./Store.css";
import HTMLReactParser from "html-react-parser";
import { TbListDetails } from "react-icons/tb";
import { FcMinus } from "react-icons/fc";
import { FaPercentage, FaInfoCircle } from "react-icons/fa";
const Store = () => {
  const globalState = useContext(context);
  const {
    img,
    storeName,
    storeShortDescs,
    payoutRate,
    payoutType,
    payoutAllPartner,
    termsAndCondition,
    id,
  } = globalState.storeData;
  // console.log(payoutAllPartner);
  return (
    <div className="Store">
      {id !== null ? (
        <>
          <section>
            <img
              src={config.baseURL + img}
              alt="Store Logo"
              crossOrigin="anonymous"
            />
            {payoutType === "%" ? (
              <strong>{`upto ${payoutRate} ${payoutType} off`}</strong>
            ) : (
              <strong>{`FLAT ${payoutRate} ${payoutType} Cashback`}</strong>
            )}
          </section>
          <h5>
            <TbListDetails />
            About {storeName}
          </h5>
          <p className="desc">{storeShortDescs}</p>
          <h5>
            <FaPercentage />
            Cashback rates
          </h5>
          <div className="desc">
            {payoutAllPartner.map((payout) => {
              return (
                <div key={payout._id}>
                  <h6>
                    <FcMinus />
                    {` ${payout.payoutRate} ${payout.payoutType}`}
                  </h6>
                  <p style={{marginBottom : "5px"}}>{payout.payoutDescriptions[0].payoutDescription}</p>
                </div>
              );
            })}
          </div>
          <h5>
            <FaInfoCircle />
            Terms & Conditions
          </h5>
          <div className="desc">{HTMLReactParser(termsAndCondition)}</div>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
};
export default Store;
