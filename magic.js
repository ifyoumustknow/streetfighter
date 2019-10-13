


window.onload = function () {
    $("#start").on("click", start)
    $("#ryu").on("click", function () {
        console.log("test");
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
        $("#choose").empty();
        $("#title").empty();
        $("#p1health").empty();
        $("#p1health").append(175);
        $("#P1-fighter").empty();
        $("#P1-fighter").append('<img src="assets/honda_right2.png" class="c-characters"/>');
        document.getElementById("p1healthbar").style.width = '75%';
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

        if (cpuChoice.name === ryu) {
            $("#cpuhealth").empty();
            $("#cpuealth").append(170);
            document.getElementById("cpuhealth").style.width = '70%';

        } else if (cpuChoice.name === honda) {
            $("#cpuhealth").empty();
            $("#p1health").append(175);
            document.getElementById("cpuhealth").style.width = '75%';

        } else if (cpuChoice.name === zang) {
            $("cpuhealth").empty();
            $("#cpuhealth").append(190);
            document.getElementById("cpuhealth").style.width = '90%';

        } else {
            cpuChoice.name === chung
            $("#cpuhealth").empty();
            $("#cpuhealth").append(180);
            document.getElementById("cpuhealth").style.width = '80%';
        }


        var cpuChoiceHTMLString = `<img ${cpuChoice.image} name=${cpuFighters.name} />`
        document.getElementById('cpu-fighter').innerHTML = cpuChoiceHTMLString;
    }


};

function start() {
    document.getElementById('logo').style.display = 'none';
    document.getElementById('start').style.display = 'none';
    document.getElementById('choose').style.display = 'inline';

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
