const hero = {
    heroName: 'Герой #1',
    sayNormal(message) {
      console.log(`${this.heroName}: ${message}`);
    },
    sayLouder(message) {
      console.log(`${this.heroName}: ${message.toUpperCase()}`);
    }
  };

  function say(message, isLouder) {
    let sayFn = isLouder ? hero.sayLouder : hero.sayNormal;
    sayFn = sayFn.bind(hero);
  
    sayFn("Привет");
  }
  
  say("Привет!", false); 