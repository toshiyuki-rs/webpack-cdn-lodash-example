import  _ from 'lodash';

class Main {
  
  /**
   * constructor 
   */
  constructor() {
  }


  /**
   * run
   */
  run() {
    const elem = document.getElementById('message');
    const tmp = _.template('<%= message %>');

    elem.innerHTML = tmp({'message': 'hello webpack'});
  }
}

window.onload = () => {
  const mainObj = new Main();
  mainObj.run();
};
// vi: se ts=2 sw=2 et:
