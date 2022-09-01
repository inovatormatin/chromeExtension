import { useContext } from "react"
import context from "../../context/context"
import "./Popup.css"
const Popup = () => {
  const globalState = useContext(context)
  const {img, percentage} = globalState.storeData;
  return (
    <div className="offerPopup">
      <div id="headerLogo">
        <img src="https://extrapaisa.com/api/v1/logoadminsignin/1634966846763.png" alt="logo" />
        <i className="CloseButton" >
          <img src="https://cdn-icons-png.flaticon.com/512/61/61155.png" alt="close" />
        </i>
      </div>
      <section>
        <img src={img} alt="" />
        <strong>up to <span>{percentage}</span> %</strong>
        <p>cashback</p>
        <button>Activate</button>
      </section>
    </div>
  )
}
export default Popup