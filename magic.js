

window.onload = function () {

    $("#start").on("click", function () {
        document.getElementById('logo').style.display = 'none';
        document.getElementById('start').style.display = 'none';
        document.getElementById('choose').style.display = 'block';
        document.getElementById('charselect').style.display = 'block';
    });

    $("#playagain").on("click", function () {

        $("#playagain").empty();
        $("#P1-fighter").empty();
        $("#cpu-fighter").empty();
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        $("#title").empty();
        location.reload(true);


    });

    $("#ryu").on("click", function () {
        document.getElementById('controls').style.display = 'inline';
        $("#charselect").empty();
        $("#player1").empty();
        $("#player1").append('<img src="assets/right-ryu-portrait.gif" class="p-thumbnails"/>');
        $("#choose").empty();

        $("#p1health").empty();
        $("#p1health").append(70);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/ryu_right.png" class="c-characters"/>');
        $("#progressbar").progressbar({
            value: 70
        });
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();


    });

    $("#chung").on("click", function () {
        document.getElementById('controls').style.display = 'inline';
        $("#charselect").empty();;
        $("#player1").empty();
        $("#player1").append('<img src="assets/right-chun-portrait.gif" class="p-thumbnails"/>');
        $("#choose").empty();

        $("#p1health").empty();
        $("#p1health").append(80);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/chun_right.png" class="c-characters"/>');
        $("#progressbar").progressbar({
            value: 80
        });
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();


    });
    $("#zang").on("click", function () {
        document.getElementById('controls').style.display = 'inline';
        $("#charselect").empty();
        $("#player1").empty();
        $("#player1").append('<img src="assets/right-zangief-portrait.gif" class="p-thumbnails"/>');
        $("#choose").empty();

        $("#p1health").empty();
        $("#p1health").append(90);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/zang_right.png" class="c-characters"/>');
        $("#progressbar").progressbar({
            value: 90
        });
        $("#cpu-damage").empty();
        $("#p1-damage").empty();
        cpuSelect();


    });
    $("#honda").on("click", function () {
        document.getElementById('controls').style.display = 'inline';
        $("#charselect").empty();
        $("#player1").empty();
        $("#player1").append('<img src="assets/right-honda-portrait.gif" class="p-thumbnails"/>');
        $("#choose").empty();

        $("#p1health").empty();
        $("#p1health").append(75);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/honda_right2.png" class="c-characters"/>');
        $("#progressbar").progressbar({
            value: 75
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
            $("#cpuhealth").append(70);
            $("#progressbar2").progressbar({
                value: 70
            });

        } else if (cpuChoiceHTMLString.includes("honda")) {
            $("#cpuhealth").empty();
            $("#cpuhealth").append(75);
            $("#progressbar2").progressbar({
                value: 75
            });

        } else if (cpuChoiceHTMLString.includes("zang")) {
            $("#cpuhealth").empty();
            $("#cpuhealth").append(90);
            $("#progressbar2").progressbar({
                value: 90
            });

        } else {
            (cpuChoiceHTMLString.includes("chung"))
            $("#cpuhealth").empty();
            $("#cpuhealth").append(80);
            $("#progressbar2").progressbar({
                value: 80
            });
        }

    }
    // function to calculate random attack points to "Special" "Kick" "Punch" buttons//
    $(document).on('click', '#punch', function () {

        $("#title").empty();
        $("#title").append('<img src="assets/punch.png"/>');
        var punch = Math.floor((Math.random() * 10) + 10);
        console.log(punch);
        $("#cpu-damage").empty();
        $("#cpu-damage").append("ATTACK " + punch);
        var cpustatus = $("#cpuhealth").text();
        console.log(cpustatus);
        var result = parseInt(cpustatus) - parseInt(punch);
        console.log(result);
        $("#cpuhealth").empty();
        $("#cpuhealth").append(result);
        $("#progressbar2").progressbar({
            value: (cpustatus - punch)
        });

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
        $("#progressbar").progressbar({
            value: (result - counterattack)
        });
        checkPlayerScore()



    });
    $(document).on('click', '#kick', function () {

        $("#title").empty();
        $("#title").append('<img src="assets/kick.png"/>');
        var kick = Math.floor((Math.random() * 20) + 10);
        var cpustatus = $("#cpuhealth").text();
        console.log(cpustatus);
        $("#cpu-damage").empty();
        $("#cpu-damage").append("ATTACK " + kick);
        var result = parseInt(cpustatus) - parseInt(kick);
        console.log(result);
        $("#cpuhealth").empty();
        $("#cpuhealth").append(result);
        $("#progressbar2").progressbar({
            value: (cpustatus - kick)
        });

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
        $("#progressbar").progressbar({
            value: (p1status - counterattack)
        });
        checkPlayerScore()


    });
    $(document).on('click', '#special', function () {

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
        $("#progressbar2").progressbar({
            value: (cpustatus - special)
        });

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
        $("#progressbar").progressbar({
            value: (p1status - counterattack)
        });
        $("#btnSubmit").attr("disabled", true);
        checkPlayerScore()

    });


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
            $("#cpu-damage").empty();
            $("#p1-damage").empty();
            $("#controls").empty();
            $("#progressbar").empty();

            $("#title").empty();
            $("#title").append('<img src="assets/lose.png"/>');
            $("#playagain").append('<img src="assets/playagain.png"/>');



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
            $("#cpu-damage").empty();
            $("#p1-damage").empty();
            $("#cpu-damage").empty();
            $("#p1-damage").empty();
            $("#controls").empty();
            $("#title").empty();
            $("#title").append('<img src="assets/win.png"/>');
            $("#playagain").append('<img src="assets/playagain.png"/>');




        } else {


        }

    }



    // function to play again or restart//

    // BONUS function to track health points using health bar ///

    // let cpuhealth = document.getElementById("cpuhealth")
    // health.value -= 10; //Or whatever you want to do with it.

    // let p1health = document.getElementById("p1health")
    // health.value -= 10; //Or whatever you want to do with it.
}