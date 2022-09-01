import React,{ useContext } from "react";
import "./Navigation.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import context from "../../context/context";
const Navigation = () => {
  const globalState = useContext(context);
  const {url, setURL, resetStoreData } = globalState;
  return (
    <div className="Navigation">
      {url === "/" ? <span onClick={() => setURL("/offStore")}>Stores</span> : ""}
      {url === "/offStore" ? <span onClick={() => setURL("/")}><IoMdArrowRoundBack />Go Back</span> : ""}
      {url === "/offStore/store" ? <span onClick={() => {setURL("/offStore"); resetStoreData()}}><IoMdArrowRoundBack />All Store</span> : ""}
    </div>
  );
};
export default Navigation;