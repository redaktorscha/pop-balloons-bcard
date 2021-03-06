import Decor from './Decor';

export default class Wish extends Decor {
    constructor(leftCoord, topCoord, color, id) {
      super();
  
      this.prefix = 'wish';
      this.id = id;
      this.class = 'wish';
      this.color = color;
      this.coords = {
        x: leftCoord,
        y: topCoord
      };
      this.inner = this.wishes[Wish.getRandInt(0, this.wishes.length)];
    }
  
    wishes = [
      '&#9829;',
      '&#9752;',
      '&#127800;',
      '&#9775;',
      '&#128062;',
      '&#127799;',
      '&#128568;',
      '&#129392;',
      '&#129321;',
      '&#129321;',
      '&#129412;',
      '&#129434;',
      '&#128330;',
      '&#129419;',
      '&#129417;',
      '&#127853;',
      '&#9883;',
      '&#8986;',
      '&#8987;',
      '&#128241;',
      '&#9749;',
      '&#9997;',
      '&#9999;',
      '&#9993;',
      '&#128150;',
      '&#128156;',
      '&#10052;',
      '&#127802;',
      '&#127804;',
      '&#127803;',
      '&#127799;',
      '&#9730;',
      '&#9728;',
      '&#127769;',
      '&#127828;',
      '&#127827;',
      '&#127839;',
      '&#127852;',
      '&#127851;',
      '&#127850;',
      '&#127849;',
      '&#127917;',
      '&#127905;',
      '&#127912;',
      '&#127926;',
      '&#127942;',
      '&#128690;',
      '&#128091;',
      '&#9733;',
      '&#10032;',
      '&#128092;',
      '&#128089;',
      '&#128082;',
      '&#128087;',
      '&#127843;',
      '&#127848;',
      '&#127856;',
      '&#127849;',
      '&#36;',
      '&#8364;'
    ];
  }