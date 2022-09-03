'use strict';

export {setDateTime_nm as setDateTimeModule};

//Data-Time setter in the main content section
const setDateTime_nm = (function(){
    function setDateTime(){
        const date = new Date();
        const dateTime = document.querySelector("#showDateTime");
        dateTime.innerText = date;
    }
    function updateDateTimeInitiliazer(){
        setInterval(function(){
            const spanShowDateTime = document.querySelector("#showDateTime");
            if(spanShowDateTime != null || spanShowDateTime != undefined){
                setDateTime_nm.setDateTime();
            }
        },300) 
    }
    return {
        setDateTime,
        updateDateTimeInitiliazer
    };
    
})();

