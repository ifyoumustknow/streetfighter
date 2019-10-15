

window.onload = function () {

    var start = $("#start").on("click", function () {
        document.getElementById('logo').style.display = 'none';
        document.getElementById('start').style.display = 'none';
        document.getElementById('choose').style.display = 'inline';
    });

    $("#ryu").on("click", function () {
        console.log("test");
        $("#choose").empty();
        $("#title").empty();
        $("#title").append('<img src="assets/begin.png"/>');
        $("#p1health").empty();
        $("#p1health").append(170);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/ryu_right.png" class="c-characters"/>');
        document.getElementById("p1healthbar").style.width = '70%';
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();
        begin();

    });

    $("#chung").on("click", function () {
        console.log("test");
        $("#choose").empty();
        $("#title").empty();
        $("#title").append('<img src="assets/begin.png"/>');
        $("#p1health").empty();
        $("#p1health").append(180);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/chun_right.png" class="c-characters"/>');
        document.getElementById("p1healthbar").style.width = '80%';
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();
        begin();

    });
    $("#zang").on("click", function () {
        console.log("test");
        $("#choose").empty();
        $("#title").empty();
        $("#title").append('<img src="assets/begin.png"/>');
        $("#p1health").empty();
        $("#p1health").append(190);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/zang_right.png" class="c-characters"/>');
        document.getElementById("p1healthbar").style.width = '90%';
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();
        begin();

    });
    $("#honda").on("click", function () {
        console.log("test");
        $("#choose").empty();
        $("#title").empty()
        $("#title").append('<img src="assets/begin.png"/>');
        $("#p1health").empty();
        $("#p1health").append(175);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/honda_right2.png" class="c-characters"/>');
        document.getElementById("p1healthbar").style.width = '75%';
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();
        begin();


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
        console.log(cpuChoiceHTMLString)


        if (cpuChoiceHTMLString.includes("ryu")) {
            $("#cpuhealth").empty();
            $("#cpuhealth").append(170);
            document.getElementById("cpuhealthbar").style.width = '70%';

        } else if (cpuChoiceHTMLString.includes("honda")) {
            $("#cpuhealth").empty();
            $("#cpuhealth").append(175);
            document.getElementById("cpuhealthbar").style.width = '75%';

        } else if (cpuChoiceHTMLString.includes("zang")) {
            $("#cpuhealth").empty();
            $("#cpuhealth").append(190);
            document.getElementById("cpuhealthbar").style.width = '90%';

        } else {
            (cpuChoiceHTMLString.includes("chung"))
            $("#cpuhealth").empty();
            $("#cpuhealth").append(180);
            document.getElementById("cpuhealthbar").style.width = '80%';
        }

    }
    // function to calculate random attack points to "Special" "Kick" "Punch" buttons//

    $("#punch").on("click", function () {
        $("#title").empty();
        $("#title").append('<img src="assets/punch.png"/>');
        var punch = Math.floor((Math.random() * 20) + 10);
        console.log(punch);
        $("#cpu-damage").empty();
        $("#cpu-damage").append("ATTACK " + punch);
        var status = $("#cpuhealth").text();
        console.log(status);
        var result = parseInt(status) - parseInt(punch);
        console.log(result);
        $("#cpuhealth").empty();
        $("#cpuhealth").append(result);

        var p1status = $("#p1health").text();
        console.log(p1status);
        var counterattack = Math.floor((Math.random() * 20) + 10);
        console.log(counterattack);
        $("#p1-damage").empty();
        $("#p1-damage").append("COUNTER " + counterattack);
        var p1result = parseInt(p1status) - parseInt(counterattack);
        console.log(p1result);
        $("#p1health").empty();
        $("#p1health").append(p1result);

        checkPlayerScore()



    });

    $("#kick").on("click", function () {
        $("#title").empty();
        $("#title").append('<img src="assets/kick.png"/>');
        var kick = Math.floor((Math.random() * 20) + 10);
        var status = $("#cpuhealth").text();
        console.log(status);
        $("#cpu-damage").empty();
        $("#cpu-damage").append("ATTACK " + kick);
        var result = parseInt(status) - parseInt(kick);
        console.log(result);
        $("#cpuhealth").empty();
        $("#cpuhealth").append(result);

        var p1status = $("#p1health").text();
        console.log(p1status);
        var counterattack = Math.floor((Math.random() * 20) + 10);
        console.log(counterattack);
        $("#p1-damage").empty();
        $("#p1-damage").append("COUNTER " + counterattack);
        var p1result = parseInt(p1status) - parseInt(counterattack);
        console.log(p1result);
        $("#p1health").empty();
        $("#p1health").append(p1result);

        checkPlayerScore()


    });

    $("#special").on("click", function () {
        $("#title").empty();
        $("#title").append('<img src="assets/special.png"/>');
        var special = Math.floor((Math.random() * 30) + 1);
        console.log(special);
        var cpustatus = $("#cpuhealth").text();
        console.log(cpustatus);
        $("#cpu-damage").empty();
        $("#cpu-damage").append("ATTACK " + special);
        var result = parseInt(cpustatus) - parseInt(special);
        console.log(result);
        $("#cpuhealth").empty();
        $("#cpuhealth").append(result).get(0);

        var p1status = $("#p1health").text();
        console.log(p1status);
        var counterattack = Math.floor((Math.random() * 30) + 1);
        console.log(counterattack);
        $("#p1-damage").empty();
        $("#p1-damage").append("COUNTER " + counterattack);
        var p1result = parseInt(p1status) - parseInt(counterattack);
        console.log(p1result);
        $("#p1health").empty();
        $("#p1health").append(p1result);

        checkPlayerScore()

    });

    // function score() {
    //     var p1wins = ("p1wins");
    //     var p1losses = ("p1looses");
    //     var cpuwins = ("cpuwins");
    //     var cpulosses = ("cpulooses");

    //     var p1health = ("p1health");
    //     var cpuhealth = ("cpuhealth");


    //     if (p1health < 1 && cpuhealth < 0);
    //     $("#start").append("YOU WIN");
    //     (p1wins).append(+ 1);
    //     (cpulosses).append(+ 1);

    //     if (p1health < 0 && cpuhealth < 1);
    //     $("#start").append("YOU Loose");

    //     (cpuwins).append(+ 1);
    //     (p1losses).append(+ 1);

    // }

    // function to disable thumbnails//

    function begin() {
        document.getElementById('zang').style.filter = "brightness(60%)";
        document.getElementById('ryu').style.filter = "brightness(60%)";
        document.getElementById('chung').style.filter = "brightness(60%)";
        document.getElementById('honda').style.filter = "brightness(60%)";


    }

    function checkPlayerScore() {
        var playerhealth = parseInt(p1health.innerHTML);
        var computerhealth = parseInt(cpuhealth.innerHTML);
        var playerwins = document.getElementById("p1wins").innerHTML;
        var playerlosses = document.getElementById("p1losses").innerHTML;
        var computerwins = document.getElementById("cpuwins").innerHTML;
        var computerlosses = document.getElementById("cpulosses").innerHTML;

        if (playerhealth > computerhealth) {
            playerwins++;
            computerlosses++;

        } else if (playerhealth < computerhealth) {
            computerwins++;
            playerlosses++;
        }
    }




    // function to play again or restart//

    // BONUS function to track health points using health bar ///

    // let cpuhealth = document.getElementById("cpuhealth")
    // health.value -= 10; //Or whatever you want to do with it.

    // let p1health = document.getElementById("p1health")
    // health.value -= 10; //Or whatever you want to do with it.
}