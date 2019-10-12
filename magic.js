// var ryuHealth = 120;
// var zangHealth = 100;
// var hondaHealth = 150;
// var chungHealth = 180;
// var characters = []

function start() {
    document.getElementById('logo').style.display = 'none';
    document.getElementById('start').style.display = 'none';
    document.getElementById('choose').style.display = 'inline';

}

window.onload = function () {
    // $("#start").on("click", start)
    $("#ryu").on("click", function () {
        console.log("test");
        // document.getElementById("P1-fighter").innerHTML = '<img src="assets/ryu_right.png"';
        $("#choose").empty();
        $("#title").empty();
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/ryu_right.png" class="c-characters"/>');
    });
    $("#chung").on("click", function () {
        console.log("test");
        // document.getElementById("P1-fighter").innerHTML = '<img src="assets/ryu_right.png"';
        $("#choose").empty();
        $("#title").empty();
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/chun_right.gif" class="c-characters"/>');
    });
    $("#zang").on("click", function () {
        console.log("test");
        // document.getElementById("P1-fighter").innerHTML = '<img src="assets/ryu_right.png"';
        $("#choose").empty();
        $("#title").empty();
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/zang_right.png" class="c-characters"/>');
    });
    $("#honda").on("click", function () {
        console.log("test");
        // document.getElementById("P1-fighter").innerHTML = '<img src="assets/ryu_right.png"';
        $("#choose").empty();
        $("#title").empty();
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/Honda_right.png" class="c-characters"/>');
    });
};



//computer random choose character function// **in progress**

// function cpuSelect() {
//     var cpuFighters = [
//         { name: 'chun'(<img src="assets/ryu_right.png" class="c-characters" />) },
//         { name: 'honda'(<img src="assets/ryu_right.png" class="c-characters" />) },
//         { name: 'zang'(<img src="assets/ryu_right.png" class="c-characters" />) }
//         { name: 'ryu'(<img src="assets/ryu_right.png" class="c-characters" />) }
//     ];

//     for (var i = 0; i < cpuFighters.length; i += 1) {
//         $("#P1-fighter").append('<img src=>');

//     }
// }

/*

for (let i = 0; i < cpufighters.length; i++) {
    const image = cpufighters[i].image;
            $("#test-image" + i + 1).attr("src", image);
        }

        */

        // function to simply above and remove previous player// **in progress**

        // function to calculate random attack points to "Special" "Kick" "Punch" buttons//

        // function to calculate randon counter attack points to "Special" "Kick" "Punch" buttons//

        // function to display attack and counter attack points//


        // function to play again//

        // BONUS function to track health points using health bar ///

        // let cpuhealth = document.getElementById("cpuhealth")
        // health.value -= 10; //Or whatever you want to do with it.

        // let p1health = document.getElementById("p1health")
        // health.value -= 10; //Or whatever you want to do with it.
