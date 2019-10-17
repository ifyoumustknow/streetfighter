

window.onload = function () {
    $("#winner").css('display', 'none');
    $("#loser").css('display', 'none');
    $("#charselect").css('display', 'none');
    $("#controls").css('display', 'none');
    $('#playagain').css('display', 'none');



    $(document).on('click', '#playagain', function () {

        $("#winner").css('display', 'none');
        $("#loser").css('display', 'none');
        $("#logo").css('display', 'none');
        $("#start").css('display', 'none');
        $('#P1-fighter').empty();
        $('#cpu-fighter').empty();
        $("#playagain").css('display', 'none');
        $("#charselect").css('display', 'inline-block');
    });

    $(document).on('click', '#start', function () {
        $("#logo").css('display', 'none');
        $("#start").css('display', 'none');
        $("#playagain").css('display', 'none');
        $("#charselect").css('display', 'inline-block');

    });



    $(document).on('click', '#ryu', function () {
        $("#controls").css('display', 'inline-block');
        $("#charselect").css('display', 'none');
        $("#player1").empty();
        $("#player1").append('<img src="assets/right-ryu-portrait.gif" class="p-thumbnails"/>');
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

    $(document).on('click', '#chung', function () {
        $("#controls").css('display', 'inline-block');
        $("#charselect").css('display', 'none');
        $("#player1").empty();
        $("#player1").append('<img src="assets/right-chun-portrait.gif" class="p-thumbnails"/>');


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
    $(document).on('click', '#zang', function () {
        $("#controls").css('display', 'inline-block');
        $("#charselect").css('display', 'none');
        $("#player1").empty();
        $("#player1").append('<img src="assets/right-zangief-portrait.gif" class="p-thumbnails"/>')

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
    $(document).on('click', '#honda', function () {
        $("#controls").css('display', 'inline-block');
        $("#charselect").css('display', 'none');
        $("#player1").empty();
        $("#player1").append('<img src="assets/right-honda-portrait.gif" class="p-thumbnails"/>');
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
        $("#attacks").empty();
        $("#attacks").append('<img src="assets/punch.png" , class="max20"/>');
        var punch = Math.floor((Math.random() * 10) + 1);
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
        var counterattack = Math.floor((Math.random() * 30) + 1);
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
        $("#attacks").empty();
        $("#attacks").append('<img src="assets/punch.png" class="max20"/>');
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
        checkPlayerScore()


    });
    $(document).on('click', '#special', function () {
        $("#attacks").empty();
        $("#attacks").append('<img src="assets/punch.png" class="max20"/>');
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
            $("#controls").css('display', 'none');
            $("#attacks").empty();
            $("#winner").css('display', 'none');
            $("#loser").css('display', 'inline-block');
            $('#playagain').css('display', 'inline-block');



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
            $("#controls").css('display', 'none');
            $("#attacks").empty();
            $("#winner").css('display', 'inline-block');
            $("#loser").css('display', 'none');
            $('#playagain').css('display', 'inline-block');



        } else {

        };
    }

}




