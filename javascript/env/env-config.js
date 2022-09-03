/*
NOTE: PLEASE GET YOUR OWN API KEYS AND ASSIGN THEM TO THE APPROPRIATE VARIABLES
IF YOU HAVE ANY PROBLEMS, PLEASE DON'T HESTITATE TO CONTACT ME AT nodirbeknabiev98@gmail.com
*/

"use strict";

export {API_KEYS}

const API_KEYS = (function(){

    /* 
        https://www.exchangerate-api.com/  --> OPEN THIS LINK AND GET YOUR API KEY 
    */
    const KEY_exchangerateapi = ""; /* <-- PUT YOUR API KEY HERE */


    /* 
        https://openweathermap.org/api  --> OPEN THIS LINK AND GET YOUR API KEY 
    */
    const KEY_openweathermap = ""; /* <-- PUT YOUR API KEY HERE */

    
    /* 
        OTHER APIs USED IN THE PROJECT THAT DOESN'T REQUIRE AN API KEY
        1. https://www.coingecko.com/en/api 
        2. https://ip-api.com/  
    */
    
    return{
        KEY_exchangerateapi,
        KEY_openweathermap
    };
})();