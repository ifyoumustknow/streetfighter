

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
        $("#progressbar").progressbar({
            value: 30
        });
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();


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
        $("#progressbar").progressbar({
            value: 20
        });
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();


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
        $("#progressbar").progressbar({
            value: 10
        });
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();


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
        $("#progressbar").progressbar({
            value: 25
        });
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();



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
            $("#progressbar2").progressbar({
                value: 30
            });

        } else if (cpuChoiceHTMLString.includes("honda")) {
            $("#cpuhealth").empty();
            $("#cpuhealth").append(175);
            $("#progressbar2").progressbar({
                value: 25
            });

        } else if (cpuChoiceHTMLString.includes("zang")) {
            $("#cpuhealth").empty();
            $("#cpuhealth").append(190);
            $("#progressbar2").progressbar({
                value: 10
            });

        } else {
            (cpuChoiceHTMLString.includes("chung"))
            $("#cpuhealth").empty();
            $("#cpuhealth").append(180);
            $("#progressbar2").progressbar({
                value: 20
            });
        }

    }
    // function to calculate random attack points to "Special" "Kick" "Punch" buttons//
    $(document).on('click', '#punch', function () {
        begin()
        $("#title").empty();
        $("#title").append('<img src="assets/punch.png"/>');
        var punch = Math.floor((Math.random() * 10) + 10);
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
        var counterattack = Math.floor((Math.random() * 10) + 10);
        console.log(counterattack);
        $("#p1-damage").empty();
        $("#p1-damage").append("COUNTER " + counterattack);
        var p1result = parseInt(p1status) - parseInt(counterattack);
        console.log(p1result);
        $("#p1health").empty();
        $("#p1health").append(p1result);
        $("#btnSubmit").attr("disabled", true);
        checkPlayerScore()



    });
    $(document).on('click', '#kick', function () {
        begin()
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
    $(document).on('click', '#special', function () {
        begin()
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
        $("#btnSubmit").attr("disabled", true);
        checkPlayerScore()

    });



    function begin() {
        document.getElementById('zang').style.filter = "brightness(60%)";
        document.getElementById('ryu').style.filter = "brightness(60%)";
        document.getElementById('chung').style.filter = "brightness(60%)";
        document.getElementById('honda').style.filter = "brightness(60%)";


    }

    function checkPlayerScore() {
        var playerhealth = parseInt(p1health.innerHTML);
        var computerhealth = parseInt(cpuhealth.innerHTML);
        var playerwins = parseInt(p1wins.innerHTML);
        var playerlosses = parseInt(p1losses.innerHTML);
        var computerwins = parseInt(cpuwins.innerHTML);
        var computerlosses = parseInt(cpulosses.innerHTML);

        if (playerhealth < 1) {
            playerlosses++;
            $('#p1losses').html(playerlosses);
            computerwins++;
            $('#cpuwins').html(playerlosses);
            $('#p1health').empty();
            $('#p1health').append("Loser");
            $('#cpuhealth').empty();
            $('#cpuhealth').append("Winner");
            $('#P1-fighter').empty();
            $("#title").empty();
            $("#title").append('<img src="assets/lose.png"/>');
            $("#start").append('<img src="assets/start.png"/>');


        } else if (computerhealth < 1) {
            computerlosses++;
            $('#cpulosses').html(computerlosses);
            playerwins++;
            $('#p1wins').html(playerwins);
            $('#p1health').empty();
            $('#p1health').append("Winner");
            $('#cpuhealth').empty();
            $('#cpuhealth').append("Loser");
            $('#cpu-fighter').empty();
            $("#title").empty();
            $("#title").append('<img src="assets/win.png"/>');
            $("#start").append('<img src="assets/start.png"/>');


        } else {
            document.getElementById('start').style.display = 'inline';
        }

    }



    // function to play again or restart//

    // BONUS function to track health points using health bar ///

    // let cpuhealth = document.getElementById("cpuhealth")
    // health.value -= 10; //Or whatever you want to do with it.

    // let p1health = document.getElementById("p1health")
    // health.value -= 10; //Or whatever you want to do with it.
}