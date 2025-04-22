// const weatherForm=document.forms[0];
//
// const getRequestUrl=(params)=>{
//     const API_HOST='https://api.openweathermap.org';
//     const API_KEY='141f270750ed670f402ec5b3eca60c56';
//     const url=new URL(API_HOST);
//     url.pathname="geo/1.0/direct"
//     url.searchParams.set('appid',API_KEY);
//     Object.entries(params).forEach(([key,value]) => {
//         url.searchParams.set(key,value)
//     })
// return url;
// };
//
// const getGeoProps=(form)=>{
//     const q=form.target.elements.q.value;
//     return {
//         q:q
//     }
// }
// const getGeoProps=(form)=>{
//     const lon=form.elements.lon.value;
//     const lan=form.elements.lan.value;
//     return {
//         q:q
//     }
// }
//
// const getGeolocation=async(form)=>{
//     const props=getGeoProps(form);
//     const url=getRequestUrl(props);
//     const res=await fetch(url);
//     return await res.json();
//
// }
//
// const setGeolocation=(form, cityGeo)=>{
//     form.elements.lat.value=cityGeo[0].lat;
//     form.elements.lon.value=cityGeo[0].lon;
//
// }
//
// weatherForm.addEventListener('change',async(event)=>{
//     if(event.target.name==='q'){
//         const form=event.currentTarget;
//         const cityGeo=await getGeolocation(form);
//        setGeolocation(form, cityGeo);
//     }
// })
//
// weatherForm.addEventListener('submit',(event)=>{
//     event.preventDefault();
//    const props=getWeatherProps(event.target);
//    const url=getRequestUrl(props);
//     fetch(url)
// })
//
// weatherForm.element.q.dispatchEvent(new Event('change',{bubbles:true}));
////////////////////////////////////
const weatherForm = document.forms[0];

const DICTIONARY={
    ru:{
        temp: "температура",
        feelsLike:'Ощущается как'
    },
    en:{
        temp:'Temperature',
        feelsLike:'Feels like'
    }

}



const apiTypes = {
    weather: 'weather',
    geo: "geo",
    forecast: 'forecast',
}

const getRequestUrl = (params, apiType = "geo") => {
    const API_HOST = "http://api.openweathermap.org";
    const API_KEY = "141f270750ed670f402ec5b3eca60c56";
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

const getGeoProps = (form) => {
    const q = form.elements.q.value;

    return {
        q
    }
}

const getWeatherProps = (form) => {
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

const getGeolocation = async (form) => {
    const props = getGeoProps(form);
    const url = getRequestUrl(props, apiTypes.geo);
    const res = await fetch(url);
    return await res.json();
}

const setGeolocation = (form, cityGeo) => {
    form.elements.lat.value = cityGeo[0].lat;
    form.elements.lon.value = cityGeo[0].lon;
}
const blockUI = (elem) => {
    elem.classList.add('loader');
};

const unblockUI = (elem) => {
    elem.classList.remove('loader');
};
const getWeather = async (form) => {
    const props = getWeatherProps(form);
    const url = getRequestUrl(props, apiTypes.weather);
    let data;
    blockUI(form)
    try{
    const res = await fetch(url);
  data=await res.json();
    }catch(err){
        console.error(err);
        data=[];
    }
    unblockUI(form)
    return data;
}

const renderWeather = (weather) => {
const weatherContainer=document.querySelector('#weatherContainer');
const currentLang=weatherForm.elements.lang.value;
    const template=document.querySelector('#templateCard').content.cloneNode(true);
const time=new Date(weather.dt *1000).toLocaleString(currentLang,{
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});


const sunrise=new Date(weather.sys.sunrise *1000).toLocaleTimeString(currentLang,{
    hour:'numeric',
    minute:'numeric',
})
    const sunset=new Date(weather.sys.sunset *1000).toLocaleTimeString(currentLang,{
        hour:'numeric',
        minute:'numeric',
    })

    template.querySelector('img').src=`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    template.querySelector('#time').innerText=time;
    template.querySelector('#desc').innerText= `${weather.weather[0].description}`;
    template.querySelector('#temp').innerText=`${DICTIONARY[currentLang].temp} ${weather.main.temp}`;
    template.querySelector('#feelsLike').innerText=`${DICTIONARY[currentLang].feelsLike} ${weather.main.feels_like}`;
    template.querySelector('#sun').innerText=`${sunrise} - ${sunset}`;

    weatherContainer.innerHTML='';
    weatherContainer.append(template);
}

weatherForm.addEventListener("change", async (event) => {
    if (event.target.name === 'q') {
        const form = event.currentTarget
        const cityGeo = await getGeolocation(form)
        setGeolocation(form, cityGeo);
    }
})

weatherForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const weather = await getWeather(event.target);
    renderWeather(weather);

})

weatherForm.elements.q.dispatchEvent(new Event('change', {bubbles: true}));




/////////////////////////////////////

