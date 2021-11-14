import {sum} from './modules/sum';
import template from './index.hbs';
import './hello';

document.addEventListener("DOMContentLoaded", function(event) {
    //const root = document.querySelector('#root');
    //root.textContent = sum(6, -1).toString();
    document.body.innerHTML = template({
      people: [
        "Yehuda Katz",
        "Alan Johnson",
        "Charles Jolley",
      ],
    }) 
  });