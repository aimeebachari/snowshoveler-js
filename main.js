let width = 8;
let length = 20;
let depth = 8 / 12;

let cubicFeet = width * length * depth;

console.log(cubicFeet);

let price = '$0';

if (cubicFeet <= 49) {
  price = '$20';
} else if (cubicFeet >= 50 && cubicFeet <= 149) {
  price = '$50';
} else if (cubicFeet >= 150 && cubicFeet <= 299) {
  price = '$100';
} else if (cubicFeet > 300) {
  price = '$150';
}

console.log(price);
