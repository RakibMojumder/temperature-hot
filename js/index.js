const API_KEY = `927484e92b97b5ac9fbd27bb66453a43`;

const fetchWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    showTemperature(data);
}

const setInnerText = (id, innerText) => {
    const elem = document.getElementById(id);
    elem.innerText = innerText;
}

const showTemperature = weatherData => {
    // console.log(weatherData.main)
    setInnerText('city-name', weatherData.name);
    setInnerText('temperature', weatherData.main.temp);
    setInnerText('lead', weatherData.weather[0].main);
}

document.getElementById('search-btn').addEventListener('click', () => {
    const searchInputField = document.getElementById('search-input-field');
    const searchInputFieldValue = searchInputField.value;
    fetchWeatherData(searchInputFieldValue);
});

