"use strict";

import { getDataService } from "../services/getData.service.js";

export {currencyCard_nm as currencyCadrModule};


const currencyCard_nm = ( function(){

    const currencyCardRuble = document.querySelector("#currCardRubleValue");
    const currencyCardUsd = document.querySelector("#currCardUSDValue");
    const currencyCardEuro = document.querySelector("#currCardEuroValue");
    
    async function setCurrencyCardData(){
        let res1 = await getDataService.getExchangeRateData();
        let res2 = await getDataService.getBitcoinToUSDRate();

    
        let ruble_in_usd = res1.conversion_rates["RUB"];
        let euro_in_usd = res1.conversion_rates["EUR"];
        let bitcoin_in_usd = res2.bitcoin.usd;

        currencyCardRuble.innerHTML = "&#x20BF ≈ " + (ruble_in_usd*bitcoin_in_usd).toFixed(2);
        currencyCardUsd.innerHTML = "&#x20BF ≈ " + bitcoin_in_usd;
        currencyCardEuro.innerHTML = "&#x20BF ≈ " + (euro_in_usd*bitcoin_in_usd).toFixed(2);
    }
    
    return{
        setCurrencyCardData
    };

})();