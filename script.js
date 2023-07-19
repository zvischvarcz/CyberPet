const introWrap = document.getElementById("introWrap");
const createButton = document.getElementById("createButton");
const catRadio = document.getElementById("catRadio");
const dogRadio = document.getElementById("dogRadio");
const nameInput = document.getElementById("nameInput");
const catWrap = document.getElementById("catWrap");
const dogWrap = document.getElementById("dogWrap");
const catName = document.getElementById("catName");
const catHealth = document.getElementById("catHealthBar");
const catHunger = document.getElementById("catHungerBar");
const catThirst = document.getElementById("catThirstBar");
const catContent = document.getElementById("catContentBar");
const catFeed = document.getElementById("catFeed");
const catHydrate = document.getElementById("catHydrate");
const catPlay = document.getElementById("catPlay");
const dogName = document.getElementById("dogName");
const dogHealth = document.getElementById("dogHealthBar");
const dogHunger = document.getElementById("dogHungerBar");
const dogThirst = document.getElementById("dogThirstBar");
const dogHappy = document.getElementById("dogHappyBar");
const dogFeed = document.getElementById("dogFeed");
const dogHydrate = document.getElementById("dogHydrate");
const dogPlay = document.getElementById("dogPlay");
const deathScene = document.getElementById("deathScene");
const endGameWrap = document.getElementById("endGameWrap")
const restartButton = document.getElementById("restartButton")



class Animal {
    constructor(name){
        this.name = name;
        this.hunger = 100;
    this.health = 100;
    this.thirst = 100;
   }

   feed () {
    this.hunger = Math.min(this.hunger + 10, 100);
    this.health = Math.min(this.health + 2, 100);
    this.thirst = Math.min(this.thirst - 10, 100);
   }

   hydrate () {
    this.thirst = Math.min(this.thirst + 10, 100);
    this.health = Math.min(this.health + 2, 100);
   }
}


class Dog extends Animal {
    constructor(name){
        super(name)
        this.name = name;
        this.happy = 100;
    }

    playFetch () {
        this.happy = Math.min(this.happy + 10, 100);
    }
}

class Cat extends Animal {
    constructor(name){
        super(name)
        this.name = name;
        this.content = 100;
    }

    playWool () {
        this.content = Math.min(this.content + 10, 100);
    }
}


const endGame = () => {
    endGameWrap.classList.remove("hidden")
    restartButton.addEventListener("click", () => {
        window.location.reload();
    })
}



const createCat = (name) => {
    catWrap.classList.remove("hidden");
    const playerCat = new Cat(name);
    catName.textContent = `${name} The cat`
    const timeoutStats = () => {
        if (playerCat.hunger == 0 || playerCat.thirst == 0 || playerCat.content == 0){
            playerCat.health = Math.max(playerCat.health - 5, 0);
            catHealth.style.width = `${playerCat.health}%`;
            if (playerCat.health == 0){
                deathScene.innerHTML = `Your beloved cat ${playerCat.name}, has died.`
                endGame();
            }
    }
        playerCat.hunger = Math.max(playerCat.hunger - 5, 0);
        catHunger.style.width = `${playerCat.hunger}%`;
        playerCat.thirst = Math.max(playerCat.thirst- 5, 0);
        catThirst.style.width = `${playerCat.thirst}%`;
        playerCat.content = Math.max(playerCat.content - 5, 0);
        catContent.style.width = `${playerCat.content}%`;
        console.log(playerCat); 
        setTimeout(timeoutStats, 500);  
    }
    setTimeout(timeoutStats, 500);
    catFeed.addEventListener("click", () => {
        playerCat.feed();
    })
    catHydrate.addEventListener("click", () => {
        playerCat.hydrate();
    })
    catPlay.addEventListener("click", () => {
        playerCat.playWool();
    })
    
}




const createDog = (name) => {
    dogWrap.classList.remove("hidden");
    const playerDog = new Dog(name);
    dogName.textContent = `${name} The dog`
    const timeoutStats = () => {
        if (playerDog.hunger == 0 || playerDog.thirst == 0 || playerDog.happy == 0){
            playerDog.health = Math.max(playerDog.health - 5, 0);
            dogHealth.style.width = `${playerDog.health}%`;
            if (playerDog.health == 0){
                deathScene.innerHTML = `Your beloved dog ${playerDog.name}, has died.`
                endGame();
            }
    }
        playerDog.hunger = Math.max(playerDog.hunger - 5, 0);
        dogHunger.style.width = `${playerDog.hunger}%`;
        playerDog.thirst = Math.max(playerDog.thirst- 5, 0);
        dogThirst.style.width = `${playerDog.thirst}%`;
        playerDog.happy = Math.max(playerDog.happy - 5, 0);
        dogHappy.style.width = `${playerDog.happy}%`;
        console.log(playerDog); 
        setTimeout(timeoutStats, 500);  
    }
    setTimeout(timeoutStats, 500);
    dogFeed.addEventListener("click", () => {
        playerDog.feed();
    })
    dogHydrate.addEventListener("click", () => {
        playerDog.hydrate();
    })
    dogPlay.addEventListener("click", () => {
        playerDog.playFetch(); 
    })
    
}
    





createButton.addEventListener("click", () => {
    introWrap.classList.add("hidden")
    let nameChosen = nameInput.value;
    if (catRadio.checked){
        createCat(nameChosen)
    } else if (dogRadio.checked){
        createDog(nameChosen)
    }
})





