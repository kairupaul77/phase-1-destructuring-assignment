// Strings

const farmAnimals = 'cow horse sheep pig chicken';

// 1. Use destructuring to declare five animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
console.log("Animal sounds:", moo, neigh, baa, oink, cluck);
// Output: "cow", "horse", "sheep", "pig", "chicken"

// 2. Use destructuring to declare the four traditional animal names
const [bessie, , dolly, babe, little] = farmAnimals.split(' '); // Skipping "horse"
console.log("Four animal names:", bessie, dolly, babe, little);
// Output: "cow", "sheep", "pig", "chicken"

// 3. Use destructuring to declare the three traditional animal colors
const [blackAndWhite, , black, pink] = farmAnimals.split(' '); // Skipping horse again
console.log("Three animal colors:", blackAndWhite, black, pink);
// Output: "cow", "sheep", "pig"

// Arrays

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 4. Use destructuring to declare the seven traditional rainbow color variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;
console.log("Rainbow colors:", red, orange, yellow, green, blue, indigo, violet);
// Output: "red", "orange", "yellow", "green", "blue", "indigo", "violet"

// 5. Use destructuring to declare six rainbow color variables using initials
const [r, o, y, g, b, , v] = colors;  // Skipping indigo and only declaring initials
console.log("Rainbow color initials:", r, o, y, g, b, v);
// Output: "red", "orange", "yellow", "green", "blue", "violet"

// 6. Use destructuring to declare Indigo using indg
const [, , , , , indg] = colors;  // Only destructuring indigo
console.log("Indigo:", indg);
// Output: "indigo"

// Objects

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

// 7. Use destructuring to assign all appropriate variables using the keys as the variable names
const { muppetName, color: muppetColor, song, job, partner } = muppet;
console.log("Muppet details:", muppetName, muppetColor, song, job, partner);
// Output: "Miss Piggy", "pink", "Never Before, Never Again", "Cast member of The Muppet Show", "Kermit"

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const { album: { theMuppetMovie: { song2, song4 } }, nestedJob, nestedPartner } = nestedMuppet;
console.log("Muppet songs and job details:", song2, song4, nestedJob, nestedPartner);
// Output: "Moving Right Along", "I Hope That Something Better Comes Along", "Host of The Muppet Show", "Miss Piggy"
