document.addEventListener('DOMContentLoaded', () => {
  const userInput = document.getElementById('text-input');
  const checkPalindromeBtn = document.getElementById('check-btn');
  const resultDiv = document.getElementById('result');

  const checkForPalindrome = input => {
    const originalInput = input; // Store the original input for output

    if (input === '') {
      alert('Please input a value');
      return;
    }

    // Remove any previous result
    resultDiv.innerHTML = '';

    // Normalize the input by removing non-alphanumeric characters and converting to lowercase
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    // Check if the string is a palindrome
    const isPalindrome = lowerCaseStr === [...lowerCaseStr].reverse().join('');

    // Create the result message
    const resultMsg = `<strong>${originalInput}</strong> ${isPalindrome ? 'is' : 'is not'} a palindrome.`;

    // Display the result
    resultDiv.innerHTML = resultMsg;
    resultDiv.classList.remove('hidden');
  };

  // Event listener for button click
  checkPalindromeBtn.addEventListener('click', () => {
    checkForPalindrome(userInput.value);
    userInput.value = ''; // Clear the input field after checking
  });

  // Event listener for pressing "Enter" in the input field
  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkForPalindrome(userInput.value);
      userInput.value = ''; // Clear the input field after checking
    }
  });
});