let name = prompt();
if (name >= 55 && name <= 99){
    console.log("Число в діапазоні");
}
else{
    console.log("Число не в діапазоні");
}
let mak = 55;
if(mak >= 0 && mak <= 16){
    console.log("Діти");
}
else if(mak >= 17 && mak <= 60){
    console.log("Дорослі");
}
else if(mak >= 60 && mak <= 100){
    console.log("пенсіонери");
}
let your_name = prompt("Name");
let your_surname = prompt("Surname");
if(your_name.length > 4 && your_surname.length > 5){
    console.log(your_name.length + your_surname.length);
}
else{
    console.log("УПС");
}
rand = Math.floor(Math.random() * 6);
if(rand == 0){
    console.log(rand);
}
else if(rand == 1){
    console.log(rand);
}
else if(rand == 2){
    console.log(rand);
}
else if(rand = 3){
    console.log(rand);
}
else if(rand == 4){
    console.log(rand);
}
else if(rand == 5){
    console.log(rand);
}
let lang = prompt("en, fr, ru, ua?");
switch (lang){
    case "en":
    console.log("January");
    break;
    case "ua":
    console.log("Січень");
    break;
    case "ru":
    console.log("Январь");
    break;
    case "fr":
    console.log("Janvier");
    break;
}