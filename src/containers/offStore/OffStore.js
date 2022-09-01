import { useContext } from "react";
import context from "../../context/context";
import { AiOutlineSearch } from "react-icons/ai"; 
import { StoreList } from "../../components";
import "./OffStore.css"
const OffStore = () => {
  const globalState = useContext(context);
  const { storeList } = globalState;
  return (
    <div>
      {/* search bar */}
      <span className="searchBar">
        <AiOutlineSearch />
        <input name="searchBar" type="text" placeholder="Search here ..."/>
      </span>
      <StoreList data={storeList}/>
    </div>
  )
}
export default OffStore