(function () {
    window.addEventListener('load', () => {
        navigator.geolocation.getCurrentPosition((response, success) => {
            let lat = response.coords.latitude;
            let long = response.coords.longitude;
            let api = `http://api.weatherapi.com/v1/current.json?key=9728aa32a6c94e9d87c215301211211&q=${lat},${long}&aqi=no`;
            console.log(api);
            fetch(api)
                .then(response => response.json())
                .then(data => showData(data))
                .catch(error => console.log(error.error))

            const showData = (data) => {
                document.getElementById('country').innerHTML = data.location.country;
                document.getElementById('localtime').innerHTML = data.location.localtime;
                document.getElementById('temp_c').innerHTML = data.current.temp_c;
                document.getElementById('condition').innerHTML = data.current.condition.text;
                document.getElementById('icon').src = data.current.condition.icon;

                console.log(data.current.condition.icon);
            }
        })
    })
})();