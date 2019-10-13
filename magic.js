// var ryuHealth = 170;
// var zangHealth = 190;
// var hondaHealth = 180;
// var chungHealth = 180;


window.onload = function () {
    $("#start").on("click", start)
    $("#ryu").on("click", function () {
        console.log("test");
        // document.getElementById("P1-fighter").innerHTML = '<img src="assets/ryu_right.png"';
        $("#choose").empty();
        $("#title").empty();
        $("#p1health").empty();
        $("#p1health").append(170);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/ryu_right.png" class="c-characters"/>');
        document.getElementById("p1healthbar").style.width = '70%';
        cpuSelect();

    });
    $("#chung").on("click", function () {
        console.log("test");
        // document.getElementById("P1-fighter").innerHTML = '<img src="assets/ryu_right.png"';
        $("#choose").empty();
        $("#title").empty();
        $("#p1health").empty();
        $("#p1health").append(180);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/chun_right.png" class="c-characters"/>');
        document.getElementById("p1healthbar").style.width = '80%';
        cpuSelect();

    });
    $("#zang").on("click", function () {
        console.log("test");
        // document.getElementById("P1-fighter").innerHTML = '<img src="assets/ryu_right.png"';
        $("#choose").empty();
        $("#title").empty();
        $("#p1health").empty();
        $("#p1health").append(190);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/zang_right.png" class="c-characters"/>');
        document.getElementById("p1healthbar").style.width = '90%';
        cpuSelect();


    });
    $("#honda").on("click", function () {
        console.log("test");
        // document.getElementById("P1-fighter").innerHTML = '<img src="assets/ryu_right.png"';
        $("#choose").empty();
        $("#title").empty();
        $("#p1health").empty();
        $("#p1health").append(175);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/Honda_right.png" class="c-characters"/>');
        document.getElementById("p1healthbar").style.width = '75%';
        cpuSelect();
        cpuHealth();

    });

    function cpuSelect() {

        var cpuFighters = [
            { name: 'chun', image: `src="assets/chun_left.png" , class="p-characters"` },
            { name: 'honda', image: `src="assets/honda_left.png" , class="p-characters" ` },
            { name: 'zang', image: `src="assets/zang_left.png", class= "p-characters"` },
            { name: 'ryu', image: `src="assets/ryu_left.png", class= "p-characters"` }
        ];
        var cpuChoice = cpuFighters[Math.floor(Math.random() * cpuFighters.length)];
        console.log(cpuChoice)

        var cpuChoiceHTMLString = `<img ${cpuChoice.image} name=${cpuFighters.name} />`
        document.getElementById('cpu-fighter').innerHTML = cpuChoiceHTMLString;


    }

    function cpuHealth() {
        var cpuSelect

        if (cpuSelect === "ryu") {
            document.getElementById("cpuhealth").style.width = '70%';

        } else if (cpuSelect === "honda") {
            document.getElementById("cpuhealth").style.width = '75%';

        } else if (cpuSelect === "zang") {
            document.getElementById("cpuhealth").style.width = '90%';

        } else {
            (cpuSelect === "chung")
            document.getElementById("cpuhealth").style.width = '80%';
        }
    }

};

function start() {
    document.getElementById('logo').style.display = 'none';
    document.getElementById('start').style.display = 'none';
    document.getElementById('choose').style.display = 'inline';

}



//computer random choose character function// **in progress**



//   

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
