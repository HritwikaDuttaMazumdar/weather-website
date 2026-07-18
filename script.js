async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "bc9ceead449bf8749eadd9258998675e";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        if(data.cod=="404"){

            document.getElementById("result").innerHTML="City Not Found";
            return;

        }

        document.getElementById("result").innerHTML=`

        <h2>${data.name}</h2>

        <p><b>Temperature:</b> ${data.main.temp} °C</p>

        <p><b>Humidity:</b> ${data.main.humidity}%</p>

        <p><b>Weather:</b> ${data.weather[0].description}</p>

        <p><b>Wind Speed:</b> ${data.wind.speed} m/s</p>

        `;

    }

    catch(error){

        document.getElementById("result").innerHTML="Something went wrong.";

    }

}