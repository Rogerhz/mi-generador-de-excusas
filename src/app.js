/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  // declarar listas con partes de excusas
  let who = ["The dog", "My gmarand", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  // escoger de cada lista un elemento aleatoreo
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];
  // una vez tengamos todas las partes, pegamos todo en la cadena
  // let excuse =
  //   randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
  // let excuse1 = randomWho.concat(
  //   " ",
  //   randomAction,
  //   " ",
  //   randomWhat,
  //   " ",
  //   randomWhen
  // );
  let excuses = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`; // !!!mejor metodo!!!!
  // imprimir la excusa
  document.querySelector("#excuses").innerHTML = excuses;
};
