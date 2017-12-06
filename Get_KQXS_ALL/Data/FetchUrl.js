/**
 * Fetch Data with URL
 */
var fetch = require('node-fetch');
async function fetchData(url) {
    try {
        const res = await fetch(url);
        if (res.ok) {
            const text = await res.text();
           // logger.info(url, options && options.toJson() || '', res.status, json.toJson());
            return text;
        } else {
            //logger.info(url, options && options.toJson() || '', res.status);
            return null;
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = {fetchData};