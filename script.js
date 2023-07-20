const introWrap = document.getElementById("introWrap");
const createButton = document.getElementById("createButton");
// dog
const dogRadio = document.getElementById("dogRadio");
const dogWrap = document.getElementById("dogWrap");
const dogName = document.getElementById("dogName");
const dogHealth = document.getElementById("dogHealthBar");
const dogHunger = document.getElementById("dogHungerBar");
const dogThirst = document.getElementById("dogThirstBar");
const dogHappy = document.getElementById("dogHappyBar");
const dogFeed = document.getElementById("dogFeed");
const dogHydrate = document.getElementById("dogHydrate");
const dogPlay = document.getElementById("dogPlay");
const healthProgress = document.getElementById("dogHealthPercent");
const hungerProgress = document.getElementById("dogHungerPercent");
const thirstProgress = document.getElementById("dogThirstPercent");
const happyProgress = document.getElementById("dogHappyPercent");
const dogPicture = document.getElementById("dogPicture")

// Cat
const catRadio = document.getElementById("catRadio");
const catName = document.getElementById("catName");
const catHealth = document.getElementById("catHealthBar");
const catHunger = document.getElementById("catHungerBar");
const catThirst = document.getElementById("catThirstBar");
const catContent = document.getElementById("catContentBar");
const catFeed = document.getElementById("catFeed");
const catHydrate = document.getElementById("catHydrate");
const catPlay = document.getElementById("catPlay");
const catWrap = document.getElementById("catWrap");
const catHealthProgress = document.getElementById("catHealthPercent");
const catHungerProgress = document.getElementById("catHungerPercent");
const catThirstProgress = document.getElementById("catThirstPercent");
const catContentProgress = document.getElementById("catContentPercent");
const catPicture = document.getElementById("catPicture")

// Hamster
const hamsterRadio = document.getElementById("hamsterRadio");
const hamsterName = document.getElementById("hamsterName");
const hamsterHealth = document.getElementById("hamsterHealthBar");
const hamsterHunger = document.getElementById("hamsterHungerBar");
const hamsterThirst = document.getElementById("hamsterThirstBar");
const hamsterExercise = document.getElementById("hamsterExerciseBar");
const hamsterFeed = document.getElementById("hamsterFeed");
const hamsterHydrate = document.getElementById("hamsterHydrate");
const hamsterWheel = document.getElementById("hamsterWheel");
const hamsterWrap = document.getElementById("hamsterWrap");
const hamsterHealthProgress = document.getElementById("hamsterHealthPercent");
const hamsterHungerProgress = document.getElementById("hamsterHungerPercent");
const hamsterThirstProgress = document.getElementById("hamsterThirstPercent");
const hamsterExerciseProgress = document.getElementById("hamsterExercisePercent");
const hamsterPicture = document.getElementById("hamsterPicture")


const nameInput = document.getElementById("nameInput");
const deathScene = document.getElementById("deathScene");
const endGameWrap = document.getElementById("endGameWrap")
const restartButton = document.getElementById("restartButton")
const errorEmpty = document.getElementById("errorEmpty")



const dogSound = () => {
    const audio = new Audio("./sounds/animals_dogs_x2_barking_small_001.mp3");
    audio.play();
}

const catSound = () => {
    const audio = new Audio("./sounds/zapsplat_cartoon_cat_meow_19819.mp3");
    audio.play();
}

const hamsterSound = () => {
    const audio = new Audio("./sounds/cartoon_mouse_laughter_1.mp3");
    audio.play();
}

const eating = () => {
    const audio = new Audio("./sounds/comedy_eating_munch.mp3");
    audio.play();
}

const drinking = () => {
    const audio = new Audio("./sounds/zapsplat_cartoon_big_lick_slurp_003_77622.mp3");
    audio.play();
}

const fetch = () => {
    const audio = new Audio("./sounds/foley_cable_whoosh_air_001.mp3");
    audio.play();
}

const wheel = () => {
    const audio = new Audio("./sounds/zapsplat_foley_plastic_hamster_wheel_spin_by_hand_001_49624.mp3");
    audio.play();
}

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

class Hamster extends Animal {
    constructor(name){
        super(name)
        this.name = name;
        this.exercise = 100;
    }

    playWheel () {
        this.exercise = Math.min(this.exercise + 10, 100);
    }
}



