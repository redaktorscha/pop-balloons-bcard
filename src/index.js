import { Card } from './Card';
import { Decor } from './Decor';
import { Balloon } from './Balloon';
import { BalloonsLoader } from './BalloonsLoader';
import { Wish } from './Wish';
import { startSettings } from './startSettings';

document.getElementById("start").addEventListener("click", () => {
  const card = new Card(document.getElementById("bcont"), document.getElementById("balloons"),    document.getElementById("start"), document.getElementById("txt"), startSettings);
  card.start();
});