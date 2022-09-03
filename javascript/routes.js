/* 
I had two options in creating the custom routing
    1. using History API  (https://www.w3schools.com/js/js_api_history.asp)
    2. using Hash router (https://www.w3schools.com/jsref/prop_loc_hash.asp)
Although two approaches are good, or even the 1st option is more modern approach compared to the 2nd,
I decided to stick with the 2nd choice because I found it very simple to implement and use.
Maybe in the near future, I will re-implement this module using the History API approach.
*/

'use strict';

import { newsFeedModule } from "./modules/newsFeed.module.js";

export{locationResolver_nm};

//Changing the content of the <main> tag
const locationResolver_nm = (function(){

    function locationResolverInitialize(){
        const location = window.location.hash;
        if(location){
            locationResolver(location);
        }

        window.addEventListener('resize', function () { 
            const location = window.location.hash;
            if(location == "#/news/"){
                if(window.nodir != null || window.nodir != undefined)
                {
                    clearInterval(window.setTimeoutId);
                }
                window.setTimeoutId =  this.setTimeout(()=>{
                    window.location.reload(); 
                },300);
            }
        });
    }
   
    const aTag = document.querySelectorAll("aside .second-container a");
    for(let i=0; i < aTag.length; i++)
    {
        aTag[i].addEventListener('click', ()=>{
            const asideBarLinkActive = document.querySelector("aside .second-container .active");
            asideBarLinkActive.classList.remove("active");
            aTag[i].classList.add("active");
            
            locationResolver(aTag[i].dataset.href);
        })

    }

    async function locationResolver(location){
        const mainHeader = document.querySelector("#mainHeader");
        const mainBody1 = document.querySelector("#mainBody1");
        const mainBody2 = document.querySelector("#mainBody2");
        const mainBody3 = document.querySelector("#mainBody3");
        const mainBody4 = document.querySelector("#mainBody4");

        switch(location){
            case "#/main/":
                mainHeader.innerText = "Free, Reliable and Credible!";
                mainBody1.style.display = "block";
                mainBody2.style.display = "none";
                mainBody3.style.display = "none";  
                mainBody4.style.display = "none"; 
            break
            case "#/chart/":
                mainHeader.innerText = "Track the cryptocurrency prices via live graph!";
                mainBody1.style.display = "none";
                mainBody2.style.display = "block";  
                mainBody3.style.display = "none";  
                mainBody4.style.display = "none"; 
            break
            case "#/news/":
                mainHeader.innerText = "Be aware about the latest news in Crypto World!";
                mainBody1.style.display = "none";
                mainBody2.style.display = "none";  
                mainBody3.style.display = "block";   
                mainBody4.style.display = "none"; 
                newsFeedModule.showSpinner();
                await newsFeedModule.loadNews(); // We should wait till the RSS news feed script is appended and all the news being fetched from their servers
            break;
            case "#/terms/":
                mainHeader.innerText = "OpenCrypto is free, but copyrighted !";
                mainBody1.style.display = "none";
                mainBody2.style.display = "none";  
                mainBody3.style.display = "none";   
                mainBody4.style.display = "block"; 
            break;
        }
    }


    return{
        locationResolverInitialize
    };
})();
