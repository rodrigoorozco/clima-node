const axios = require('axios');

const getClima = async(lat, lng) => {
    const response = await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5d1a38c631ee4529f7925d9075397666`);

    return response.data.main.temp;
}

module.exports = {
    getClima
}