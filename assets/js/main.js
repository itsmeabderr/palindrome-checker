const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  const regex = /[^a-zA-Z0-9]+/g;
  const cleanStr = str.replace(regex, "").toLowerCase();
  const newStr = cleanStr.split("").reverse().join("").toLowerCase();
  return cleanStr === newStr;
};

const displayResult = (par) => {
  if (par) {
    result.textContent = `${userInput?.value} is a palindrome`;
    if (result.hasAttribute("class")) {
      result.removeAttribute("class");
    }
    result.classList.add("valid");
  } else {
    result.textContent = `${userInput?.value} is not a palindrome`;
    result.classList.add("not-valid");
  }
};

checkButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!userInput.value) {
    alert("Please input a value");
    result.innerText = "";
  } else {
    const userStr = userInput?.value;
    const isStrPalindrome = isPalindrome(userStr);
    displayResult(isStrPalindrome);
  }
});
