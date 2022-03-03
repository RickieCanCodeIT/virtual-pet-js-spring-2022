import VirtualPet from "./virtual-pet.js";

const newPetBtn = document.querySelector(".newPet");
const petsDiv = document.querySelector(".virtualPets");

newPetBtn.addEventListener("click", () => {
    let petName = prompt("What is the pet's name?");
    const pet = new VirtualPet(petName);
    const petDiv = document.createElement("div");
    const petNameEl = document.createElement("h2");
    petNameEl.innerText = pet.name;

    const petHungerEl = document.createElement("p");
    petHungerEl.innerText = "Hunger: " + pet.hunger;

    const petFeedBtn = document.createElement("button");
    petFeedBtn.innerText = "Feed";

    petFeedBtn.addEventListener("click", () => {
        pet.feed();
        petHungerEl.innerText = "Hunger: " + pet.hunger;
    });

    petDiv.appendChild(petNameEl);
    petDiv.appendChild(petHungerEl);
    petDiv.appendChild(petFeedBtn);
    petsDiv.appendChild(petDiv);
})