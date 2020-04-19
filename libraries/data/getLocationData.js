const getLocationObject = require('../../locations/getLocationDataPredictions').getLocationObject;

async function getLocationData(token, searchStringValue) {
    if (searchStringValue === "Vienna") {
        const fullName = "Vienna, Austria";
        const searchObject = await getLocationObject(token, searchStringValue, fullName);
        const id = searchObject[0].id;
        const type = searchObject[0].type;
        const source = searchObject[0].source;
        return {
            fullName,
            id,
            type,
            source
        }
    }
    if (searchStringValue === "Dubai") {
        const fullName = "Dubai, United Arab Emirates";
        const searchObject = await getLocationObject(token, searchStringValue, fullName);
        const id = searchObject[0].id;
        const type = searchObject[0].type;
        const source = searchObject[0].source;
        return {
            fullName,
            id,
            type,
            source
        }
    }
    if (searchStringValue === "Venice") {
        const fullName = "Venice, Italy";
        const searchObject = await getLocationObject(token, searchStringValue, fullName);
        const id = searchObject[0].id;
        const type = searchObject[0].type;
        const source = searchObject[0].source;
        return {
            fullName,
            id,
            type,
            source
        }
    }
    if (searchStringValue === "Conrad Dubai Hotel") {
        const fullName = "Conrad Dubai Hotel, Dubai, United Arab Emirates";
        const searchObject = await getLocationObject(token, searchStringValue, fullName);
        const id = searchObject[0].id;
        const type = searchObject[0].type;
        const source = searchObject[0].source;
        return {
            fullName,
            id,
            type,
            source
        }
    }
    if (searchStringValue === "Splendid Venice") {
        const fullName = "Splendid Venice - Starhotels Collezione, Venice, Italy";
        const searchObject = await getLocationObject(token, searchStringValue, fullName);
        const id = searchObject[0].id;
        const type = searchObject[0].type;
        const source = searchObject[0].source;
        return {
            fullName,
            id,
            type,
            source
        }
    }
}

module.exports = { getLocationData };