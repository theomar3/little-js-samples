var person1;
var person2;
function generateCharacters() {
   person1 = {
    name: 'Cartman', hp: 10
  };
   person2 = {
    name: 'Stan', hp: 10
  };
}

generateCharacters();

function doRandomDamage() {
  var damage = Math.floor(Math.random() * 3);
  person1.hp -= damage;

  damage = Math.floor(Math.random() * 3);
  person2.hp -= damage;
}

// damage with loop
// while(person1.hp > 0 && person2.hp > 0) {
//   doRandomDamage();
// }

// damage with interval

function damageBySecond() {
  console.log('Round 1...fight!');
  doRandomDamage();
  console.log(person1, person2);

  if (person1.hp < 1 || person2.hp < 1) {
    console.log('Fight Stopped');
    clearInterval(intervalId);
  }
}

var intervalId = setInterval(damageBySecond, 1000);

console.log(person1, person2);
