const introWrap = document.getElementById("introWrap");
const createButton = document.getElementById("createButton")
const catRadio = document.getElementById("catRadio")
const dogRadio = document.getElementById("dogRadio")
const nameInput = document.getElementById("nameInput")
const catWrap = document.getElementById("catWrap")
const dogWrap = document.getElementById("dogWrap")






class Animal {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.hunger = 0;
        this.thirst = 0;
    }

   feed () {
    this.hunger += 10;
    this.health += 10;
    this.thirst -= 10;
   }

   hydrate () {
    this.thirst += 10;
    this.health += 10;
   }
}


class Dog extends Animal {
    constructor(name){
        super(name)
        this.name = name;
        this.happy = 100;
    }

    playFetch () {
        this.happy +=100;
    }
}

class Cat extends Animal {
    constructor(name){
        super(name)
        this.name = name;
        this.content = 100;
    }

    playWool () {
        this.content +=100;
    }
}

const createCat = (name) => {
    const playerCat = new Cat(name)
    catWrap.classList.remove("hidden")
}
const createDog = (name) => {
    const playerCat = new Cat(name)
    dogWrap.classList.remove("hidden")
}





createButton.addEventListener("click", () => {
    introWrap.classList.add("hidden")
    let nameChosen = nameInput.value;
    if (catRadio == true){
        createCat(nameChosen)
    } else if (dogRadio == true){
        createDog(nameChosen)
    }
})