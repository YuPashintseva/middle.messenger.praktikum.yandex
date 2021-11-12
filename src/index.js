import {sum} from './modules/sum';
import '../style.css'

const root = document.querySelector('#root');
root.textContent = sum(6, -1).toString();

const Handlebars = require("handlebars");
const template = Handlebars.compile("Name: {{name}}");
const data = template({name: "Yuliya"});

document.getElementsByTagName("h1")[0].textContent += data;