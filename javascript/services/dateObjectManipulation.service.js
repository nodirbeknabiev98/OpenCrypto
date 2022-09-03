'use strict';

export{dateObjectManipulation_nm as dateObjectManipulationService};

const dateObjectManipulation_nm = (function(){

    /*
        Example
        input: 14.04.2050,4
        output: 10.04.2050 -> New Date Object
    */
    function substractDays(date, days) {
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() - days,
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
        );
    }

    
    /*
        Example
        input: String object 
        output: New Date Object
    */
    function convertStringtoDateObject(stringDate)
    {
        const parts = stringDate.split('-');
        let dateObject = new Date(parts[0], parts[1] - 1, parts[2]); 
        return dateObject;
    }

    return {
        substractDays,
        convertStringtoDateObject
    }
})();
