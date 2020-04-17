const get = require('../libraries/support/methods').get;
const path = require('../libraries/support/vaultClient').path;

async function getLocationPredictionsSearching(token, search) {
    const url = await path();
    const domain = url.edo;
    const method = '/en/api/1.0/locations/predictions';
    const params = {
        "query": search,
        "sessionId": "694417fb-fa2f-487c-a17f-7aa57b7150d8"
    }

    try {
        const response = await get(domain, method, params, token);
        return response;
    } catch (error) {
        console.error(error.response);
    }
}

module.exports = { getLocationPredictionsSearching };