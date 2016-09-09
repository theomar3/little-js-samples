function Warrior(name, hp) {
  this.name = name;
  this.hp = hp;
}

Warrior.prototype.status = function() {
  if (this.hp <= 5) {
    return this.name + '(' + this.hp + ' hp)' + ' is badly hurt';
  }
  else if (this.hp > 5) {
    return this.name + '(' + this.hp + ' hp)' +  ' is doing quite well';
  }
}

function Monk(name, hp) {
  this.name = name;
  this.hp = hp;
}

Monk.prototype = new Warrior();

Monk.prototype.status = function() {
  return "The monk's invicible.";
}


var ben = new Monk('Benedict', 10);
var conan = new Warrior('Conan', 10);


while(ben.hp > 0 && conan.hp > 0) {

  var damage = Math.floor(Math.random() * 3);
  ben.hp -= damage;

  damage = Math.floor(Math.random() * 3);
  conan.hp -= damage;

  console.log(ben.status());
  console.log(conan.status());

}
