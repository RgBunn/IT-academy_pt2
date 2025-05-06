import {getGeoProps, getRequestUrl} from "./weatherUtils";
import {apiTypes} from "./constants";

export const getGeolocation = async (form) => {
    const props = getGeoProps(form);
    const url = getRequestUrl(props, apiTypes.geo);
    const res = await fetch(url);
    return await res.json();
}

export const setGeolocation = (form, cityGeo) => {
    form.elements.lat.value = cityGeo[0].lat;
    form.elements.lon.value = cityGeo[0].lon;
}