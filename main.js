// // // > Sur base de l'html fourni :

// // // # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.

// var list = document.getElementsByTagName('li');
// for (var i = 0; i < list.length; i++) {
//   list[i].addEventListener('click', sayMyName);
// }
// function sayMyName() {
//   alert(this.innerHTML);
// }


// // // # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)

// let list = document.getElementsByTagName('li');
// for (var i = 0; i < list.length; i++) {
//     list[i].addEventListener('dblclick', changeMyName);
//   }
//   function changeMyName() {
//     var newName = prompt('New name?');
//     this.innerHTML = newName;
//   }


// // // # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser

let list = document.querySelectorAll('li');
document.querySelectorAll("input")[2].addEventListener('click',()=>{
    let input = document.getElementById("li-one").value;
    let input2 = document.getElementById("li-two").value;

    li.forEach(element=>{
        if(element.innerText == input){
            element.innerText = input2;  
        } else if (element.innerText == input2){
            element.innerText = input;
        }
    })
})










// > Sur base de l'html fourni :

// # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.
const listItems = document.getElementsByTagName('li');
function sayMyName(li){
    alert(li.innerText);
}

// for(let i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener("click", () =>{
//         sayMyName(listItems[i]);
//     });
// }

// # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)
function modifyMyName(li){
    return prompt('Entrez un nom');
}

for(let i = 0; i < listItems.length; i++){
    listItems[i].addEventListener("dblclick", () =>{
        listItems[i].innerText = modifyMyName(listItems[i]);
    });
}

// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser
const button = document.getElementsByTagName('input')[2];
button.addEventListener('click', ()=>{
    let li1 = document.getElementById('li-one');
    let li2 = document.getElementById('li-two');
    for(let i=0; i < listItems.length; i++){
        if(li1.value == listItems[i].innerText){
            listItems[i].innerText = li2.value;
        } else if(li2.value == listItems[i].innerText){
            listItems[i].innerText = li1.value;
        }
    }
})








// // Test 2

//       function reverseItems() {
//         var item1 = document.getElementById("item1");
//         var item2 = document.getElementById("item2");
//         var parent = item1.parentNode;

//         parent.insertBefore(item2, item1);
//       }
