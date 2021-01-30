
hideExamplearray = [];
hideExamarray = [];

function InitModal(level,category) {
    // $("#Level").empty();
    // $("#categoryCreate").empty();
    // $("#Reference").empty();

    switch (level) {
        case 0:
        case 1:
            switch (category) {
                case 0:
                    InitVoiceA1();
                    break;
                case 1:
                    InitVoiceA2();
                    break;
                case 2:
                    InitVoiceA3();
                    break;
                case 3:
                    InitVoiceA4();
                    break;
                case 4:
                    InitReadA1();
                    break;
                case 5:
                    InitReadA2();
                    break;
                case 6:
                    InitReadA3();
                    break;
                case 7:
                    InitReadA4();
                    break;
                case 8:
                    InitReadA5();
                    break;
            };
            break;
        case 2:
        case 3:
            switch (category) {
                case 0:
                    InitVoiceB1();
                    break;
                case 1:
                    InitVoiceB2();
                    break;
                case 2:
                    InitReadB1();
                    break;
                case 3:
                    InitReadB2();
                    break;
            };
            break;
        case 4:
        case 5:
            switch (category) {
                case 0:
                    InitVoiceC1();
                    break;
                case 1:
                    InitVoiceC2();
                    break;
                case 2:
                    InitVoiceC3();
                    break;
                case 3:
                    InitVoiceC4();
                    break;
                case 4:
                    InitReadC1();
                    break;
                case 5:
                    InitReadC2();
                    break;

            };
            break;
    };
    //dataTables.draw();
}


function InitVoiceA1() {


    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1聽力測驗-第一部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2聽力測驗-第一部分");

    $("#Create1-modal-panel").load("/res/modalCreate/AC1-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/AC1-2.html");

    $("#Edit1-modal-panel").load("/res/modalEdit/AC1-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/AC1-2.html");

    $("#ReferImage").attr("src", "/res/img/example/AC1.bmp");

    hideExamplearray = [0, 1, 2, 5, 6, 8, 9, 11, 12, 14, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];
}
function InitVoiceA2() {


    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1聽力測驗-第二部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2聽力測驗-第二部分");
    $("#Create1-modal-panel").load("/res/modalCreate/AC2-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/AC2-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/AC2-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/AC2-2.html");

    $("#ReferImage").attr("src", "/res/img/example/AC2.bmp");
    hideExamplearray = [0, 1, 2, 3, 5, 7, 8, 10, 11, 13, 14, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];
}
function InitVoiceA3() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1聽力測驗-第三部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2聽力測驗-第三部分");
    $("#Create1-modal-panel").load("/res/modalCreate/AC3-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/AC3-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/AC3-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/AC3-2.html");

    $("#ReferImage").attr("src", "/res/img/example/AC3.bmp");

    hideExamplearray = [0, 1, 2, 3, 5, 7, 8, 10, 11, 13, 14, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];

}
function InitVoiceA4() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1聽力測驗-第四部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2聽力測驗-第四部分");
    $("#Create1-modal-panel").load("/res/modalCreate/AC4-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/AC4-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/AC4-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/AC4-2.html");

    $("#ReferImage").attr("src", "/res/img/example/AC4.bmp");

    hideExamplearray = [0, 1, 2, 3, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];

}
function InitReadA1() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第一部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第一部分");
    $("#Create1-modal-panel").load("/res/modalCreate/AC5-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/AC5-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/AC5-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/AC5-2.html");

    $("#ReferImage").attr("src", "/res/img/example/AC5.bmp");

    hideExamplearray = [0, 1, 3, 4, 5, 7, 8, 10, 11, 13, 14, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];

}
function InitReadA2() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第二部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第二部分");
    $("#Create1-modal-panel").load("/res/modalCreate/AC6-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/AC6-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/AC6-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/AC6-2.html");

    $("#ReferImage").attr("src", "/res/img/example/AC6.bmp");
    hideExamplearray = [0, 1, 2, 4, 6, 7, 9, 10, 12, 13, 14, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];
}
function InitReadA3() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第三部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第三部分");

    $("#Create1-modal-panel").load("/res/modalCreate/AC7-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/AC7-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/AC7-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/AC7-2.html");

    $("#ReferImage").attr("src", "/res/img/example/AC7.bmp");

    hideExamplearray = [0, 1, 3, 4, 6, 7, 9, 10, 12, 13, 14, 15, 16];
    hideExamarray = [0, 7, 9, 10, 11];
}
function InitReadA4() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第四部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第四部分");
    $("#Create1-modal-panel").load("/res/modalCreate/AC8-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/AC8-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/AC8-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/AC8-2.html");

    $("#ReferImage").attr("src", "/res/img/example/AC8.bmp");

    hideExamplearray = [0, 1, 2, 3, 4, 6, 7, 9, 10, 12, 13];
    hideExamarray = [0, 8, 9, 10, 11];
}
function InitReadA5() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/AC9-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/AC9-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/AC9-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/AC9-2.html");

    $("#ReferImage").attr("src", "/res/img/example/AC9.bmp");

    hideExamplearray = [0, 1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];
}

