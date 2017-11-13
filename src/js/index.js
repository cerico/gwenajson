import chipsAndBeans from './stuff.json'

export class Index {

    constructor(){
      console.log(chipsAndBeans)
      let main = document.getElementById('main')
      main.innerHTML = 'hi dere'
    }
  };
  document.addEventListener('DOMContentLoaded', () => {
    new Index()
  });