'use strict';

// TODO: assign `catButton` a value by selecting the button labeled `Make Cat` from the DOM

const catButton = document.getElementById('make-cat');

catButton.addEventListener('click', function(){

  // TODO: assign `newCat a value by creating a new list item DOM element

  const newCat = document.createElement('img');

  // TODO: assign the list item's text to be 'Cat' or the name of a cat you know.

  newCat.src = '/Img/co.jpg';

  const cats = document.getElementById('cats');

  cats.appendChild(newCat);
});

const dogButton = document.getElementById('make-dog');
dogButton.addEventListener('click', function () {
  const newDog = document.createElement('img');
  newDog.src = '/Img/do.jpg';

  // TODO: assign `dogs` a value by selecting the second unordered list by its id
 
 const dogs = document.getElementById('dogs');

  // TODO: append the newly created list item to the dogs list

  dogs.appendChild(newDog);
});

const sheepButton = document.getElementById('make-sheep');
sheepButton.addEventListener('click', handleMakingSheep);

// TODO: add an event listener to the sheepButton that calls `handleMakingSheep` when clicked

function handleMakingSheep(){

  // TODO: make a new list item, assign its text content to `Sheep` or the name of a sheep you know, and append it to the third unordered list.

  const newSheep = document.createElement('img');
  newSheep.src = '/Img/so.jpg';

  const sheep = document.getElementById('sheeps')

  sheep.appendChild(newSheep)

}

const horseButton = document.getElementById('make-horse');

// TODO: create an event listener for the `Make Horse` Button that calls a function named `handleMakingHorse`

horseButton.addEventListener('click', handleMakingHorse);

// TODO: write a function called `handleMakingHorse that makes a new list item, assigns its text content to `Horse` or the name of a horse you know, and append it to the fourth unordered list.

function handleMakingHorse(){
    const newHorse = document.createElement('img')
    newHorse.src = '/Img/hu.jpg'

    const horse = document.getElementById('horses')

    horse.appendChild(newHorse)
}