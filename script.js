// Canvas en context ophalen
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Instellingen voor tekenen
let tekenen = false;
let vorigeX = 0;
let vorigeY = 0;

// Functie om te beginnen met tekenen
function startTekenen(event) {
  tekenen = true;
  [vorigeX, vorigeY] = getMuisPositie(event);
}

// Functie om te stoppen met tekenen
function stopTekenen() {
  tekenen = false;
}

// Functie om te tekenen terwijl de muis beweegt
function teken(event) {
  if (!tekenen) return;

  const [x, y] = getMuisPositie(event);

  ctx.strokeStyle = "black";      // kleur
  ctx.lineWidth = 3;              // lijndikte
  ctx.lineCap = "round";          // ronde uiteinden

  ctx.beginPath();
  ctx.moveTo(vorigeX, vorigeY);
  ctx.lineTo(x, y);
  ctx.stroke();

  vorigeX = x;
  vorigeY = y;
}

// Hulpfunctie: muispositie binnen het canvas
function getMuisPositie(event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  return [x, y];
}

// Event listeners
canvas.addEventListener("mousedown", startTekenen);
canvas.addEventListener("mouseup", stopTekenen);
canvas.addEventListener("mouseleave", stopTekenen);
canvas.addEventListener("mousemove", teken);
