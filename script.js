const player1 = {name: "Player 1", victories: 0, draws: 0, defeats: 0, points: 0};
const player2 = {name: "Player 2", victories: 0, draws: 0, defeats: 0, points: 0};
const players = [player1, player2];
showPlayers(players);
function calculatePoints(player) {
  const points = (player.victories * 5) + (player.draws * 2) - (player.defeats * 3);
  return points;
}

function showPlayers(players) {
  let element = "";
  for (var i = 0; i < players.length; i += 1) {
    element += "<tr><td>" + players[i].name + "</td>";
    element += "<td>" + players[i].victories + "</td>";
    element += "<td>" + players[i].draws + "</td>";
    element += "<td>" + players[i].defeats + "</td>";
    element += "<td>" + players[i].points + "</td>";
    element += "<td><button onClick='addVictory(" + i + ")'>Victory</button></td>";
    element += "<td><button onClick='addDraw(" + i + ")'>Draw</button></td>";
    element += "<td><button onClick='addDefeat(" + i + ")'>Defeat</button></td>";
    element += "</tr>";
  }
  const tablePlayers = document.getElementById("tablePlayers");
  tablePlayers.innerHTML = element;
}

function addVictory(i) {
  const player = players[i];
  player.victories += 1;
  player.points = calculatePoints(player);
  showPlayers(players);
}

function addDraw(i) {
  const player = players[i];
  player.draws += 1;
  player.points = calculatePoints(player);
  showPlayers(players);
}

function addDefeat(i) {
  const player = players[i];
  player.defeats += 1;
  player.points = calculatePoints(player);
  showPlayers(players);
}

function setPlayerNumber() {
  const numberPlayers = document.getElementById("numberPlayers")
  const players = [];
  for (var i = 0; i < numberPlayers; i += 1) {
    const j = {name: `Player${i}`, victories: 0, draws: 0, defeats: 0, points: 0};
    players.push(j);
    j.points = calculatePoints(j);
  }
  showPlayers(players);
}