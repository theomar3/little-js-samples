function Warrior(name, hp) {
  this.name = name;
  this.hp = hp;
}



Warrior.prototype.status = function() {
  if (this.hp <= 5) {
    return 'badly hurt';
  }
  else if (this.hp > 5 ) {
    return 'doing quite well';
  }
}

var cartman = new Warrior("Cartman", 10);
var stan = new Warrior('Stan', 10);

console.log(cartman.status());
console.log(stan.status());
