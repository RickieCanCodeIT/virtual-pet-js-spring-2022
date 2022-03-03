export default class VirtualPet {
    constructor(name) {
        this.name = name;
        this.hunger = 50;
    }

    feed() {
        this.hunger -= 20;
    }
}