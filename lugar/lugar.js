const axios = require('axios');



const getLugarlatLng = async(dir) => {
    const encodedUrl = encodeURI(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${dir}`);

    const instance = axios.create({
        baseURL: encodedUrl,
        timeout: 1000,
        headers: { 'x-rapidapi-key': 'c054682499msh00728a1bd545a60p1dbf8ajsndf9214ce81f4' }
    });


    const response = await instance.get();

    if (response.data.Results.lenght === 0) {
        console.log(`No hay resultados para ${dir}`);
    }

    const data = response.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarlatLng
}