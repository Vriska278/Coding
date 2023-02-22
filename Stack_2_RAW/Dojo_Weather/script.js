function alertMe(){
  alert("Loading weather report...")
}

function tempChange(){
  var tempValue = document.getElementById("temp-select").value;
  temp1= document.querySelector("#temp1")
  temp2= document.querySelector("#temp2")
  temp3= document.querySelector("#temp3")
  temp4= document.querySelector("#temp4")
  temp5= document.querySelector("#temp5")
  temp6= document.querySelector("#temp6")
  temp7= document.querySelector("#temp7")
  temp8= document.querySelector("#temp8")

  if(tempValue == "Farenheight"){
    temp1.innerText = "75°"
    temp2.innerText = "65°"
    temp3.innerText = "80°"
    temp4.innerText = "66°"
    temp5.innerText = "69°"
    temp6.innerText = "61°"
    temp7.innerText = "78°"
    temp8.innerText = "70°"
  }
  else if(tempValue == "Celcius"){
    temp1.innerText = "24°"
    temp2.innerText = "18°"
    temp3.innerText = "27°"
    temp4.innerText = "19°"
    temp5.innerText = "21°"
    temp6.innerText = "16°"
    temp7.innerText = "26°"
    temp8.innerText = "21°"
  }
}

function deleteMe(){
  var remove = document.querySelector(".cookie-message")
  remove.remove();
}