const endGame = () => {
    endGameWrap.classList.remove("hidden");
    endGameWrap.classList.add("endGameWrap");
    catFeed.disabled = true;
        catHydrate.disabled = true;
        catPlay.disabled = true;
        dogFeed.disabled = true;
        dogHydrate.disabled = true;
        dogPlay.disabled = true;
        hamsterFeed.disabled = true;
        hamsterHydrate.disabled = true;
        hamsterWheel.disabled = true;
        
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
            catHealthProgress.textContent = `${playerCat.health}%`;
            if (playerCat.health < 50){
                catPicture.src = "./images/sad-cat.jpg"
            } else {
                catPicture.src = "./images/happy-cat.jpg"
            }
            if (playerCat.health == 0){
                deathScene.innerHTML = `Your beloved cat ${playerCat.name}, has died.`
                endGame();
            }
    }
        playerCat.hunger = Math.max(playerCat.hunger - 5, 0);
        catHunger.style.width = `${playerCat.hunger}%`;
        catHungerProgress.textContent = `${playerCat.hunger}%`;
        playerCat.thirst = Math.max(playerCat.thirst- 3, 0);
        catThirst.style.width = `${playerCat.thirst}%`;
        catThirstProgress.textContent = `${playerCat.thirst}%`;
        playerCat.content = Math.max(playerCat.content - 2, 0);
        catContent.style.width = `${playerCat.content}%`;
        catContentProgress.textContent = `${playerCat.content}%`;
        console.log(playerCat); 
        setTimeout(timeoutStats, 200);  
    }
    setTimeout(timeoutStats, 200);
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
            healthProgress.textContent = `${playerDog.health}%`;
            if (playerDog.health < 50){
                dogPicture.src = "./images/sad-dog.jpg"
            } else {
                dogPicture.src = "./images/happy-dog.png"
            }
            if (playerDog.health == 0){
                deathScene.innerHTML = `Your beloved dog ${playerDog.name}, has died.`
                endGame();
            }
    }   
        
        playerDog.hunger = Math.max(playerDog.hunger - 4, 0);
        dogHunger.style.width = `${playerDog.hunger}%`;
        hungerProgress.textContent = `${playerDog.hunger}%`;
        playerDog.thirst = Math.max(playerDog.thirst- 3, 0);
        dogThirst.style.width = `${playerDog.thirst}%`;
        thirstProgress.textContent = `${playerDog.thirst}%`;
        playerDog.happy = Math.max(playerDog.happy - 2, 0);
        dogHappy.style.width = `${playerDog.happy}%`;
        happyProgress.textContent = `${playerDog.happy}%`;
        console.log(playerDog); 
        setTimeout(timeoutStats, 200);  
    }
    setTimeout(timeoutStats, 200);
    dogFeed.addEventListener("click", () => {
        playerDog.feed();
        eating();
    })
    dogHydrate.addEventListener("click", () => {
        playerDog.hydrate();
        drinking();
    })
    dogPlay.addEventListener("click", () => {
        playerDog.playFetch(); 
        fetch()
    })
    
}


const createHamster = (name) => {
    hamsterWrap.classList.remove("hidden");
    const playerHamster = new Hamster(name);
    hamsterName.textContent = `${name} The hamster`
    const timeoutStats = () => {
        if (playerHamster.hunger == 0 || playerHamster.thirst == 0 || playerHamster.exercise == 0){
            playerHamster.health = Math.max(playerHamster.health - 5, 0);
            hamsterHealth.style.width = `${playerHamster.health}%`;
            hamsterHealthProgress.textContent = `${playerHamster.health}%`;
            } if (playerHamster.health < 50){
                hamsterPicture.src = "./images/sad-hamster.jpg"
            } else {
                hamsterPicture.src = "./images/happy-hamster.jpg"
            }
            if (playerHamster.health == 0){
                deathScene.innerHTML = `Your beloved hamster ${playerHamster.name}, has died.`
                endGame();
            }
        
    
        playerHamster.hunger = Math.max(playerHamster.hunger - 4, 0);
        hamsterHunger.style.width = `${playerHamster.hunger}%`;
        hamsterHungerProgress.textContent = `${playerHamster.hunger}%`;
        playerHamster.thirst = Math.max(playerHamster.thirst- 3, 0);
        hamsterThirst.style.width = `${playerHamster.thirst}%`;
        hamsterThirstProgress.textContent = `${playerHamster.thirst}%`;
        playerHamster.exercise = Math.max(playerHamster.exercise - 2, 0);
        hamsterExercise.style.width = `${playerHamster.exercise}%`;
        hamsterExerciseProgress.textContent = `${playerHamster.exercise}%`;
        console.log(playerHamster); 
        setTimeout(timeoutStats, 200);  
    }
    setTimeout(timeoutStats, 200);
    hamsterFeed.addEventListener("click", () => {
        playerHamster.feed();
        eating()
    })
    hamsterHydrate.addEventListener("click", () => {
        playerHamster.hydrate();
        drinking()
    })
    hamsterWheel.addEventListener("click", () => {
      playerHamster.playWheel();
      wheel()
    }) 
    }


createButton.addEventListener("click", () => {
    if((catRadio.checked == false && dogRadio.checked == false && hamsterRadio.checked == false) || nameInput.value == ""){
        errorEmpty.classList.remove("hidden")
    } else{
        introWrap.classList.add("hidden")
        let nameChosen = nameInput.value;
        if (catRadio.checked){
            createCat(nameChosen)
        } else if (dogRadio.checked){
            createDog(nameChosen)
        } else if (hamsterRadio.checked){
            createHamster(nameChosen);
        }
     if (dogRadio.checked == true) {
        dogSound() }
        else if (catRadio.checked == true) {
           catSound()
        } else 
        hamsterSound()
    }
})





