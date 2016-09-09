var person 1;
var person 2;

function generateCharacters() {
   person1 = {
    name: 'Cartman', hp: 10
  };
   person2 = {
    name: 'Stan', hp: 10
  };
}

function getDamage() {
  var damage = Math.floor(Math.random() * 3);
  person1.hp -= damage;

  damage = Math.floor(Math.random() * 3);
  person2.hp -= damage;

}
