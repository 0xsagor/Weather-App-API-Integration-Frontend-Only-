const API_KEY = "YOUR_API_KEY";

function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("result").innerHTML = `
        <h3>${data.name}</h3>
        <p>🌡 ${data.main.temp} °C</p>
        <p>☁ ${data.weather[0].description}</p>
      `;
    })
    .catch(() => {
      document.getElementById("result").innerText = "City not found";
    });
}
