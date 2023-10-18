// console.log("Hello World")
// alert("Notifikasi")
// prompt("notif apa hayo")

// var Promnet = "Coding is easy"
// console.log(Promnet)
// var Promnet = "pi boonk"
// console.log(Promnet)

// let Promnet = "Coding is easy"
// console.log(Promnet)
// let Promnet = "pi boonk"
// console.log(Promnet)

// const Promnet = "Coding is easy"
// console.log(Promnet)
// const Promnet = "pi boonk"
// console.log(Promnet)

// let totalPoin = prompt("Masukan Poin Anda")
//     if(totalPoin > 100){
//         document.write("<h1>Congratulation</h1>");
//     }
//     else{
//         document.write("<h1>Thank You yah</h1>");
//     }

//CHALLENGE NYA YANG TADI!!!
// // Definisikan variabel x dan y
// let x = 6;
// let y = 3;

// if (x < 10 && y > 1) {
//   console.log("a = true");
// } else {
//   console.log("a = false");
// }

// if (x < 10 && y < 1) {
//   console.log("b = true");
// } else {
//   console.log("b = false");
// }

// if (x == 5 || y == 5) {
//   console.log("c = true");
// } else {
//   console.log("c = false");
// }

// if (x == 6 || y == 5) {
//   console.log("d = true");
// } else {
//   console.log("d = false");
// }

// if (!(x == y)) {
//   console.log("e = true");
// } else {
//   console.log("e = false");
// }

// let x = 6;
// let y = 3;

// console.log(x<10 && y > 1)
// console.log(x<10 && y < 1) 
// console.log(x==5||y==5) 
// console.log(x==6||y==5) 
// !(x==y);


// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
// })

document.addEventListener("DOMContentLoaded", function () {
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const label = document.createElement("label");
        label.textContent = taskText;
        const removeButton = document.createElement("button");
        removeButton.textContent = "x";

        listItem.appendChild(checkbox);
        listItem.appendChild(label);
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        listItem.style.display = "flex";
        listItem.style.margin = "10px 0";
        checkbox.style.marginRight = "30px";
        removeButton.style.marginLeft = "30px";

        taskInput.value = "";

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                label.style.fontWeight = "bold";
            } else {
                label.style.fontWeight = "normal";
            }
        });

        removeButton.addEventListener("click", function () {
            taskList.removeChild(listItem);
        });
    });
});