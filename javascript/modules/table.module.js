'use strict';

import { getDataService } from "../services/getData.service.js";

export{tableRank_nm as tableRankModule};

const tableRank_nm = (function(){

    const buttonCustomize = document.querySelector("#customizeButton");
   
    let data = getDataService.getCryptoDataForTable();
    let selectNumOfCoins = document.querySelector("#quantity");
    let selectRankType = document.querySelector("#rankType");
    let selectRankBy = document.querySelector("#rankBy");
    let moreOrHide  = document.querySelector("#moreOrHide");
    
    let numOfRows = 0;
    selectNumOfCoins.max = data.length;

    function ascending(a, b) {
         return a[selectRankBy.value] > b[selectRankBy.value] ? 1 : -1;
    }
    function descending(a, b) {

        return a[selectRankBy.value] < b[selectRankBy.value] ? 1 : -1;
     }

    function getRandomScoreIncrease() {
        return getRandomBetween(1, 100);
    }
    function getRandomBetween(minimum, maximum) {
        return Math.floor(Math.random() * maximum) + minimum;
    }
   
    function setTableData(withNewData) {
        tableRank_nm.selectNumOfCoins = document.querySelector("#quantity");
        tableRank_nm.selectRankType = document.querySelector("#rankType");
        tableRank_nm.selectRankBy = document.querySelector("#rankBy");

        let numOfCoins = parseInt(selectNumOfCoins.value);// Should parse to int, then compare
        if( numOfCoins > selectNumOfCoins.max) 
        {
            alert("Number of coins must be < " + selectNumOfCoins.max);
            return;
        }

        if( numOfCoins < selectNumOfCoins.min) 
        {
            alert("Number of coins must be > " + selectNumOfCoins.min);
            return;
        }

        if(withNewData == true)
        {
            tableRank_nm.data = getDataService.getCryptoDataForTable(); // Overwrite with new data the global variable "data" which has an old data 
            selectNumOfCoins.max = data.length;
        }

        if(moreOrHide.innerText == "More")
        {
            numOfRows = 8;
        }
        else
        {
            numOfRows = selectNumOfCoins.value;
        }

        let $list = $("#cryptocurrencies");
        $list.find(".cryptocurrency").remove();
        let cryptocurrencies = [];
        for(let i = 0;i < data.length;i++){
            cryptocurrencies.push(
                {
                    image : tableRank_nm.data[i].image,
                    name : tableRank_nm.data[i].name,
                    symbol: tableRank_nm.data[i].symbol,//not used
                    price: tableRank_nm.data[i].current_price,
                    market_cap: tableRank_nm.data[i].market_cap,
                    circulating_supply: Math.round(tableRank_nm.data[i].circulating_supply),
                    volume_24h: tableRank_nm.data[i].total_volume,
                    percent_change_24h: tableRank_nm.data[i].market_cap_change_percentage_24h,
                }
            )
        }

        for(let i = 0; i < cryptocurrencies.length; i++) {
            cryptocurrencies[i].price += getRandomScoreIncrease();
        }
       
         //Sort the array 
         if(selectRankType.value == "asc")
         {
             cryptocurrencies.sort(ascending);
         }
         else{
             cryptocurrencies.sort(descending);
         }
       
        for(let i = 0; i < numOfRows; i++) {
            let newimageLink = cryptocurrencies[i].image.replace('large','small'); // Wanna get small images not large
            let $item = $(
                "<tr class='cryptocurrency'>" + 
                    "<th class='rank'>" + (i + 1) + "</th>" + 
                    "<td class='symbol'>" + "<img src = '" + newimageLink + "' style =' display: unset;width:20px; height:20px;' alt='cryptoImage'></img>" + "</td>" +
                    "<td class='name'>" + cryptocurrencies[i].name + "</td>" + 
                    "<td class='price'>" + cryptocurrencies[i].price + "</td>" + 
                    "<td class='market_cap'>" + cryptocurrencies[i].market_cap + "</td>" + 
                    "<td class='circulating_supply'>" + cryptocurrencies[i].circulating_supply + "</td>" + 
                    "<td class='volume_24h'>" + cryptocurrencies[i].volume_24h + "</td>" + 
                    "<td class='percent_change_24h'>" + cryptocurrencies[i].percent_change_24h + "</td>" +
                "</tr>"
            );
            cryptocurrencies[i].$item = $item;
            $list.append($item);
        }
    }	

    moreOrHide.addEventListener("click", ()=>{
        if(moreOrHide.innerText == "More")
        {
            moreOrHide.innerText = "Hide";
            tableRank_nm.setTableData(false);
           
        }
        else
        {
            moreOrHide.innerText = "More";
            tableRank_nm.setTableData(false);
        }
    })

    buttonCustomize.addEventListener('click',()=>{
        tableRank_nm.setTableData(false);
    })

    return {
        setTableData,
        data
    };

})();