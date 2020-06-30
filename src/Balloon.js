import Decor from './Decor';


export default class Balloon extends Decor {
  constructor(q, parentOffsetWidth, parentOffsetHeight) {
    super();
    this.color = this.colors[Balloon.getRandInt(0, this.colors.length)];
    this.id = q;
    this.prefix = 'bal';
    this.class = 'balloon';
    this.inner = `<svg version='1.0' xmlns='http://www.w3.org/2000/svg' width='90pt' height='100pt' viewBox='0 0 950.000000 1280.000000' preserveAspectRatio='xMidYMid meet'><metadata>
    Created by potrace 1.15, written by Peter Selinger 2001-2017
    </metadata>          
          <g id='${this.id}' transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)' fill='${this.color}' stroke='#000000'>
            <path d='M4430 12789 c-921 -59 -1769 -370 -2480 -908 -1067 -807 -1758 -2084
-1914 -3536 -69 -641 -34 -1378 100 -2105 192 -1039 624 -2084 1222 -2955 536
-781 1225 -1439 1919 -1834 140 -79 424 -214 558 -264 215 -80 439 -136 648
-162 60 -7 111 -16 115 -19 8 -9 -15 -237 -34 -326 -35 -167 -134 -411 -198
-487 -33 -40 -33 -73 2 -105 59 -57 173 -82 372 -83 213 0 331 25 393 83 36
34 34 62 -7 116 -114 150 -225 522 -226 758 0 54 -15 47 150 68 889 116 1919
814 2751 1865 480 607 892 1332 1182 2085 466 1210 624 2521 441 3659 -214
1337 -881 2491 -1874 3242 -876 663 -1971 982 -3120 908z' />
          </g>
        </svg>`;
    this.width = 90;
    this.coords = {
      x: Balloon.getRandInt(-(this.width / 2), parentOffsetWidth - this.width),
      y: parentOffsetHeight * q
    };
  }

  colors = [
    '#F787BB',
    '#5FA1E4',
    '#F32566',
    '#BDFFC2',
    '#B59FF7',
    '#FAFE03',
    '#A328CD',
    '#2A59F7'
  ];
}