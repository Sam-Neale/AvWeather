import axios from 'axios';
//import {parseMetar, parseTAF} from "metar-taf-parser";

function fetchTAF(){
    //let rawTAF = "";

    const options = {
        method: 'POST',
        url: 'http://www.bom.gov.au/aviation/php/process.php',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'insomnia/10.3.1',
          //Connection: 'keep-alive'
        },
        data: {type: 'search', keyword: 'YMMB', page: 'TAF'}
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
}

export default fetchTAF;