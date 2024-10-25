const onBtn = document.getElementById("onBtn");
const homeBtn = document.getElementById("homeBtn");
const enterBtn = document.getElementById("enterBtn");
const clearBtn = document.getElementById("clearBtn");
const textOutput = document.getElementById("textOutput");
const screenOutput = document.getElementById("screenOutput");
const keyQ = document.getElementById("keyQ");
const keyW = document.getElementById("keyW");
const keyE = document.getElementById("keyE");
const keyR = document.getElementById("keyR");
const keyT = document.getElementById("keyT");
const keyY = document.getElementById("keyY");
const keyU = document.getElementById("keyU");
const keyI = document.getElementById("keyI");
const keyO = document.getElementById("keyO");
const keyP = document.getElementById("keyP");
const keyA = document.getElementById("keyA");
const keyS = document.getElementById("keyS");
const keyD = document.getElementById("keyD");
const keyF = document.getElementById("keyF");
const keyG = document.getElementById("keyG");
const keyH = document.getElementById("keyH");
const keyJ = document.getElementById("keyJ");
const keyK = document.getElementById("keyK");
const keyL = document.getElementById("keyL");
const keyZ = document.getElementById("keyZ");
const keyX = document.getElementById("keyX");
const keyC = document.getElementById("keyC");
const keyV = document.getElementById("keyV");
const keyB = document.getElementById("keyB");
const keyN = document.getElementById("keyN");
const keyM = document.getElementById("keyM");
const backSpace = document.getElementById("backSpace")
const pokedexAPI = "https://pokeapi.co/api/v2/pokemon/"
let pokedexData = [];


async function getPokedexData() {
    let pokedexAPI = "https://pokeapi.co/api/v2/pokemon/"
    let limit151 = "?limit=151";
    pokedexAPI += limit151;
    console.log(pokedexAPI); 
    const response = await fetch(pokedexAPI);
    const apiData = await response.json();
    return apiData;
}

async function getRanPokemon() {
    const ranNum = Math.floor(Math.random() * 151)
    let pokedexAPI = "https://pokeapi.co/api/v2/pokemon/"
    pokedexAPI += ranNum;
    // console.log(pokedexAPI)
    const response = await fetch(pokedexAPI);
    const ranPokemon = await response.json();
    return ranPokemon;
} 

document.addEventListener("DOMContentLoaded", async () => {
    let pokedexData = [];
  try {
    pokedexData = await getPokedexData();
  } catch (error) {
    console.log(error);
  }
  // console.log(pokedexData);

  let ranPokemonData = [];
  try {
    ranPokemonData = await getRanPokemon();
  } catch (error) {
    console.log(error);
  }
  // console.log(ranPokemonData);
});



// enter for randpokemon
async function displayRanPokemon() {
  let pokedexData = [];
  try {
    pokedexData = await getPokedexData();
  } catch (error) {
    console.log(error);
  }
  // console.log(pokedexData);

  let ranPokemonData = [];
  try {
    ranPokemonData = await getRanPokemon();
  } catch (error) {
    console.log(error);
  }
  console.log(ranPokemonData);

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

  textOutput.textContent = `Name: ${ranPokemonData.name}\nHeight: ${ranPokemonData.height}\n Weight: ${ranPokemonData.weight}\nTypes: ${typeList}\nAbilities: ${abilitiesList}` 

  let img = ranPokemonData.sprites.front_default
  const ranPokemonImg = document.createElement("img");
  ranPokemonImg.setAttribute("src", img);
  ranPokemonImg.setAttribute("id", "img");
  screenOutput.append(ranPokemonImg);
  console.log(screenOutput)
}

enterBtn.addEventListener("click", displayRanPokemon);

// ran Pokemon clear
function clearScreens () {
  const img = document.getElementById("img");
  img.remove();

  textOutput.textContent = "";
}
clearBtn.addEventListener("click", clearScreens)


// keyboard

let searchDisplay = "";

keyA.addEventListener("click", () => {
  let outputChar = keyA.value
    searchDisplay += outputChar;
    console.log(searchDisplay)
    textOutput.textContent = searchDisplay;
})

function deleteCharacter() {
  if (textOutput.textContent !== "") {
    let string = textOutput.textContent
  let stringArray = string.split("");
  stringArray.pop();
  let searchDisplay = stringArray.join("")
  textOutput.textContent = searchDisplay;
  }
}
backSpace.addEventListener("click", deleteCharacter);


