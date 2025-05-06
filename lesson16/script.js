

import {getRequestUrl, getWeatherProps, getGeoProps} from './utils/weatherUtils.js'
import {apiTypes,DICTIONARY,weatherForm} from "./utils/constants.js";






const startApp = async (form) => {
    const props = getWeatherProps(form);
    const apiType = form.elements.apiType.value
    const url = getRequestUrl(props, apiType);
    let data;

    blockUI(form)
    try {
        const res = await fetch(url);
        data = await res.json();
    } catch (e) {
        console.error(e);
        data = [];
    }
    unBlockUI(form);

    apiType === apiTypes.weather ? renderWeather(data) : renderForecast(data);
}



weatherForm.addEventListener("change", async (event) => {
    if (event.target.name === 'q') {
        const form = event.currentTarget
        import const cityGeo = await getGeolocation(form)
        setGeolocation(form, cityGeo);
    }
})

weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    startApp(event.target);
})

weatherForm.elements.q.dispatchEvent(new Event('change', {bubbles: true}));