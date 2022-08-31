class Entity {
  constructor(name, height, place) {
    this.name = name;
    this.height = height;
    this.place = place;
  }

  greet() {
    console.log(`Hi! I'm ${this.name} from the ${this.place}!`);
  }
}

export default Entity;
