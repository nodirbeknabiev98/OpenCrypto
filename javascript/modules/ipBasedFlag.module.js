'use strict';

export {ipBasedFlagSetter_nm as ipBasedFlagSetterModule};

//Flag setter in the top-right corner functionality
const ipBasedFlagSetter_nm = (function(){
    
    function setCountryFlag(){
        const countryFlagSpan = document.querySelector("#country-flag");
        let classDef = "fi fi-";
        let endpoint = 'http://ip-api.com/json/?fields=status,message,countryCode';

        // I didn't use fetch() intentionally, just wanted to try out 'XHR' object
        let xhr = new XMLHttpRequest();    

        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let response = JSON.parse(this.responseText);
                if(response.status !== 'success') {
                    console.log('query failed: ' + response.message);
                    return;
                }
                else
                {
                    classDef = classDef + response.countryCode.toLowerCase().trim();
                    countryFlagSpan.className = classDef;
                }
            }
        };
        xhr.open('GET', endpoint, true);
        xhr.send();
    }

    return{
        setCountryFlag
    }
})();
