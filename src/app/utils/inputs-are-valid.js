const inputsAreValid = (inputs) => {
    // every renvoie TRUE si TOUTES les entrées du tableaux respectent la condition 
  return inputs.every(num => typeof num === "number" && !isNaN(num));
};
