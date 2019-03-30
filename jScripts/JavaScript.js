var myPageNum = 1;
var mytochenNum = 0;
var myCodeGame = 0;
var thisgame = [];

$(document).ready(function () {
    $("#myCode").hide();
    $("#pageOrgin").hide();
    //מסך פתיחה
    $("#student").click(function () {
        $("#navOp").fadeOut(500);
        myCodSowe();
        
    });
    $("#techer").click(function () {
        $("#navOp").fadeOut(500);
        
    });
    //קוד
    $("#start").click(function () {
        var valCode = $("#codeGame").val();
        //טעינת הקודים
        $.getJSON("json.json", function (json) {
            var myRusalt=false;
            var myObject = json.allApp.games._gameNum;
            for (i = 0; i < myObject; i++) {
                if (valCode == json.allApp.games.game[i]._code) {
                    valCode = json.allApp.games.game[i]._id;
                    
                    var NumPage = (json.allApp.games.game[i].page).length;
                    for (z = 0; z < NumPage; z++) {
                        var ThisPage = [];
                        ThisPage[0] = json.allApp.games.game[i].page[z]._id;
                        ThisPage[1] = json.allApp.games.game[i].page[z]._quiz;
                        ThisPage[2] = json.allApp.games.game[i].page[z].tochen._tape;
                        ThisPage[3] = json.allApp.games.game[i].page[z].tochen.__text;
                        thisgame[z] = ThisPage;
                        
                        if (z == (NumPage - 1)) {
                            //תחילת המשחק
                            StartGame();
                        }
                    }
                    



                    myRusalt=true;
                } else if (i == myObject - 1 && myRusalt==false) {
                    alert("טעות בקוד");
                }
            }
        }); 
    });
});
function myCodSowe() {
    var time=setInterval(function () {
        $("#myCode").fadeIn(500);
        clearInterval(time)
    }, 500);
}
//אתר של המורה
function myTecherSite() {

}

//המשך למשחק
function StartGame() {
    //לבנות את הממשק
    $("#myCode").fadeOut(500);
    nextPage(myPageNum)

    //myCodeGame = valCode-1;
    //nextPage(myPageNum);
}
//דף הבא
function nextPage(num) {
    var time = setInterval(function () {
        $("#pageOrgin").fadeIn(500);
        clearInterval(time)
    }, 500);
    
    //var thisimage1 = "images/" + thisgame[num - 1][3];
    //$("#Myimage").attr("src", thisimage1);
    var Shela = false;
    while (Shela == false) {
        if (thisgame[num - 1][1] == "true") {
            Shela = true;
            Myquize(num)
        } else {
            var img = $('<img />', {
                src: "images/" + thisgame[num - 1][3],
                class: 'col-12',
                height:'100%'
            });
            img.appendTo($('#pageOrgin'));
            num++;
        } 
    }
}
//לשאלה
function Myquize(num) {
    var img = $('<img />', {
        src: "images/" + thisgame[num - 1][3],
        class: 'col-12',
        height: '100%'
    });
    img.appendTo($('#pageOrgin'));


}