const hero = {
    heroName: 'Герой #1',
    sayNormal(message) {
      console.log(`${this.heroName}: ${message}`);
    },
    sayLouder(message) {
      console.log(`${this.heroName}: ${message.toUpperCase()}`);
    }
  };