function InitVoiceB1() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增B1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增B1閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/BC1-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/BC1-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/BC1-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/BC1-2.html");

    $("#ReferImage").attr("src", "/res/img/example/BC1.bmp");

    hideExamplearray = [0, 1, 2, 3, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];
}

function InitVoiceB2() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/BC2-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/BC2-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/BC2-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/BC2-2.html");

    $("#ReferImage").attr("src", "/res/img/example/BC2.bmp");

    hideExamplearray = [0, 1, 2, 3, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];
}

function InitReadB1() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/BC3-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/BC3-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/BC3-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/BC3-2.html");

    $("#ReferImage").attr("src", "/res/img/example/BC3.bmp");

    hideExamplearray = [0, 1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 8, 9, 10, 11];
}

function InitReadB2() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/BC4-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/BC4-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/BC4-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/BC4-2.html");

    $("#ReferImage").attr("src", "/res/img/example/BC4.bmp");

    hideExamplearray = [0, 1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 9, 10, 11];
}

function InitVoiceC1() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/CC1-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/CC1-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/CC1-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/CC1-2.html");

    $("#ReferImage").attr("src", "/res/img/example/CC1.bmp");

    hideExamplearray = [0, 1, 2, 3, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];
}

function InitVoiceC2() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/CC2-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/CC2-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/CC2-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/CC2-2.html");

    $("#ReferImage").attr("src", "/res/img/example/CC2.bmp");


    hideExamplearray = [0, 1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 8, 10, 11];
}

function InitVoiceC3() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/CC3-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/CC3-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/CC3-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/CC3-2.html");

    $("#ReferImage").attr("src", "/res/img/example/CC3.bmp");

    hideExamplearray = [0, 1, 2, 3, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 7, 8, 9, 10, 11];
}

function InitVoiceC4() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/CC4-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/CC4-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/CC4-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/CC4-2.html");

    $("#ReferImage").attr("src", "/res/img/example/CC4.bmp");
    hideExamplearray = [0, 1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 8, 10, 11];
}

function InitReadC1() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/CC5-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/CC5-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/CC5-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/CC5-2.html");

    $("#ReferImage").attr("src", "/res/img/example/CC5.bmp");

    hideExamplearray = [0, 1, 2, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 8, 9, 10, 11];
}

function InitReadC2() {

    if (parseInt($("#Level").val()) == 0)
        $('#modalCreateExamContentLabel').text("新增A1閱讀測驗-第五部分");
    else
        $('#modalCreateExamContentLabel').text("新增A2閱讀測驗-第五部分");
    $("#Create1-modal-panel").load("/res/modalCreate/CC6-1.html");
    $("#Create2-modal-panel").load("/res/modalCreate/CC6-2.html");
    $("#Edit1-modal-panel").load("/res/modalEdit/CC6-1.html");
    $("#Edit2-modal-panel").load("/res/modalEdit/CC6-2.html");

    $("#ReferImage").attr("src", "/res/img/example/CC6.bmp");

    hideExamplearray = [0, 1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 16];
    hideExamarray = [0, 9, 10, 11];
}
