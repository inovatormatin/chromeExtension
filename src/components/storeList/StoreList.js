import { StoreCard } from "../../components";
import "./StoreList.css";
const StoreList = ({ data }) => {
  return (
    <div className="StoreList">
      {/* Recommended lIst */}
      <h5>Recommended Stores</h5>
      <div className="wrap">
        {data.map((store) => {
          return (
            <StoreCard
              key={store._id}
              id={store._id}
              img={store.storeImagePath}
              storeName={store.storeName}
              currency={store.currency}
              maxPayoutRate={store.maxPayoutRate}
            />
          );
        })}
      </div>
      {/* New lIst */}
      <h5>New Stores</h5>
      <div className="wrap">
        {data.map((store) => {
          return (
            <StoreCard
              key={store._id}
              id={store._id}
              img={store.storeImagePath}
              storeName={store.storeName}
              currency={store.currency}
              maxPayoutRate={store.maxPayoutRate}
            />
          );
        })}
      </div>
    </div>
  );
};
export default StoreList;
