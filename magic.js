


window.onload = function () {
    $("#start").on("click", start)

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
        $("#p").attr("disabled", true)
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
        $("#p").attr("disabled", true)
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
        var punch = Math.floor((Math.random() * 20) + 10);
        console.log(punch);
        var status = $("#cpuhealth").text();
        console.log(status);
        var result = parseInt(status) - parseInt(punch);
        console.log(result);
        $("#cpuhealth").empty();
        $("#cpuhealth").append(result);

        var p1status = $("#p1health").text();
        console.log(p1status);
        var counterattack = Math.floor((Math.random() * 30) + 1);
        console.log(counterattack);
        var p1result = parseInt(p1status) - parseInt(counterattack);
        console.log(p1result);
        $("#p1health").empty();
        $("#p1health").append(p1result);



    });

    $("#kick").on("click", function () {
        $("#title").empty();
        var kick = Math.floor((Math.random() * 20) + 10);
        console.log(kick);
        var status = $("#cpuhealth").text();
        console.log(status);
        var result = parseInt(status) - parseInt(kick);
        console.log(result);
        $("#cpuhealth").empty();
        $("#cpuhealth").append(result);


        var p1status = $("#p1health").text();
        console.log(p1status);
        var counterattack = Math.floor((Math.random() * 30) + 1);
        console.log(counterattack);
        var p1result = parseInt(p1status) - parseInt(counterattack);
        console.log(p1result);
        $("#p1health").empty();
        $("#p1health").append(p1result);

    });

    $("#special").on("click", function () {
        $("#title").empty();
        var special = Math.floor((Math.random() * 20) + 10);
        console.log(special);
        var cpustatus = $("#cpuhealth").text();
        console.log(cpustatus);
        var result = parseInt(cpustatus) - parseInt(special);
        console.log(result);
        $("#cpuhealth").empty();
        $("#cpuhealth").append(result);

        var p1status = $("#p1health").text();
        console.log(p1status);
        var counterattack = Math.floor((Math.random() * 30) + 1);
        console.log(counterattack);
        var p1result = parseInt(p1status) - parseInt(counterattack);
        console.log(p1result);
        $("#p1health").empty();
        $("#p1health").append(p1result);

    });

    function counterattack() {
        var counterattack = Math.floor((Math.random() * 30) + 1);

    }
};



function start() {
    document.getElementById('logo').style.display = 'none';
    document.getElementById('start').style.display = 'none';
    document.getElementById('choose').style.display = 'inline';

}

// function to disable thumbnails//

function begin() {
    document.getElementById('zang').style.filter = "brightness(60%)";
    document.getElementById('ryu').style.filter = "brightness(60%)";
    document.getElementById('ryu').disabled = true;
    document.getElementById('chung').style.filter = "brightness(60%)";
    document.getElementById('chung').disabled = true;
    document.getElementById('honda').style.filter = "brightness(60%)";
    document.getElementById('honda').disabled = true;

}
// function to calculate random attack points to "Special" "Kick" "Punch" buttons//






        // function to calculate randon counter attack points to "Special" "Kick" "Punch" buttons//

        // function to display attack and counter attack points//


        // function to play again//

        // BONUS function to track health points using health bar ///

        // let cpuhealth = document.getElementById("cpuhealth")
        // health.value -= 10; //Or whatever you want to do with it.

        // let p1health = document.getElementById("p1health")
        // health.value -= 10; //Or whatever you want to do with it.
