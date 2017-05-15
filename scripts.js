
var arrayDie = new Array();


var Die = function () {
    this.value = 0;
    this.div = document.createElement('div');
    this.div.className = "dieLook";
    this.roll();
    this.div.addEventListener("click", this.roll.bind(this));
    this.div.addEventListener("dblclick", this.removeDie.bind(this));

    var dieContainer = document.getElementById("die-container");
    document.body.appendChild(dieContainer);
    dieContainer.appendChild(this.div);


};
Die.prototype.roll = function() {
    var divNumber = Math.floor(Math.random( ) * 6) + 1;
    this.value = divNumber;
    this.div.innerHTML = divNumber;
};
Die.prototype.removeDie = function() {
    this.div.remove(); //removes div from DOM
    var foundAt = arrayDie.indexOf(this);
    if (foundAt !== -1) { //if we found die Object
        arrayDie.splice(foundAt, 1);
    }
};

document.addEventListener('DOMContentLoaded',function() {
     document.getElementById('oneDie').addEventListener('click', addDie);
        function addDie() {
            arrayDie.push(new Die());  
        };
    document.getElementById("rollPress").addEventListener('click', rollPress);
        function rollPress() {
            for (var i = 0; i < arrayDie.length; i++) {
            arrayDie[i].roll();
        };
    };
    document.getElementById("sum").addEventListener('click', sum);
        function sum() {
            var total = 0;
            for (var i = 0; i < arrayDie.length; i++) {
                total += arrayDie[i].value;
        };
    alert('This sum of all dice is ' + total + '!  Roll Again!');
    };
});




