function sample(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function generatePassword(options) {
  //define things user might want
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  //create a collection to store things store user pick up
  let collection = [];

  if (options.lowercase === "on") {
    collection = collection.concat(lowerCaseLetters.split(""));
  }

  if (options.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }

  if (options.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }

  if (options.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  //remove things user do not need
  if (options.excludeCharacters) {
    console.log(`exclude Characters: ${options.excludeCharacters}`);
    collection = collection.filter((word) => {
      if (options.excludeCharacters.includes(word) === true) {
        return false;
      } else {
        return true;
      }
    });
  }
  //start generating password

  let password = "";
  for (i = 1; i <= Number(options.length); i++) {
    password += sample(collection);
  }

  //return password
  return password;
}

module.exports = generatePassword;
