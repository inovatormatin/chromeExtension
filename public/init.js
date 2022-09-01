const stores = [
  {
    img: "https://image10.letyshops.com/sites/default/files/styles/shop_logo_248x151/public/shop/logo/shop_logo_17292901_46ef0627cb64602335847ab54e0071b8_1626963055.png",
    storeName: "Flipcart",
    description: {
      CashBackRates: "2.8% - For an existing client",
      termAndcondition:
        "Cashback is not credited in case of using the shop's mobile app.",
    },
    category: [
      "Clothing & Shoes",
      "Jewelry & Accessories",
      "Maha Cashback Week",
    ],
    payOut: "7",
    url: "flipkart.com",
    id: "23ereqr",
  },
  {
    img: "https://image10.letyshops.com/sites/default/files/styles/shop_logo_248x151/public/shop/logo/shop_logo_17293339_b91bb80a7f6d27dbd4954f4928b4c94b_1642424902.png",
    storeName: "Oneplus",
    description: {
      CashBackRates: "2.8% - For an existing client",
      termAndcondition:
        "Cashback is not credited in case of using the shop's mobile app.",
    },
    category: ["Home & Decoration", "Books & Education", "Automotive"],
    payOut: "3",
    url: "oneplus.in",
    id: "345q578",
  },
  {
    img: "https://image10.letyshops.com/sites/default/files/styles/shop_logo_248x151/public/shop/logo/shop_logo_17293034_9697c3b41714d0ed61f7ce13578db6f2_1582539260.png",
    storeName: "AJIO",
    description: {
      CashBackRates: "2.8% - For an existing client",
      termAndcondition:
        "Cashback is not credited in case of using the shop's mobile app.",
    },
    category: [
      "Clothing & Shoes",
      "Jewelry & Accessories",
      "Maha Cashback Week",
    ],
    payOut: "8",
    url: "ajio.com",
    id: "2132435",
  },
  {
    img: "https://image10.letyshops.com/sites/default/files/styles/shop_logo_248x151/public/shop/logo/shop_logo_17295209_94b46bcc6837b0eba28b7debac0392d6_1621353615.jpeg",
    storeName: "Urbanic",
    description: {
      CashBackRates: "2.8% - For an existing client",
      termAndcondition:
        "Cashback is not credited in case of using the shop's mobile app.",
    },
    category: [
      "Clothing & Shoes",
      "Jewelry & Accessories",
      "Maha Cashback Week",
    ],
    payOut: "9",
    url: "urbanic.com",
    id: "d4t5t42",
  },
  {
    img: "https://image10.letyshops.com/sites/default/files/styles/shop_logo_248x151/public/shop/logo/shop_logo_17294894_c0f6315902e495ddca05e64651942bae_1613641480.png",
    storeName: "H and M",
    description: {
      CashBackRates: "2.8% - For an existing client",
      termAndcondition:
        "Cashback is not credited in case of using the shop's mobile app.",
    },
    category: [
      "Clothing & Shoes",
      "Toys, Kids & Baby",
      "Jewelry & Accessories",
    ],
    payOut: "6",
    url: ".hm.com",
    id: "e3qewwe",
  },
];

const appendPopup = (data) => {
  // insert font
  var style1 = document.createElement("style");
  style1.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap');`;
  document.head.appendChild(style1);

  // adding css
  var style2 = document.createElement("style");
  style2.innerHTML = `
    .offerPopup{
        font-family: 'Raleway', sans-serif;
        display: block;
        position: absolute;
        top: 5px;
        right: 6px;
        width: 270px;
        padding: .5rem;
        border-radius: 5px;
        background-color: white;
        z-index: 101;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    #headerLogo{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #headerLogo img{
        width: 100px;
    }
    .CloseButton{
        display: flex;
        justify-content: end;
        cursor: pointer;
    }
    .CloseButton img{
        width: 12px !important;
        transition: all ease-in-out 300ms;
    }
    .CloseButton img:hover{
        transform: rotate(90deg);
    }
    .offerPopup section{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .offerPopup section img{
        margin: .5rem;
        width: 100%;
        max-height: 130px;
        border: #8080805b solid 1px;
        border-radius: 5px;
        margin: 1rem 0;
    }
    .offerPopup section strong{
        font-size: 1.2rem;
    }
    .offerPopup section strong span{
        font-size: 1.5rem;
    }
    .offerPopup section p{
        font-size: .8rem;
        font-weight: 400;
        color: #7d7d7d;
    }
    .offerPopup section button{
        border: none;
        outline: none;
        cursor: pointer;
        color: white;
        padding: .8rem 0;
        width: 100%;
        margin: .8rem 0;
        border-radius: 5px;
        background-color: #188bfe;
        font-family: 'Raleway', sans-serif;
    }
    .offerPopup section button:active{
        background-color: #0076ec;
    }
    `;
  document.head.appendChild(style2);

  // creating pop up html
  let popupDiv = document.createElement("div");
  popupDiv.setAttribute("id", "popupBox");
  popupDiv.innerHTML = `
    <div class="offerPopup">
    <div id="headerLogo">
        <img src="https://extrapaisa.com/api/v1/logoadminsignin/1634966846763.png" alt="logo" />
        <i class="CloseButton" >
        <img id="closeButton" src="https://cdn-icons-png.flaticon.com/512/61/61155.png" alt="close" />
        </i>
    </div>
    <section>
    <img src=${data.img} alt="" />
            <strong>up to <span>${data.payOut}</span> %</strong>
        <p>cashback</p>
        <button>Activate</button>
    </section>
    </div>
    `;
  document.body.appendChild(popupDiv);

  // add closing fn
  const closeBox = () => {
    let classOfBox = document.querySelector(".offerPopup");
    classOfBox.style.display = "none"
  }
  const openBox = () => {
    let classOfBox = document.querySelector(".offerPopup");
    classOfBox.style.display = "block"
  }
  let clsBtn = document.getElementById("closeButton");
  clsBtn.addEventListener("click", closeBox);

  setInterval(openBox, 60000);
};

(function () {
  let crtURL = window.location.origin;
  let crtStore = stores.filter((store) => {
    return crtURL.includes(store.url);
  });
  if (crtStore.length > 0) {
    appendPopup(crtStore[0]);
  }
})();
