import {DICTIONARY, weatherForm} from "./constants";

export const renderWeather = (weather) => {
    const weatherContainer = document.querySelector('#weatherContainer');
    const currentLang = weatherForm.elements.lang.value;
    const template = document.querySelector('#templateCard').content.cloneNode(true);
    const time = new Date(weather.dt * 1000).toLocaleDateString(currentLang, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
/////////////
    const sunriseUTC = weather.sys.sunrise * 1000;
    const sunsetUTC = weather.sys.sunset * 1000;


    const formatter = new Intl.DateTimeFormat(currentLang, {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
    });


    const sunrise = formatter.format(new Date(sunriseUTC + weather.timezone * 1000));
    const sunset = formatter.format(new Date(sunsetUTC + weather.timezone * 1000));

////////////
    // const sunrise = new Date((weather.sys.sunrise + weather.timezone) * 1000).toLocaleTimeString(currentLang, {
    //     hour: 'numeric',
    //     minute: 'numeric',
    // })
    // const sunset = new Date((weather.sys.sunset + weather.timezone) * 1000).toLocaleTimeString(currentLang, {
    //     hour: 'numeric',
    //     minute: 'numeric',
    // })



    template.querySelector('img').src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    template.querySelector("#time").innerText = time
    template.querySelector('#desc').innerText = weather.weather[0].description;
    template.querySelector('#temp').innerText = `${DICTIONARY[currentLang].temp} ${weather.main.temp}`;
    template.querySelector('#feelsLike').innerText = `${DICTIONARY[currentLang].feelsLike} ${weather.main.feels_like}`;
    template.querySelector('#sun').innerText = `${sunrise} - ${sunset}`;

    weatherContainer.innerHTML = '';
    weatherContainer.append(template);
}

export const buildForecastGroup = (data) => {
    const containerDiv = document.createElement('div');
    const divDay = document.createElement('div');
    const divNight = document.createElement('div');

    containerDiv.append(divDay, divNight);
    containerDiv.classList.add('p-3', 'border', 'm-b-3')

    if (data.d) {
        divDay.append(...data.d.map(buildForecastItem));
    }
    if (data.n) {
        divNight.append(...data.n.map(buildForecastItem))
    }

    return containerDiv
}

export const buildForecastItem = (data) => {
    const currentLang = weatherForm.elements.lang.value;
    const template = document.querySelector('#templateCard').content.cloneNode(true);
    const time = new Date(data.dt * 1000).toLocaleDateString(currentLang, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    template.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    template.querySelector("#time").innerText = time
    template.querySelector('#desc').innerText = data.weather[0].description;
    template.querySelector('#temp').innerText = `${DICTIONARY[currentLang].temp} ${data.main.temp}`;
    template.querySelector('#feelsLike').innerText = `${DICTIONARY[currentLang].feelsLike} ${data.main.feels_like}`;

    return template;
}

export const transformForecast = (items) => {
    return items.reduce((acc, item) => {
        const day = item.dt_txt.split(' ')[0]
        const partOfDay = item.sys.pod;
        if (acc[day]) {
            if (acc[day][partOfDay]) {
                acc[day][partOfDay].push(item)
            } else {
                acc[day] = {
                    ...acc[day],
                    [partOfDay]: [item],
                }
            }
        } else {
            acc[day] = {
                [partOfDay]: [item],
            }
        }
        return acc;
    }, {})
}

export const renderForecast = (data) => {
    const weatherContainer = document.querySelector('#weatherContainer');
    const transformedList = transformForecast(data.list);
    const items = Object.values(transformedList).map(buildForecastGroup);

    weatherContainer.innerHTML = '';
    weatherContainer.append(...items);

}
