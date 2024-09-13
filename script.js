document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('text-input');
  const checkPalindromeBtn = document.getElementById('check-palindrome');
  const resultDiv = document.getElementById('result');

  // Function to check for palindrome
  const checkForPalindrome = input => {
    const originalInput = input;

    if (input === '') {
      alert('Please input a value');
      return;
    }

    // Clear the previous result
    resultDiv.innerHTML = '';

    // Normalize input (remove non-alphanumeric and make lowercase)
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    // Check if the input is a palindrome
    const isPalindrome = lowerCaseStr === [...lowerCaseStr].reverse().join('');

    // Create a new paragraph element to display the result
    let resultMsg = `<strong>${originalInput}</strong> ${
      isPalindrome ? 'is' : 'is not'
    } a palindrome.`;

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;

    // Append the result paragraph to the resultDiv
    resultDiv.appendChild(pTag);

    // Ensure the result is visible (remove hidden class if any)
    resultDiv.classList.remove('hidden');
  };

  // Event listener for the button click
  checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userInput.value); // Pass the input value to the check function
    userInput.value = ''; // Clear the input field after checking
  });

  // Event listener for the "Enter" key press
  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkForPalindrome(userInput.value); // Check palindrome on Enter
      userInput.value = ''; // Clear the input field after checking
    }
  });
});