// Rover Object Goes Here
// ======================
var travelLog = [this.x + this.y];
var rover = {
  direction : "N",
  x : 0,
  y : 0,


  facing: function() {
    console.log('Rover facing ' + this.direction);},
  position: function() {
    console.log('Rover coordinates [' + this.x + ', ' + this.y + ']');},
  history: function() {
    for (var i = 0; i < this.travelLog.length; i++) {
      console.log('RoverLOG [' + this.travelLog[i][0] + ', ' + this.travelLog[i][1] + ']');}
  }
};

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(this.rover.direction) {
    case 'N':
      this.rover.direction = 'W';
        break;
    case 'W':
      this.rover.direction = 'S';
        break;
    case 'S':
      this.rover.direction = 'E';
        break;
    case 'E':
      this.rover.direction = 'N';
        break;
    default:
    console.log('Alert: Weird direction: Initializing self destruction!');
    }
  this.rover.facing();
}
function turnRight(rover){
  console.log("turnRight was called!");
  switch(this.rover.direction){
    case 'N':
      this.rover.direction = 'E';
        break;
    case 'W':
      this.rover.direction = 'N';
        break;
    case 'S':
      this.rover.direction = 'W';
        break;
    case 'E':
      this.rover.direction = 'S';
        break;
    default:
    console.log('Alert: Weird direction: Initializing self destruction!');
    }
  this.rover.facing();
}
function moveForward(rover) {
  console.log("moveForward was called");
    if (this.rover.direction === "E"){
      this.rover.x = this.rover.x + 1;}
    else if (this.rover.direction === "S"){
      this.rover.y = this.rover.y + 1;}
    else if (this.rover.direction === "N"){
      this.rover.y = this.rover.y - 1;}
    else if (this.rover.direction === "W"){
      this.rover.x = this.rover.x - 1;}
    else {
        console.log("Choose: North, South, East, West?");
      }
      console.log(this.rover.x, this.rover.y);
}
function followPath(path) {
  for (var i = 0; i < path.length; i++) {
    this.rover.travelLog.push([rover.x,rover.y]);
    switch(path.charAt(i)) {
      case 'r':
        turnRight();
        break;
      case 'l':
        turnLeft();
        break;
      case 'f':
        moveForward();
        break;
      default:
        console.log(path.charAt(i));
        }
    }
    travelLog.push();
}
