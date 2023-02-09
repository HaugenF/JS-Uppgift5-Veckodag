const date = new Date();
const day = date.getDay();
const veckoText = document.getElementById("textArea");
let message;

// VECKODAGAR

const mandag = "Måndag, ingen höjdare. Men kör på, bara resten av veckan kvar nu!";
const tisdag = "Tisdag alltså... Du klarade måndagen, så tisdag blir väl inga problem?";
const onsdag = "Lill-lördag! Ja, onsdag alltså... Kör på så är det snart helg!";
const torsdag = "Torsdag idag, imorgon är det fredag! Känner du lukten av helg?";
const fredag = "Äntligen fredag, om några timmar tar vi helg!";
const lordag = "Njut! Nu är det lördag och du kan ta det hur lugnt som helst!";
const sondag = "Åh nej, söndag redan! Ja ja, lägg dig i tid för imorgon är det jobb igen!";

function dayMessage(weekDay) {
  let message;
  switch (weekDay) {
    case 0:
      message = sondag;
      break;
    case 1:
      message = mandag;
      break;
    case 2:
      message = tisdag;
      break;
    case 3:
      message = onsdag;
      break;
    case 4:
      message = torsdag;
      break;
    case 5:
      message = fredag;
      break;
    case 6:
      message = lordag;
      break;
    default:
      message = "Ops, något blev fel";
  }
  veckoText.innerHTML = "// " + message + " //";
  console.log(message);
}

dayMessage(day);
