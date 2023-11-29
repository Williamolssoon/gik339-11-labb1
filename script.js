const checkbox = document.getElementById("divStyle");
console.log(checkbox);

const textfields = document.getElementsByClassName("textfield");
console.log(textfields);

const button = document.querySelector("#button");
console.log(button);

const divs = document.getElementById("divId");
console.log(divs);




//textfields.forEach((field) => field.addEventListener("blur", handleBlur));

textfields[1].addEventListener("blur", handleBlur);

checkbox.addEventListener("change", function(){
  divs.style.backgroundColor = textfields[0].value;
});

// button.addEventListener("click", handleClick);

function handleBlur(e) {
    console.log("handleBlur, eventobjekt:", e);
    const name = e.target.name;
    const value = e.target.value;
  
    
    divs.innerHTML = value;

  }

function handleClick(e) {
  console.log("hej")
  // const name = e.target.name;
  // const value = textfields.value;

  // if(name == "color"){
  //   divs.style.backgroundColor = value;
  // }
}

  