import { Balloon } from './Balloon';

export default class BalloonsLoader {
    constructor(cardWrapper) {
      this.cardWrapper = cardWrapper;
    }
  
    generateBalloon(index) {
      const balloon = new Balloon(
        index,
        this.cardWrapper.offsetWidth,
        this.cardWrapper.offsetHeight
      ).create(document.createElement('div'));
      this.cardWrapper.append(balloon);
    }
  
    loadBalloons(balloonsQuantity) {
      for (let i = 1; i <= balloonsQuantity; i += 1) {
        this.generateBalloon(i);
      }
    }  
  }