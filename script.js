const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-={}[]|;:"<>,.?/';

const generatePassword = () => {
  const length = document.getElementById('length').value;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;
  
  let characters = lowercaseLetters;
  
  if (includeUppercase) {
    characters += uppercaseLetters;
  }
  
  if (includeNumbers) {
    characters += numbers;
  }
  
  if (includeSymbols) {
    characters += symbols;
  }
  
  let password = '';
  
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  document.getElementById('password').value = password;
};

document.getElementById('generate').addEventListener('click', generatePassword);
