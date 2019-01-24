import '@babel/polyfill';
import axios from 'axios'

async function load() {
    return axios.get('ajax.html');
}

async function example() {
    var result = await load();
    document.write("Yey, story successfully loaded!");
    console.log(result);
}

example();
