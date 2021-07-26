const axios = require('axios');
const cheerio = require('cheerio');

async function getScimitars() {
    try {
        const { data: html } = await axios.get('https://oldschool.runescape.wiki/w/Scimitar');
        const $ = cheerio.load(html);

        // const siteOutput = $('.mw-parser-output'); 
        // console.log(siteOutput.html()); 
        // console.log(siteOutput.text());
        // console.log(siteOutput.find('p').text());
        $('#mw-panel #p-Guides .body ul').each((index, element) => {
            const item = $(element).text().replace(/\s\s+/g, '');
            console.log(item);
        })
    } catch (err) {
        
    }
}
getScimitars();

