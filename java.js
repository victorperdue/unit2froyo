function countFlavors() {
  const inputFlavors = prompt("Please list your favorite froyo flavors and seperate them with a comma:");
  
  if (inputFlavors) {
    const flavorsArray = inputFlavors.split(',');
    const flavorCount = countFroyoFlavors(flavorsArray);
    console.table(flavorCount);
  } else {
    console.log("Please Try again, with commas.");
  }
}

function countFroyoFlavors(flavors) {
  const flavorCount = {};

  for (let i = 0; i < flavors.length; i++) {
    const flavor = flavors[i].trim();
    if (flavor !== '') {
      if (flavorCount[flavor]) {
        flavorCount[flavor]++;
      } else {
        flavorCount[flavor] = 1;
      }
    }
  }

  return flavorCount;
}

countFlavors();