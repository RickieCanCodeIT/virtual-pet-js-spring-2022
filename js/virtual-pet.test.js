import VirtualPet from "./virtual-pet.js";

describe('VirtualPet', () => {
    test('Does it have a name', () => {
        //arrangement / action
        const underTest = new VirtualPet('Freddy');

        //assert
        expect(underTest.name).toMatch('Freddy');
    });

    test('does feed work', () => {
        //arrangement
        const underTest = new VirtualPet('Daphne');
        
        //action
        underTest.feed();

        //assert
        expect(underTest.hunger).toEqual(30);
    });
})