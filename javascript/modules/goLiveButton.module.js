'use strict';

import { chartDataModule } from "./chart.module.js";
import { tableRankModule  } from "./table.module.js";

export{goLive_nm as goLiveModule};

const goLive_nm = (function(){

    const liveIndicatorClass = document.querySelector(".right .first-container .live-indicator-block .live-indicator");
    const blinkClass = document.querySelector(".right .first-container .live-indicator-block .live-indicator .blink");
    const datePicker1 = document.querySelector("#chartDataForm .options .from #fromDate");
    const datePicker2 = document.querySelector("#chartDataForm .options .to #toDate");
    const selectShortcut = document.querySelector("#chartDataForm .options .shortCut #period");
    const selectCryptoCurr = document.querySelector("#chartDataForm .options .cryptoCurrencies #cryptocurr");
    const goButton = document.querySelector("#chartDataForm .options button");

    let setIntervalId_Table = null;
    let setIntervalId_Chart = null;

    //Starting the table and chart updates
    function goLive_start(){
        liveIndicatorClass.style.background  = "red";
        blinkClass.style.animationPlayState = "running";
        datePicker1.disabled = true;
        datePicker1.value = new Date().toISOString().slice(0, 10); // Current Date;
        datePicker2.disabled = true;
        datePicker2.value = new Date().toISOString().slice(0, 10); // Current Date;
        selectShortcut.disabled = true;
        selectShortcut.value = "notChosen";
        goButton.disabled = true;

        //Update table data every 10 sec
        setIntervalId_Table = setInterval(function(){
            tableRankModule.setTableData(true);
        },10000) 

        //Delete all data from chart and update
        if(window.myChart != null)
        {
            chartDataModule.removeDataFromChart();
            window.myChart.update();
        }

        //Add new data and update the table
        setIntervalId_Chart = setInterval(function(){
            chartDataModule.chartLiveData();
        },10000) 
    }

    //Stopping the table and chart updates
    function goLive_end(){
        liveIndicatorClass.style.background  = "#7d8da1";
        blinkClass.style.animationPlayState = "paused";

        datePicker1.disabled = false;
        datePicker1.value = "";
        datePicker2.disabled = false;
        datePicker2.value ="";
        selectShortcut.disabled = false;
        selectShortcut.value = "notChosen";
        goButton.disabled = false;

        if(setIntervalId_Table != null || setIntervalId_Table != undefined)
        { 
            clearInterval(setIntervalId_Table);
        }
        if(setIntervalId_Chart != null || setIntervalId_Charts != undefined)
        { 
            clearInterval(setIntervalId_Chart);
        }
       
    }

    //Turning off and on live update
    function liveIndicatorClassInitializator(){
        liveIndicatorClass.addEventListener('click', ()=>{
            if(liveIndicatorClass.style.background == "red")
            {
                goLive_nm.goLive_end();
            }
            else
            {
                goLive_nm.goLive_start();
            }
          
        } )
    }

    return{
        goLive_start,
        goLive_end,
        liveIndicatorClassInitializator
    }
})();
