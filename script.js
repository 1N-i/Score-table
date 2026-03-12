var player1 = {name: "Player 1", victories: 0, draws: 0, defeats: 0, points: 0};
var player2 = {name: "Player 2", victories: 0, draws: 0, defeats: 0, points: 0};
var player3 = {name: "Player 3", victories: 0, draws: 0, defeats: 0, points: 0};
var player4 = {name: "Player 4", victories: 0, draws: 0, defeats: 0, points: 0};
var player5 = {name: "Player 5", victories: 0, draws: 0, defeats: 0, points: 0};

function calculatePoints(player) {
  var points = (player.victories * 5) + (player.draws * 2) - (player.defeats * 3);
  return points;
}

player1.points = calculatePoints(player1);
player2.points = calculatePoints(player2);
player3.points = calculatePoints(player3);
player4.points = calculatePoints(player4);
player5.points = calculatePoints(player5);

var players = [player1, player2, player3, player4, player5];

function showPlayers(players) {
  var element = "";
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
  var tablePlayers = document.getElementById("tablePlayers");
  tablePlayers.innerHTML = element;
}

showPlayers(players);

function addVictory(i) {
  var player = players[i];
  player.victories += 1;
  player.points = calculatePoints(player);
  showPlayers(players);
}

function addDraw(i) {
  var player = players[i];
  player.draws += 1;
  player.points = calculatePoints(player);
  showPlayers(players);
}

function addDefeat(i) {
  var player = players[i];
  player.defeats += 1;
  player.points = calculatePoints(player);
  showPlayers(players);
}