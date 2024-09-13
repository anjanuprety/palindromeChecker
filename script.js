const userInput= document.getElementById('text-input');
const checkPalindromeButton= document.getElementById('check-palindrome');
const result= document.getElementById('result');

const checkPalindrome = input =>{
  const userInput=input; //Keeping the input for later output
}

if(input==="" || input===" "){
  alert("Please enter a value ");
}
//removing previous value
result.replaceChildren();

const lowerCaseStr= input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
let resultMsg= `<strong>${userInput}</strong> ${ lowerCaseStr=== [...lowerCaseStr].reverse().join('')? 'is': 'is not'} a palindrome.`

const pTag= document.createElement(`p`);
pTag.className= 'user-input';
pTag.innerHTML= 'resultMsg'
result.appendChild(pTag);

//show the result back on
result.classList.remove('hidden');

checkPalindromeButton.addEventListener('click',()=>{
  checkPalindrome(input.value);
  input.value="";
});

input.addEventListener('keydown', e=>{
  if(e.key==='Enter'){
    checkPalindrome(input.value);
    input.value=''
  }
})