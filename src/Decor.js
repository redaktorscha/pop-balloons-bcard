export default class Decor {
    constructor() {}
    static getRandInt = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    create(div) {
        div.id = this.prefix + this.id;
        div.classList.add(this.class);
        div.style.left = this.coords.x + 'px';
        div.style.top = this.coords.y + 'px';
        div.innerHTML = this.inner;
        div.style.color = this.color;
        return div;
    }
}