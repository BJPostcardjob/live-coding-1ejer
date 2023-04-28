function bigWords(str, arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > str.length) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }
  function printArray(arr) {
    const ul = document.getElementById("myList");
  
    for (let i = 0; i < arr.length; i++) {
      const li = document.createElement("li");
      li.innerText = arr[i];
      ul.appendChild(li);
    }
  }


const button = document.getElementById("button");
button.addEventListener("click", handleClick);


function handleClick() {

  const input = document.getElementById("input").value;
  const words = ["insecto", "bootcamp", "mangos", "reptil", "mosca", "escritorio", "computadora", "libro", "manzana", "perro"];


  const bigWordsArr = bigWords(input, words);
  printArray(bigWordsArr);
}
