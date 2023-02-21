var likes1= 9
var likes2= 12
var likes3= 9
function addLike1(){
  var newLike1 = document.querySelector("#like-Counter1")
  likes1++
  newLike1.innerText = likes1 + " Like(s)"
}

function addLike2(){
  var newLike2 = document.querySelector("#like-Counter2")
  likes2++
  newLike2.innerText = likes2 + " Like(s)"

}

function addLike3(){
  var newLike3 = document.querySelector("#like-Counter3")
  likes3++
  newLike3.innerText = likes3 + " Like(s)"
}