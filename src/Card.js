import { BalloonsLoader } from './BalloonsLoader';
import { Wish } from './Wish';

export default class Card {
  constructor(cardWrapper, startScreen, btnStart, btnText, {
    speed,
    balloonsQuantity
  }) {
    this.cardWrapper = cardWrapper;
    this.startScreen = startScreen;
    this.btnStart = btnStart;
    this.btnText = btnText;
    this.balloonsLoader = new BalloonsLoader(this.cardWrapper);
    this.speed = speed;
    this.balloonsQuantity = balloonsQuantity;
  }

  start() {
    this.balloonsLoader.loadBalloons(this.balloonsQuantity);
    this.startScreen.style.display = 'none';
    this.btnText.innerHTML = `Pop balloons<br>to get Bday wishes!`;
    this.btnStart.classList.remove('bcard__bottom-start');
    this.cardWrapper.addEventListener('click', (e) => this.popBalloons(e.target.id));
    requestAnimationFrame(this.moveBalloons.bind(this));
  }

  moveBalloons() {
    const balloons = document.querySelectorAll('.balloon');

    balloons.forEach((balloon) => {
      let y = balloon.offsetTop;
      y -= this.speed;
      balloon.style.top = y + 'px';

      if (y <= -200) {
        this.balloonsLoader.generateBalloon(balloon.id.slice(3));
        balloon.remove();
      }
    });
    requestAnimationFrame(this.moveBalloons.bind(this));
  }

  popBalloons(id) {
    if (id === 'bcont' || id.slice(0, 4) === 'wish') {
      return;
    }
    const targetBalloon = document.getElementById(id);
    const targetBalloonColor = targetBalloon.style.color;

    const x = targetBalloon.offsetLeft;
    const y = targetBalloon.offsetTop;


    const wish = new Wish(x, y, targetBalloonColor, id.slice(3)).create(
      document.createElement('div')
    );

    targetBalloon.remove();
    this.cardWrapper.append(wish);
    this.balloonsLoader.generateBalloon(id.slice(3));

    setTimeout(() => wish.remove(), 3000);
  }

}