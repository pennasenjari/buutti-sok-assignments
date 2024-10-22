// Global variables
const emailInput = document.getElementById('emailInput');
const addButton = document.getElementById('addButton');
const emailList = document.getElementById('emailList');
const feedback = document.getElementById('feedback');

function validateEmail(email) {
  const domain = email.split('@')[1];
  if(email.includes('@') && domain.includes('.')) {
    return true;
  } 
  return false;
}

function main() {

  addButton.addEventListener('click',() => {
    const email = emailInput.value;
    if (validateEmail(email)) {
      const li = document.createElement('li');
      li.innerHTML = email;
      emailList.appendChild(li);
      feedback.innerHTML = '';
      emailInput.value = '';
    } else {
      feedback.innerHTML = 'Invalid email address';
    } 
  });

  emailInput.addEventListener('click',() => {
    feedback.innerHTML = '';
  });

  // submit when enter pressed
  emailInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('addButton').click();
    }
  });
}
main();