// EXERCICE 1

// 1.1

let container = document.createElement("div");
document.body.appendChild(container);

let h1 = document.createElement("h1"); //h1 generation
container.appendChild(h1); //put the h1 in the body
h1.textContent = "Cinéma Le Dauphin"; //add text to h1

let p = document.createElement("p"); //generation of the paragraph p
container.appendChild(p); //put the p in the body
p.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi)." //add text to the p

let btnLook = document.createElement("input"); //button generation
container.appendChild(btnLook); //put the button in the bodysuit
btnLook.type = "button"; //assigned him his type
btnLook.value = "Voir les films à l’affiche cette semaine" //add text to the button


btnLook.addEventListener("click", voir, false);

function voir() {
  container.hidden = true
  container2.hidden = false
}

// 1.2

let array = [
  ["titre du film", "realisateur", "nationalité", "année", "durée", "version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ?", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
]; //Initiating an array

// 1.3

let container2 = document.createElement("div");
container2.hidden = true;
document.body.appendChild(container2);

function arraydisplay(array) {

  let i = 0; //Variable intermédiaire utilisée pour l’énumération
  let j; //Intermediate variable used for enumeration
  let currentElmt; //Intermediate variable used during sequential processing
  let currentElmt2; //Intermediate variable used during sequential processing
  let table; //generated a table
  let tbody; //generated a tbody
  let tr; //generated a tr
  let td; //generated a tb


  table = document.createElement("table"); //creation of the table
  container2.appendChild(table); //set the table in the body

  tbody = document.createElement("tbody"); //creation of the tbody
  table.appendChild(tbody); //set the tbody in the table


  while (i < array.length) { //Condition of continuation
    currentElmt = array[i];
    let tr = document.createElement("tr"); //generated a tr

    j = 0;

    while (j < currentElmt.length) { //Condition of continuation
      currentElmt2 = currentElmt[j]; //Recovery of the current element
      let td = document.createElement("td"); //generated a tr
      td.textContent = currentElmt[j];
      tr.appendChild(td); //put the td in the tr
      j++
    }
    tbody.appendChild(tr)
    i++
  }
  return array
}
arraydisplay(array);


// EXERCICE 2

let array2 = [
  ["SUBSTANCES", "Température de fusion ou solidification en °C", "Température d’ébullition en °C"],
  ["acide acétique", "17", "118"],
  ["acide nitrique", "-41", "86"],
  ["acide sulfurique", "10 290"],
  ["alcool éthylique", "-114 78"],
  ["aluminium", "660 2450"]
];

function substances(name) {

  let i = 0;
  let currentElmt;
  let select = [];

  while (i < array.length) {
    currentElmt = array[i];
    i++;
    if (currentElmt[0] === substances) {
      select.push(currentElmt);
    }
  }

  return select
}
