import React, { useState, useEffect } from "react";
import Context from "./context";
import config from "../config";
import axios from "axios";
const State = (props) => {
  // for navigation URL State
  const [url, setURL] = useState("/");

  // Individual Store data for store page
  const [storeData, setStoreData] = useState({
    img: null,
    storeName: null,
    storeShortDescs: null,
    payoutRate: null,
    payoutType: null,
    payoutAllPartner: null,
    termsAndCondition: null,
    id: null,
  });

  // reset storeData
  const resetStoreData = () => {
    setStoreData({
      img: null,
      storeName: null,
      storeShortDescs: null,
      payoutRate: null,
      payoutType: null,
      payoutAllPartner: null,
      termsAndCondition: null,
      id: null,
    });
  };

  //  Store List
  const [storeList, setStoreList] = useState();

  //   get user country and language
  const getUserCnL = () => {
    axios
      .get(`${config.baseURL}public/get/country/by/ip`)
      .then((res) => {
        if (res.data.code === "1") {
          const { countryDefaultLang, countryName } = res.data.data.responseObj;
          localStorage.setItem("defaultCountry", countryName.toLowerCase());
          localStorage.setItem("defaultLanguage", countryDefaultLang);
        } else {
          console.error("Something went wrong");
        }
      })
      .catch((err) => console.error(err));
  };

  //   get individual store data
  const getStoreById = (id) => {
    let lang = localStorage.getItem("defaultLanguage")
      ? localStorage.getItem("defaultLanguage")
      : "en";
    axios
      .get(`${config.baseURL}public/get/store/details/${id}/${lang}`)
      .then((res) => {
        if (res.data.code === "1") {
          const { payoutAllPartner } =
            res.data.data.responseObj.getPartnerAndPayoutData[0];
          const { metaDatas, storeImagePath, storeName, storeShortDescs, _id } =
            res.data.data.responseObj.getStoreAndCouponDeal[0];
          setStoreData({
            img: storeImagePath,
            storeName: storeName,
            storeShortDescs:
              storeShortDescs.length > 0
                ? storeShortDescs[0].storeShortDesc
                : null,
            payoutRate:
              payoutAllPartner.length > 0
                ? payoutAllPartner[0].payoutRate
                : null,
            payoutType:
              payoutAllPartner.length > 0
                ? payoutAllPartner[0].payoutType
                : null,
            payoutAllPartner:
              payoutAllPartner.length > 0 ? payoutAllPartner : null,
            termsAndCondition:
              metaDatas.length > 0 ? metaDatas[0].metaData : null,
            id: _id,
          });
        } else {
          console.error("Something went wrong");
        }
      })
      .catch((err) => console.error(err));
  };

  //   get store list
  const getStoreData = () => {
    let cr = localStorage.getItem("defaultCountry")
      ? localStorage.getItem("defaultCountry")
      : "in";
    let lang = localStorage.getItem("defaultLanguage")
      ? localStorage.getItem("defaultLanguage")
      : "en";
    axios
      .get(`${config.baseURL}public/get/all/store?country=${cr}&lang=${lang}`)
      .then((res) => {
        if (res.data.code === "1") {
          setStoreList(
            res.data.data.responseObj.filter((store) => {
              return store.isCampaign === "live_with_payout";
            })
          );
        } else {
          console.error("Something went wrong");
        }
      })
      .catch((err) => console.error(err));
  };

  const myValues = {
    url,
    setURL,
    storeData,
    setStoreData,
    storeList,
    getStoreById,
    resetStoreData
  };

  //   useEffect(() => {
  //     /* eslint-disable no-undef */
  //     chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  //       let crtURL = tabs[0].url;
  //       console.log(tabs);
  //       let crtStore = storeList.filter((store) => {
  //         return crtURL.includes(store.url);
  //       });
  //       console.log(crtStore);
  //       if (crtStore.length > 0) {
  //         setStoreData(crtStore[0]);
  //         setURL("/offStore/store");
  //       }
  //     });
  //   },[storeList]);

  useEffect(() => {
    getUserCnL();
    getStoreData();
  }, []);

  return <Context.Provider value={myValues}>{props.children}</Context.Provider>;
};
export default State;
