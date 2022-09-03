'use strict';

import { API_KEYS } from "../env/env-config.js";

export {getData_nm as getDataService};

//Getting the crypto data. Created seperate namespace because it will be used in 4 different namespaces: tableRank_nm,charData_nm, goLive_nm, currencyCard_nm
const getData_nm = (function(){

     // I didn't use fetch() intentionally, just wanted to try out 'XHR' object
    function getCryptoDataForTable(){
        let xhReq = new XMLHttpRequest();
        xhReq.open("GET", "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd", false);
        xhReq.send(null);
        let data = JSON.parse(xhReq.responseText); 
        return data;
    }

    //Fetching data from API based on the input from UI
    async function getCryptoDataForChart(dateFrom_User,dateTo_User){
        let dateTimeFrom = dateFrom_User; 
        let dateTimeTo = dateTo_User;

        //Converting to Unix format
        let dateTimeFrom_UnixFormat = Math.floor(new Date(dateTimeFrom).getTime() / 1000);
        let dateTimeTo_UnixFormat = Math.floor(new Date(dateTimeTo).getTime() / 1000);

        let url = `https://api.coingecko.com/api/v3/coins`;
        const selectCryptoCurr = document.querySelector("#chartDataForm .options .cryptoCurrencies #cryptocurr");
        let coinId = selectCryptoCurr.value;
        let url_param = "/"+coinId;

        
        url_param += `/market_chart/range?vs_currency=usd&from=${dateTimeFrom_UnixFormat}&to=${dateTimeTo_UnixFormat}`;
        url += url_param;

        const fetchResponse = await fetch(url).then(response => response.json()).then(result => {
            return result;            
        }).catch(() =>{
           console.log("Something went wrong!");
        });

        return fetchResponse;
    }


    async function getExchangeRateData(){
        let url = `https://v6.exchangerate-api.com/v6/${API_KEYS.KEY_exchangerateapi}/latest/usd`; 
       
        const fetchResponse = await fetch(url).then(response => response.json()).then(result =>{
            return result;
        }).catch(() =>{
            console.log("Something went wrong !");
        });
        return fetchResponse;
    }

    
    async function getBitcoinToUSDRate(){
        let url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`; 
       
        const fetchResponse = await fetch(url).then(response => response.json()).then(result =>{
            return result;
        }).catch(() =>{
            console.log("Something went wrong !");
        });
        return fetchResponse;
    }

    return{
        getCryptoDataForTable,
        getCryptoDataForChart,
        getExchangeRateData,
        getBitcoinToUSDRate
    }
})();