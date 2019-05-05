var matrix = [];

var h = 40;
var w = 40;

for (var y = 0; y < h; y++) {
    matrix[y] = [];
    for (var x = 0; x < w; x++) {
        if( x== 20 || x== 21 || y== 19 || y== 20 ){
            matrix[y][x] = 4;
        }
        else{
            matrix[y][x] = Math.round(Math.random() * 3);
        }
        
    }
}
/*var matrix = [[0, 0, 1, 0, 0],
[1, 0, 0, 0, 0],
[0, 1, 0, 0, 0],
[0, 0, 1, 0, 0],
[1, 1, 0, 2, 0],
[1, 1, 0, 0, 0],
[1, 1, 0, 0, 3]
];*/

var side = 20;
var cauntGrass = 10;
var grassArr = [];
var grassEaterArr = [];
var gelArr = [];
var patArr = [];

function setup() {
    frameRate(10);
    createCanvas(w * side, h * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var eater = new GrassEater(x, y, 2);
                grassEaterArr.push(eater);
            }
            else if (matrix[y][x] == 3) {
                var gel = new Gel(x, y, 3);
                gelArr.push(gel);
            }

            else if (matrix[y][x] == 4) {
                var pat = new Pat(x, y, 4);
                patArr.push(pat);
            }
        }
    }

}


function draw() {

    for (var i in grassArr) {
        var obj = grassArr[i];
        obj.mul();
    }
    for (var i in grassEaterArr) {
        var obj = grassEaterArr[i];
        obj.eat();
    }
    for (var i in gelArr) {
        var obj = gelArr[i];
        //obj.move();
        obj.eat();    
    }
    for (var i in patArr) {
        var obj = patArr[i];
        console.log(obj);
        obj.xotavelacnel();    
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("lightblue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }

        }
    }
}
