const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Ciudad a consultar',
        demand: true
    }
}).argv;

const getInfo = async direccion => {

    try {
        const ubicacion = await lugar.getLugarlatLng(direccion);
        const temperatura = await clima.getClima(ubicacion.lat, ubicacion.lon);
        return `El clima de ${ubicacion.direccion} es de ${temperatura}`;
    } catch (error) {
        return error;
    }


}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);