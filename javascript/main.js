//All objects  ending "_nm" are namespaces

'use strict';

//Modules
import {UIModule} from "./modules/basicUI.module.js";
import { ipBasedFlagSetterModule } from "./modules/ipBasedFlag.module.js";
import { tableRankModule } from "./modules/table.module.js";
import { currencyConverterModule } from "./modules/currencyConverter.module.js";
import { chartDataOptionsModule } from "./modules/chart.module.js";
import { goLiveModule } from "./modules/goLiveButton.module.js";
import { setDateTimeModule } from "./modules/dateTime.module.js";
import { newsFeedModule } from "./modules/newsFeed.module.js";
import { currencyCadrModule } from "./modules/currencyCards.module.js";
import { weatherWidgetModule } from "./modules/weatherWidget.module.js";

//Routing Script
import { locationResolver_nm } from "./routes.js";

const OpenCryptoAPP = (function(){
    document.addEventListener('DOMContentLoaded', () => {
        UIModule.setBasicUIFunc();
        ipBasedFlagSetterModule.setCountryFlag();
        tableRankModule.setTableData();
        currencyConverterModule.getExchangeRate();
        chartDataOptionsModule.chartDataPageOptionsInitialize();
        goLiveModule.liveIndicatorClassInitializator();
        setDateTimeModule.setDateTime();
        setDateTimeModule.updateDateTimeInitiliazer();
        locationResolver_nm.locationResolverInitialize();
        currencyCadrModule.setCurrencyCardData();
    });
})();






