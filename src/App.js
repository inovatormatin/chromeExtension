import {useContext} from "react";
import { Navigation, Header, Footer } from "./components";
import { OnStore, OffStore, Store } from "./containers";
import context from "./context/context";
import './App.css';
const App = () => {
  const globalState = useContext(context)
  const { url } = globalState
  return (
    <div className="App">
      <Header />
      <Navigation />
        {url === "/" ? <OnStore /> : ""}
        {url === "/offStore" ? <OffStore /> : ""}
        {url === "/offStore/store" ? <Store /> : ""}
        {/* {url === "/offStore/store" ? <Popup /> : ""} */}
      <Footer />
    </div>
  );
};
export default App;