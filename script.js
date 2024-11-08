const onBtn = document.getElementById("onBtn");
const homeBtn = document.getElementById("homeBtn");
const enterBtn = document.getElementById("enterBtn");
const clearBtn = document.getElementById("clearBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const textOutputContainer = document.getElementById("textOutputContainer");
const textOutput = document.getElementById("textOutput");
const imgScreenContainer = document.getElementById("imgScreenContainer")
const screenOutput = document.getElementById("screenOutput");
const onLight = document.getElementById("onLight")
const redLight = document.getElementById("redLight")
const yellowLight = document.getElementById("yellowLight")
const greenLight = document.getElementById("greenLight")
const defaultImg = document.getElementById("defaultImg");
const keyboardContainer = document.getElementById("keyboardContainer");
const backSpace = document.getElementById("backSpace")
const pokedexAPI = "https://pokeapi.co/api/v2/pokemon/"


// * API FUNCTIONS

async function getPokedexData() {
    let pokedexAPI = "https://pokeapi.co/api/v2/pokemon/"
    let limit151 = "?limit=151";
    pokedexAPI += limit151;
    const response = await fetch(pokedexAPI);
    const apiData = await response.json();
    return apiData;
}

async function getRanPokemon() {
    const ranNum = Math.floor(Math.random() * 151)
    let pokedexAPI = "https://pokeapi.co/api/v2/pokemon/"
    pokedexAPI += ranNum;
    const response = await fetch(pokedexAPI);
    const ranPokemon = await response.json();
    return ranPokemon;
} 

// TODO change pokemon name


async function getKeyedPokemon() {
  let pokemonName = optSearch.textContent;
  let pokedexAPI = "https://pokeapi.co/api/v2/pokemon/"
  pokedexAPI += pokemonName;
  const response = await fetch(pokedexAPI);
  const keyedPokemon = await response.json();
  console.log(keyedPokemon);
  return keyedPokemon;
} 

// * GET API DATA ON PAGE LOAD

async function errorCheck() {
    let pokedexData = [];
  try {
    pokedexData = await getPokedexData();
  } catch (error) {
    console.log(error);
  }

  let ranPokemonData = [];
  try {
    ranPokemonData = await getRanPokemon();
  } catch (error) {
    console.log(error);
  }

  let keyedPokemonData = [];
  try {
    keyedPokemonData = await getKeyedPokemon();
  } catch (error) {
    console.log(error);
  }
}
document.addEventListener("DOMContentLoaded", errorCheck)


function imgCheck() {
  const img = screenOutput.querySelector("img");
  console.log(img)
  console.log(screenOutput.contains(img) ? true : false)
  return screenOutput.contains(img) ? true : false;
}

function pCheck() {
  return textOutputContainer.childElementCount > 1 ? true : false;
}

function removeScreenContent() {
  if (imgCheck()) {
    let img = screenOutput.querySelector("img")
    img.remove();
    console.log("there is an image here")
  } else {
    console.log("there is no image")
  }
  
  textOutput.textContent = "";
  if (pCheck()) {
    let count = textOutputContainer.childElementCount - 1;
  for (i = 0; i < count; i++) {
    textOutputContainer.lastElementChild.remove();
  }
  }
}

function getDefaultImg() {
  const defaultImg = document.createElement("img");
        defaultImg.setAttribute("id", "defaultImg");
        defaultImg.setAttribute("src", "data:image/png;base64,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")
        defaultImg.setAttribute("alt", "pixel pokeball")
        screenOutput.append(defaultImg); 
}

// * FUNCTIONS TO BE APPLYED ON BUTTON CLICK - KEYED INPUT POKEMON
async function displayKeyedPokemon() {
  let keyedPokemonData = []
  keyedPokemonData = await getKeyedPokemon();
  console.log(keyedPokemonData)

    // types list
  let typeArray = [];
  for (let i = 0; i < keyedPokemonData.types.length; i++) {
    typeArray.push(keyedPokemonData.types[i].type.name);
  }
  const typeList = typeArray.toString();
  console.log(typeList); 

  // ablities list
  let abilitiesArray = [];
  for (let i = 0; i < keyedPokemonData.abilities.length; i++) {
    abilitiesArray.push(keyedPokemonData.abilities[i].ability.name);
  }
  const abilitiesList = abilitiesArray.toString(); 
  console.log(abilitiesList);

// DIsplay keyed Pokemon stats
  textOutput.textContent = `A ${keyedPokemonData.name} appears...`
  optSearch.textContent = `Name: ${keyedPokemonData.name}\nHeight: ${keyedPokemonData.height}\n Weight: ${keyedPokemonData.weight}\nTypes: ${typeList}\nAbilities: ${abilitiesList}` 
  console.log(keyedPokemonData)

  // Remove default img and insert ran pokemon img
  if (imgCheck()) {
    screenOutput.removeChild(screenOutput.firstChild);
  }

  let img = keyedPokemonData.sprites.front_default
  const keyedPokemonImg = document.createElement("img");
  keyedPokemonImg.setAttribute("src", img);
  keyedPokemonImg.setAttribute("id", "img");
  screenOutput.append(keyedPokemonImg);
  console.log(screenOutput)
} 

async function displayKeyedOutput() {
  const pokedexData = await getPokedexData();
  let pokedexDataArray = pokedexData.results;
  let keyedValue = optSearch.textContent
  console.log(keyedValue)

  let i = 0;
  while (i < pokedexDataArray.length) {
    if (keyedValue === pokedexDataArray[i].name) {
      displayKeyedPokemon();
      break
    } else {
      textOutput.textContent = `Cannot identify. ${keyedValue} is unknown to your Pokedex.\nPress clear to search more of your favourite Pokemon\n Or press home to discover random Pokemon in the wild`
    }
    i++
  }
}

function clearKeyedPokemon() {
  // if theres an image, remove and get default
  if (imgCheck()) {
    let img = screenOutput.firstChild
    let imgId= img.getAttribute("id")
    // check is it default? if so remove whats in there and get default img
    if (imgId !== "defaultImg") {
      img.remove();
      getDefaultImg();
    }
} else {
  // if not img present, get default img
  getDefaultImg;
}

// change textOutput 
    textOutput.textContent = "Try typing another Pokemon in the keyboard to find stats on your favourite\nOr press home to discover a random Pokemon in the wild";
    optSearch.textContent = "";
}

// * FUNCTIONS TO BE APPLYED ON BUTTON CLICK - RANDOM POKEMON
async function displayRanPokemon() {
  let ranPokemonData = []
  ranPokemonData = await getRanPokemon();

  //  type list
  let typeArray = [];
  for (let i = 0; i < ranPokemonData.types.length; i++) {
    typeArray.push(ranPokemonData.types[i].type.name);
  }
  const typeList = typeArray.toString(); 
  console.log(typeList);

  // ablities list
  let abilitiesArray = [];
  for (let i = 0; i < ranPokemonData.abilities.length; i++) {
    abilitiesArray.push(ranPokemonData.abilities[i].ability.name);
  }
  const abilitiesList = abilitiesArray.toString(); 
  console.log(abilitiesList);

  // Display ran pokemon stats
  textOutput.textContent = "A random Pokemon appears..."
  optRandom.textContent = `Name: ${ranPokemonData.name}\nHeight: ${ranPokemonData.height}\n Weight: ${ranPokemonData.weight}\nTypes: ${typeList}\nAbilities: ${abilitiesList}` 

  // Remove default img and insert ran pokemon img
  if (imgCheck()) {
    screenOutput.removeChild(screenOutput.firstChild);
  }
  let img = ranPokemonData.sprites.front_default
  const ranPokemonImg = document.createElement("img");
  ranPokemonImg.setAttribute("src", img);
  ranPokemonImg.setAttribute("id", "img");
  screenOutput.append(ranPokemonImg);
  console.log(screenOutput)
}

function clearRanPokemon () {
  if (imgCheck) {
    const img = document.getElementById("img");
  img.remove();
  }
  textOutput.textContent = "Ready for another pokemon?\nPress Enter to discover more random pokemon.\nOr press home to search the name of your favourite!"
  optRandom.textContent = "";
}


function getHomeScreen() {
    getDefaultImg();

  textOutput.textContent = `Welcome Pokemon trainer! \n What would you like to do?`;
  let optSearch = document.createElement("p");
  optSearch.setAttribute("id", "optSearch");
  optSearch.classList.add("selected")
  optSearch.classList.add("option")
  optSearch.textContent = "Search your favourite Pokemon via the Pokedex keyboard";

  let optRandom = document.createElement("p");
  optRandom.setAttribute("id", "optRandom");
  optRandom.classList.add("option")
  optRandom.textContent = "Find a random Pokemon";

  textOutputContainer.append(optSearch, optRandom);
  console.log(optSearch, optRandom)
  }



// * animation and default display on/off onBtn click

onBtn.addEventListener("click", () => {
  // *ANIMATION
  onLight.classList.toggle("main");
  redLight.classList.toggle("red");
  yellowLight.classList.toggle("yellow");
  greenLight.classList.toggle("green");
// *TOGGLE SCREENS ON/OFF
  if (imgCheck() || pCheck()) {
    removeScreenContent();
  } else { 
    setTimeout(getHomeScreen, 2800);
}
});



// *choose Random or Search mode

function toggleOptions() {
  console.log(optSearch)
  console.log(optRandom)
  optSearch.classList.toggle("selected");
  optRandom.classList.toggle("selected");
}

rightBtn.addEventListener("click", toggleOptions);
leftBtn.addEventListener("click", toggleOptions);


// * Display key on keyboard
function displayKey(event) {
  let searchDisplay = optSearch.textContent;
  const key = event.target;
  const outputChar = key.value;
  if (outputChar === "") {
  let stringArray = searchDisplay.split("");
  stringArray.pop();
  searchDisplay = stringArray.join("");
  optSearch.textContent = searchDisplay;
  } else {
  searchDisplay += outputChar;
  optSearch.textContent = searchDisplay;
  }
}

function chooseMode() {

  if (optSearch.classList.length === 2) {
    console.log("SearchTest")
    // *Set up Search screen
    textOutput.textContent = "Type the name of your pokemon in the keyboard and click enter to find some quick stats";
    optSearch.classList.remove("selected");
    optSearch.textContent = "";
    optRandom.remove();

    // *Setup Keyboard Input
  keyboardContainer.addEventListener("click", displayKey);

  // * display keyed pokemon or error message on enterBtn click
  enterBtn.addEventListener("click", displayKeyedOutput)
// * clear keyed pokemon on clearBtn click
  clearBtn.addEventListener("click", clearKeyedPokemon);

  } else if (optRandom.classList.length === 2) {
    console.log("Random Test");
    // *Set up Random screen
    textOutput.textContent = "What will you find on your travels?\n Press Enter to discover new Pokemon in your vicinity!";
    optRandom.classList.remove("selected");
    optRandom.textContent = "";
    optSearch.remove();

     // * display randpokemon data on enter btn click
    enterBtn.addEventListener("click", displayRanPokemon);

    // * clear randpokemon data on clear btn click
    clearBtn.addEventListener("click", clearRanPokemon)
  }
}

enterBtn.addEventListener("click", chooseMode, {once: true})




// *Display back to default screens.
homeBtn.addEventListener("click", () => {
  if (imgCheck() || pCheck()) {
    removeScreenContent();
    getHomeScreen();
    enterBtn.removeEventListener("click", displayRanPokemon)
    enterBtn.removeEventListener("click", displayKeyedOutput)
    keyboardContainer.removeEventListener("click", displayKey)
    enterBtn.addEventListener("click", chooseMode)

    clearBtn.removeEventListener("click", clearRanPokemon)
    clearBtn.removeEventListener("click", clearKeyedPokemon)
  }
})




