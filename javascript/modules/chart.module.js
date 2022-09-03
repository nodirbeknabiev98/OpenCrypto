'use strict';

import { getDataService } from "../services/getData.service.js";
import { dateObjectManipulationService } from "../services/dateObjectManipulation.service.js";
import { tableRankModule } from "./table.module.js"; // Just to access the data it got

export{chartData_nm as chartDataModule,chartDataOptions_nm as chartDataOptionsModule};

//Charting the crypto data
const chartData_nm = (function(){

    function destroyChart(){
        window.myChart.destroy();
    }

    function createChart(input1,input2){
        const ctx = document.getElementById('chartBoxCanvas').getContext('2d');
        window.myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: input1,
                datasets: input2
            },
            options: {
                responsive: true,
                scales:{
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    function addDataToChart(input1, input2) {
        const arrLength = input1.length;
        for(let i = 0 ; i < arrLength; i++){
            window.myChart.data.labels.push(input1[i]);
        }
        window.myChart.data.datasets = input2;
    }
    
    function removeDataFromChart() {
        const arrLength = window.myChart.data.datasets[0].data.length;
        for(let i = 0 ; i < arrLength;i++){
            window.myChart.data.labels.pop();
            window.myChart.data.datasets[0].data.pop();
        }
    }
    
    async function chartData()
    {
       //console.log("Chart Data is running");
       const datePicker1 = document.querySelector("#chartDataForm .from #fromDate");
       const datePicker2 = document.querySelector("#chartDataForm .to #toDate");
       const selectCryptoCurr = document.querySelector("#chartDataForm .options .cryptoCurrencies #cryptocurr");

       const dateFrom_User = datePicker1.value;
       const dateTo_User = datePicker2.value;

       if(dateFrom_User == "")
       {
           return undefined;
       }

       let res = await getDataService.getCryptoDataForChart(dateFrom_User,dateTo_User);
       
       let fetched_dates= [];
       let fetched_prices = [];

       for(let i =0 ; i < res.prices.length; i++)
       {
           let date = new Date(res.prices[i][0]).toLocaleDateString("en-US"); // From UnixFormat to Normal
           let price = res.prices[i][1];
           //price = parseInt(price);

           fetched_dates.push(date);
           fetched_prices.push(price);
       }
       
       let fetched_dataSets = [{
        label: `${selectCryptoCurr.options[selectCryptoCurr.selectedIndex].text} Price`,
        data: fetched_prices,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1}];

       if(window.myChart == null){
           chartData_nm.createChart(fetched_dates,fetched_dataSets);
        }
        else{
            chartData_nm.removeDataFromChart();
            chartData_nm.addDataToChart(fetched_dates,fetched_dataSets);
           
            window.myChart.update();
        }
    }

    function addLiveDataToChart(input1, input2) {
        window.myChart.data.labels.push(input1);
        window.myChart.data.datasets[0].data.push(input2);
    }

    function chartLiveData(){
        let res = tableRankModule.data;
        let selectCryptoCurr = document.querySelector("#cryptocurr");

        let price = 0;

        let currDate = new Date();
        let currTime = `${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`;

        for(let i = 0; i < res.length; i++)
        {
            if(res[i].id == selectCryptoCurr.value)
            {
                price = res[i].current_price;
                console.log(res[i].id);
                console.log(res[i].current_price);
                i = res.length;
            }
        }
        addLiveDataToChart(currTime,price);
        window.myChart.update();
    }


    return {
        createChart,
        chartData,
        chartLiveData,
        removeDataFromChart,
        addDataToChart
    }
})();


 //ChartData Page Options onload intizializtion events
const chartDataOptions_nm = (function(){
    function chartDataPageOptionsInitialize(){
        const datePicker1 = document.querySelector("#chartDataForm .options .from #fromDate");
        const datePicker2 = document.querySelector("#chartDataForm .options .to #toDate");
        const selectShortcut = document.querySelector("#chartDataForm .options .shortCut #period");
        
        const goButton = document.querySelector("main #mainBody2 .first-container button");
        goButton.addEventListener('click', ()=>{
            const returnValue = chartData_nm.chartData();
            if ( returnValue == undefined || returnValue == undefined)
            {
                alert("Please choose the date!");
            }
        })

        // Initializing select box "CryptoCurrency:"
        const data = tableRankModule.data; // Didn't want to do the seperate request and used the data which we got for table ranking
        const selectCryptoCurr = document.querySelector("#chartDataForm .options .cryptoCurrencies #cryptocurr");
        for(let i = 0; i < data.length;i++){
            let optionTag = `<option value="${data[i].id}">${data[i].name}</option>`;
            selectCryptoCurr.insertAdjacentHTML("beforeend", optionTag);
        }
        

        selectCryptoCurr.addEventListener('change', ()=>{
            const liveIndicatorClass = document.querySelector(".right .first-container .live-indicator-block .live-indicator");
            if(liveIndicatorClass.style.background == "red")
            {
                chartData_nm.chartData();
            }
        })

        //First we choose the date from datePicker1, and then the chosen value of datePicker1 will be max value of datePicker2
        datePicker2.disabled = true;
        datePicker1.min ="2018-01-01";
        datePicker1.max = new Date().toISOString().slice(0, 10);

        //Initilizating the datepickers
        datePicker1.value = "2018-01-01";
        datePicker2.value = new Date().toISOString().slice(0, 10);//Current Date;
        chartData_nm.chartData();


        datePicker1.addEventListener('change', ()=>{
            datePicker2.disabled = false;
            datePicker2.min = datePicker1.value; 
            datePicker2.max = new Date().toISOString().slice(0, 10);//Current Date 
            selectShortcut.value = "notChosen";
        })

        datePicker2.addEventListener('change',()=>{
            selectShortcut.value = "notChosen";
        })

    
        selectShortcut.addEventListener('change',()=>{

            datePicker2.disabled = false;
            if(selectShortcut.value == "1day"){
                let date = new Date();
                date = dateObjectManipulationService.substractDays(date,1);
                datePicker1.value = date.toISOString().slice(0, 10);
                datePicker2.value = new Date().toISOString().slice(0, 10);
                datePicker2.disabled = true;
            }
            if(selectShortcut.value == "3days"){
                let date = new Date();
                date = dateObjectManipulationService.substractDays(date,3);
                datePicker1.value = date.toISOString().slice(0, 10);
                datePicker2.value = new Date().toISOString().slice(0, 10);
                datePicker2.disabled = true;
            }
            if(selectShortcut.value == "1month"){
                let date = new Date();
                date = dateObjectManipulationService.substractDays(date,30);
                datePicker1.value = date.toISOString().slice(0, 10);
                datePicker2.value = new Date().toISOString().slice(0, 10);
                datePicker2.disabled = true;
            }
            if(selectShortcut.value == "1year"){
                let date = new Date();
                date = dateObjectManipulationService.substractDays(date,365);
                datePicker1.value = date.toISOString().slice(0, 10);
                datePicker2.value = new Date().toISOString().slice(0, 10);
                datePicker2.disabled = true;
            }
            if(selectShortcut.value == "notChosen"){
            
                datePicker2.disabled = true;
                datePicker2.value = "";
                datePicker1.min ="2018-01-01";
                datePicker1.max = new Date().toISOString().slice(0, 10);
                datePicker1.value = "";
            }

        
        })
    }

    return{
        chartDataPageOptionsInitialize
    };
    

})();


