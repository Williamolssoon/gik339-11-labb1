const checkbox = document.getElementById("divStyle");

const textfields = document.querySelectorAll(".textfield");

const button = document.querySelector("#button");

const divRuta = document.getElementById("divId");

textfields.forEach((field) => field.addEventListener("blur", handleBlur));

checkbox.addEventListener("change", function(){
  divRuta.style.backgroundColor = textfields[0].value;
});

button.addEventListener("click", function(){ 
  divRuta.remove();
});

function handleBlur(e) {
  const name = e.target.name;
  const value = e.target.value;
    
  console.log(name);
  
    if(name == "content"){
      divRuta.innerHTML = value;
    }
  }

  