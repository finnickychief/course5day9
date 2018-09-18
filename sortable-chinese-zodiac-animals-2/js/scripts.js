// Grab the container
const app = document.querySelector('#app');
// Prepare the Audio object
const sound = new Audio();

// Declare the array for the JSON that will be loaded
let arry = [];

// Object to keep track of which column was sorted last, and in which order
let sortObj = {
  col: 'eng',
  order: 'ASC'
};

/*
  loadJSON Function:
  Parm 1: file path of the json file
  Return: No return
  Description: Load the JSON for our animals, and rebuild the DOM using renderAll after it has been retrieved.
*/
function loadJSON(fileUrl) {
  // Declare our xhr object
  const xhr = new XMLHttpRequest();
  // Set up the callback for our successful request
  xhr.onload = function() {
    // Parse the JSON
    arry = JSON.parse(xhr.responseText);
    console.log(arry);
    renderAll(arry);
  };
  // Open the request
  xhr.open('GET', fileUrl, true);
  // Send the request
  xhr.send();
}

/*
  renderAll Function:
  Parm 1: object array that holds the data for our items
  Return: No return
  Description: Clear and build the application based on the information provided in our JSON file. 
*/
function renderAll(arr) {
  app.innerHTML = ''; // Clear div of existing content

  // Loop through the array provided and build out the cards for the animals
  for (let i = 0; i < arr.length; i++) {
    // let currentCard = new ZodiacCard(
    //   arr[i].eng,
    //   arr[i].chi,
    //   arr[i].pin,
    //   arr[i].year
    // );
    let currentCard = new ZodiacCard(arr[i]);

    app.appendChild(currentCard.generateElement());
  } // End for-loop
}

/*
  playSound Function:
  Parms: No explicit params, but event will be used
  Return: No return
  Description: Play sound for the animal that was clicked on 
*/
function playSound() {
  // Set the src
  sound.src = `audio/${event.target.name}.mp3`;
  // Play the sound
  sound.play();
}

/*
  sortByKey Function:
  Parm 1: key to sort our object array on
  Return: No return
  Description: Sort the array based on a key, and rebuild the DOM afterwards.
*/
function sortByKey(key) {
  if (sortObj['col'] === key) {
    // If the key is the same as the last time a sort happened, Flip order
    sortObj['order'] = sortObj['order'] === 'ASC' ? 'DESC' : 'ASC';
    // if (sortObj['order'] === 'ASC') {
    //   sortObj['order'] = 'DESC';
    // } else {
    //   sortObj['order'] = 'ASC';
    // }
  } else {
    // Else, sort asc
    sortObj['col'] = key;
    sortObj['order'] = 'ASC';
  }

  arry.sort((a, b) => {
    if (sortObj['order'] === 'ASC') {
      return a[key] > b[key] ? 1 : -1; // Sort asc
    } else {
      return a[key] < b[key] ? 1 : -1; // Sort desc
    }
  });
  console.log(sortObj);
  renderAll(arry);
}

/*
    Current steps:
      Create a div <--- THIS will be the element you generate with your class
      Create animal image
      Create chinese character image
      Create sound Icon
      Add english/pinyin names
      Generate year list

    Information tied to each card:
      eng, chi, pin, year

      method to build out the HTML element that represents the card
*/

class ZodiacCard {
  constructor(animalInfo) {
    this.eng = animalInfo.eng;
    this.chi = animalInfo.chi;
    this.pin = animalInfo.pin;
    this.year = animalInfo.year;
  }

  generateAnimalImage() {
    // Add animal image
    let pic = new Image();
    pic.src = `images/${this.eng}.jpg`;
    pic.className = 'pic';
    pic.style.cssText = 'width:100px;';
    return pic;
  }
  generateChiImage() {
    // Add chinese character image
    let char = new Image();
    char.src = `images/char-${this.chi}.jpg`;
    char.className = 'pic';
    return char;
  }

  generateSoundIcon() {
    // Add sound icon plus playSound functionality
    let icon = new Image();
    icon.src = 'images/sound-icon.png';
    icon.className = 'pic';
    icon.style.cssText = 'width: 50px; cursor: pointer; padding-bottom: 15px;';
    icon.addEventListener('click', playSound);
    icon.name = this.eng; // Make the english name available for our playSound function
    return icon;
  }

  generateText() {
    let span = document.createElement('span');
    span.className = 'spanny';

    // Add english and pinyin names, each in its own span.
    span.innerHTML = `<span class="en">${this.eng}</span>`;
    span.innerHTML += `<span class="pn">${this.pin}</span>`;

    // Generate year list for each animal
    let startYear = this.year - 360; // 30 12-year cycles into past
    let endYear = this.year + 180; // 15 12-year cycles into future
    let years = ''; // Declare the string to store the years

    // Create list in increments of 12
    for (let j = startYear; j <= endYear; j += 12) {
      if (j === this.year) {
        // Highlight the last year the cycle hit this animal
        years += `<span style="color: red; font-weight: bold">${j}</span> `;
      } else {
        years += `${j} `;
      }
    }
    span.innerHTML += years; // Output the year list

    return span;
  }

  // Generate an HTML element using the information provided.
  generateElement() {
    // Build the card container
    let divo = document.createElement('div');
    divo.className = 'divvy';

    divo.appendChild(this.generateAnimalImage());
    divo.appendChild(this.generateChiImage());
    divo.appendChild(this.generateSoundIcon());
    divo.appendChild(this.generateText());

    return divo;
  }
}

// This event listener waits for all DOM content to fully load before running the javascript within the callback. So after everything in the HTML, CSS and JS is loaded it will run.
document.addEventListener('DOMContentLoaded', function() {
  loadJSON('json/animals.json');
});
