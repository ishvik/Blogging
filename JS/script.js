let signup = document.querySelector("#signup");
let write = document.querySelector("#write");
let body = document.querySelector("body");
let signupbtn = document.querySelector("#id02");
let jumpLogin = document.querySelector("#log");
let loginbtn = document.querySelector("#id01");
let signupform = document.querySelector("#signupform");
let editorBtn = document.querySelector(".editor");
let googleSignupBtn = document.querySelector(".g-signin2");
let home = document.querySelector(".content");
let mainHome = document.querySelector(".main-container");
let editor = document.querySelector(".main-container-editor");
let backBtn = document.querySelector("#back");
let signback = document.querySelector("#sign");
let publishBtn = document.querySelector("#publishBtn");
let loaderBtn = document.querySelector(".loader-div");
let loader = document.querySelector(".loader");
let extra = document.querySelector(".extra");
let heading = document.querySelector(".heading-blog");
let category = document.querySelector(".category");
let blogText = document.querySelector(".input");

// signup and login
// let flag = false;
write.addEventListener("click", function () {
  mainHome.style.display = "none";
  editor.style.display = "block";
});

write.addEventListener("click", (e) => {
  e.preventDefault();

  backBtn.addEventListener("click", function () {
    editor.style.display = "none";
    mainHome.style.display = "block";
    editorBtn.style.display = "none";
  });
});

let output = document.querySelector(".input");
let buttons = document.getElementsByClassName("menu-icon");
let fonts = document.getElementById("font-size");
let p;
for (let btn of buttons) {
  btn.addEventListener("click", () => {
    let cmd = btn.dataset["command"];
    if (cmd == "createlink") {
      let url = prompt("Enter the link here: ", "http://");
      document.execCommand(cmd, false, url);
    } else {
      document.execCommand(cmd, false, null);
    }
  });
}

publishBtn.addEventListener("click", function () {
  if (blogText.innerText == "") {
    alert("Please write something to publish....!");
    return;
  }

  loaderBtn.style.display = "block";
  loader.style.display = "block";
  setTimeout(() => {
    editor.style.display = "none";
    mainHome.style.display = "block";
  }, 2000);
});

let coding = document.querySelector("#coding");
let food = document.querySelector("#food");
let travel = document.querySelector("#travel");
let beauty = document.querySelector("#beauty");
let mainHead = document.querySelector(".heading");

let codingblogs = [
  {
    Name: "Java Constructor",
    topictext: "This is a blog on java constructor",
    author: "~ Simran",
    text: `In this Java tutorial, we are going to discuss everything that you must know about a Constructor in Java. Constructor in Java is a block of code that creates an object. We can also call it an Object Builder.They are similar to methods in Java but they differ from methods in the fact that they do not have a return type like methods.
    
    In this article, we will learn what a constructor is, the need for constructors, its types, and the rules for writing constructors in Java. We will also cover some other topics like Constructor Overloading and Constructor Chaining.
    
    We will also see how the methods are different from the constructors in Java. A Constructor is a member function which has the same name as its class and is used to initialize the object of that class type with the legal initial value.”

    A constructor is a member function of a class that is called for initializing objects when we create an object of that class. It is a special type of method that instantiates a newly created object and just after the memory allocation of this object takes place, the constructor is called.`,
  },
];

let travelblogs = [
  {
    Name: "Travel Blog1",
    text: "I love travelling.... read this blog to know my journey",
    author: " ~ Komal",
  },
];

let foodblogs = [
  {
    Name: "Burger",
    text: "My yummy experience of burgers on various places",
    author: "~ Harshit",
  },
  {
    Name: "Chilli Potato",
    text: "Let's see whats happens when I ate chilli potato first time",
    author: "~ Sushmita Ray",
  },
];

coding.addEventListener("click", function () {
  coding.classList.add("select");
  food.classList.remove("select");
  travel.classList.remove("select");
  beauty.classList.remove("select");
  home.innerHTML = "";
  home.innerHTML = `<div class="all-articles">
    <div class="article" id="art-1">
        <h2>${codingblogs[0].Name}</h2>
        <div class="para-text"><p>${codingblogs[0].topictext}</p></div>
        <h3>${codingblogs[0].author}</h3>
    </div> </div>-->`;
  let art = document.querySelector(".article");
  art.addEventListener("click", function () {
    let div = document.createElement("div");
    div.classList.add("bigBlog");
    div.innerHTML = `<div class="blogtext">
            ${codingblogs[0].text}
            </div>`;
    home.appendChild(div);
  });
});

food.addEventListener("click", function () {
  food.classList.add("select");
  coding.classList.remove("select");
  travel.classList.remove("select");
  beauty.classList.remove("select");
  home.innerHTML = "";
  home.innerHTML = `<div class="all-articles">
    <div class="article" id="art-1">
        <h2>${foodblogs[0].Name}</h2>
        <div class="para-text"><p>${foodblogs[0].text}</p></div>
        <h3>${foodblogs[0].author}</h3>
    </div> -->
    <div class="article" id="art-2">
        <h2>${foodblogs[1].Name}</h2>
        <div class="para-text"><p>${foodblogs[0].text}</p></div>
        <h3>${foodblogs[0].author}</h3>
    </div>

</div>`;
});

travel.addEventListener("click", function () {
  travel.classList.add("select");
  food.classList.remove("select");
  coding.classList.remove("select");
  beauty.classList.remove("select");
  home.innerHTML = "";
  home.innerHTML = `<div class="all-articles">
    <div class="article" id="art-1">
        <h2>${travelblogs[0].Name}</h2>
        <div class="para-text"><p>${foodblogs[0].text} </p></div>
        <h3>${foodblogs[0].author}</h3>
    </div> -->
</div>`;
});

beauty.addEventListener("click", function () {
  beauty.classList.add("select");
  food.classList.remove("select");
  travel.classList.remove("select");
  coding.classList.remove("select");
  home.innerHTML = "";
  home.innerHTML = `<div class="all-articles">
    <div class="article" id="art-1">
        <h2></h2>
        <div class="para-text"><p>About linear</p></div>
        <h3>~ Simran</h3>
    </div> -->

</div>`;
});

mainHead.addEventListener("click", function () {
  beauty.classList.remove("select");
  food.classList.remove("select");
  travel.classList.remove("select");
  coding.classList.remove("select");
  let str = `The first thing you learn when you’re blogging is that people are one click away from leaving
    you. So you’ve got to get to the point, you can’t waste people’s time, you’ve got to give them
    some value for their limited attention span`;
  let auth = "~ Alex Tabarrok";
  home.innerHTML = `<div class="image-content">
    <div class="left-side"><img src="../Images/coding.jpg"></div>
    <div class="right-side">
        <div class="image"><img src="../Images/travel.jpg"></div>
        <div class="image"><img src="../Images/food.jpg"></div>
    </div>
</div>
<div class="quotes">
    "${str}
    <br><br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ${auth};
</div>`;
});
