function sample(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generatePassword(textOptions) {
  //define things user might want
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  //create a collection to store things store user pick up
  let collection = [];

  if (textOptions.lowercase === "on") {
    collection = collection.concat(lowerCaseLetters.split(""));
  }

  if (textOptions.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }

  if (textOptions.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }

  if (textOptions.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  //remove things user do not need
  if (textOptions.excludeCharacters) {
    console.log(`exclude Characters: ${textOptions.excludeCharacters}`);
    collection = collection.filter((word) => {
      if (textOptions.excludeCharacters.includes(word) === true) {
        return false;
      } else {
        return true;
      }
    });
  }
  //start generating password

  let password = "";
  for (i = 1; i <= Number(textOptions.length); i++) {
    password += sample(collection);
  }

  //return password
  return password;
}

module.exports = generatePassword;
