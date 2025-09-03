


//let title=document.getElementById("title");
//let button=document.getElementById("btn")
//button.addEventListener("click",function() {
    //document.body.style.backgroundColor="green"



//-------random color---------

    // نجيب الزر
//let bouton = document.getElementById("btn");

// Fonction تولد لون عشوائي
//function getRandomColor() {
  //let lettres = "0123456789ABCDEF";
  //let couleur = "#";
  //for (let i = 0; i < 6; i++) {
    //couleur += lettres[Math.floor(Math.random() * 16)];
  //}
  //return couleur;
//}

// كي نكليكي على الزر
//bouton.addEventListener("click", function() {
  //document.body.style.backgroundColor = getRandomColor();
//});


//------------------- rgb color      -------------------------------------

   // let button=document.getElementById("btn");

   // function getRandomNumber(){
        
       // return Math.floor(Math.random()*256);
    //}


    //button.addEventListener("click",function(){

       // let r=getRandomNumber(255,0,0);
        //let g=getRandomNumber(0,255,0);
        //let b=getRandomNumber(0,0,255);
    
    
    
    
        //document.body.style.backgroundColor=`rgb(${0},${0},${255})`;
    //});



//----appendchild------

    //function addParagraph(){
        //let para =document.createElement("p");
        //para.innerHTML="successfull add";
        //document.getElementById("p").appendChild(para);
    //}


    //function showMessage() {
        
        //let oldMsg = document.getElementById("msg");
       // if (oldMsg) {
         // oldMsg.remove();
        //}
    
        
        //let para = document.createElement("p");
        //para.id = "msg";
        //para.innerHTML = "تمت الإضافة بنجاح";
        //para.style.color = "pink("; 
        //para.style.fontWeight = "bold";  
        //document.getElementById("app").appendChild(para);

    //setTimeout(() => {
      //para.remove();
    //}, 3000);
 // }



//function showMessage() {
    //let p=document.createElement("app");
    //p.innerHTML="welcome in js"
    //document.getElementById("box").appendChild(p);
//}







//function changeText(){
    //let h1=document.getElementById("title")
    //h1.innerHTML="good job";
    //h1.style.color="brown";
//}


let form = document.getElementById("userForm");
    let usersList = document.getElementById("usersList");

    window.onload = function() {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.forEach(u => addUserToDOM(u));
    };

    
    form.addEventListener("submit", function(e){
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();

      if(name === "" || email === "") {
        alert("put values ✏️");
        return;
      }

      let user = {name, email};

      addUserToDOM(user);
      saveUser(user);

      form.reset();
    });

    
    function addUserToDOM(user) {
      let div = document.createElement("div");
      div.classList.add("user");
      div.innerHTML = `<b>${user.name}</b> <b>${user.email}</b>` ;
      usersList.appendChild(div);
    }

    
    function saveUser(user) {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
    }


