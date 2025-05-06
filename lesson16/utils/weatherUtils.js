
export const getRequestUrl = (params, apiType = "geo") => {
    const API_HOST = "http://api.openweathermap.org";
    const API_KEY = "a5fc8be9dcd685b1f8c7d30b239a69c1";
    const url = new URL(API_HOST);
    const APIS = {
        weather: '/data/2.5/weather',
        geo: "/geo/1.0/direct",
        forecast: '/data/2.5/forecast',
    }

    url.pathname = APIS[apiType];
    url.searchParams.set('appid', API_KEY);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value)
    })

    return url;
}

export const getGeoProps = (form) => {
    const q = form.elements.q.value;

    return {
        q
    }
}

export const getWeatherProps = (form) => {
    const lon = form.elements.lon.value;
    const lat = form.elements.lat.value;
    const units = form.elements.units.value;
    const lang = form.elements.lang.value;

    return {
        lon,
        lat,
        units,
        lang
    }
}