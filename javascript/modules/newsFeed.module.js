/* 
This is just the beta version of the newsFeed module
In the near future, it will be fully functional news feed section and not just the rss widget.
If you have any suggestions regarding the implementation of this module, please be free to contact me at nodirbeknabiev98@gmail.com
*/

'use strict';

export {newsFeed_nm as newsFeedModule };

const newsFeed_nm = (function(){

    function showSpinner() {
        setTimeout(showPage, 1000);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("newsContent").style.display = "block"; 
    }

    /*Inserting Script dynamically and loading the news when news section is clicked*/
    function loadNews()
    {
      let script = document.createElement('script');
      script.async = 'true';
      script.setAttribute('type', 'text/javascript');
      script.setAttribute('src', 'https://widget.rss.app/v1/wall.js');
      let insMainBody3 = document.querySelector("#mainBody3 .first-container");
      insMainBody3.appendChild(script);
    }
    
      return{
          loadNews,
          showSpinner
      }
 
})();