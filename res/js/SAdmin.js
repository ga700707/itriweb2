
// Initialize variables
var $window = $(window);
var array=[];
var Chat=[];
var flag = true;
var ChatId;
var MemberId ;
var MemberName;
const socket = io("socketio.beasy.com.tw");
var AccountId = getCookie("id");
var AccountName = getCookie("displayName");
var Token = getCookie("token");
var Injection;

array.push(0);
socket.emit('Add_Interpreter');
socket.emit('Add_Member');
function sendText(message){

    var data = {
        "SChatId" :  ChatId ,
        "SRowText" : encodeURI(message),
        "SAccountId" : AccountId,
        "SAccountName":encodeURI(AccountName),
        "SMemberId" : MemberId,
        "SSenderType" :"Account",
        "SToken": getCookie("token"),
    };
    console.log(data);
    socket.emit('Interpreter Message',data);
}
function ChangeAccount(){
    console.log("ChangeAccount")
    $('input').attr("readonly",false);
    Injection =  true;
    var data = {
        "SIsInjection":Injection,
        "SAccountName":encodeURI(getCookie("displayName")),
        'SAccountId':AccountId,
        "SChatId":ChatId,
        "SToken":Token,
    };
    socket.emit('Interpreter IsInjection',data);
}
function addMessageList(text,ChatId,Id,MemberName,IsRobot,AccountId){
    tmp = array.indexOf(ChatId); //返回的值是1
    if (tmp==-1){
        array.push(ChatId);
        Chat[ChatId] = {"AccountId":AccountId,"MemberId":Id,"IsRobot":IsRobot};
        console.log(Chat[ChatId]);
        console.log(Chat[ChatId]["MemberId"]);
        console.log(Chat[ChatId]["IsRobot"]);
        document.getElementById("MessageList").innerHTML +=
            "<li id="+ChatId+">\n"+
            "<span  class=\"badge\"></span>\n" +
            "<span  class=\"InjectTag\"></span>\n" +
            "<span>"+text+"</span>\n"+
            "<a href='#' id="+ChatId+" value="+Id+" onclick=\"doReset(this)\">"+MemberName+"</a>\n"+
            "</li>\n";
    }
}
function addMessageState(Discription,DateTime){
    var html = document.getElementById("MessageState").innerHTML
    document.getElementById("MessageState").innerHTML =
        "<li>\n"+
        "<span>"+Discription+"</span><br>\n"+
        "<span>"+DateTime+"</span>\n"+
        "</li>\n";
    document.getElementById("MessageState").innerHTML += html
}
function Interpreter_Left()
{
    Injection = false;
    $('input').attr("readonly",true);
    var data = {
        "SAccountName":encodeURI(AccountName),
        "SAccountId":0,
        "SChatId":ChatId,
    };
    socket.emit("Interpreter Left",data);
}




function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}
// Whenever the server emits 'new message', update the chat body
function ChangeLanguage(Language){
    switch (Language) {
        case 0:
            Language = "Taiwan";
            break;
        case 1:
            Language="English";
            break;
        case 2:
            Language="Japan";
            break;
        case 3:
            Language="Korea";
            break;
        case 4:
            Language="Vietnam";
            break;
        case 5:
            Language="Thailand";
            break;
        case 6:
            Language="France";
            break;
        case 7:
            Language="Russian";
            break;
        case 8:
            Language="Spain";
            break;
        case 9:
            Language="Indonesia";
            break;
    }
    return Language
}
function getNowTime(){
    var timeDate= new Date();
    var tMonth = (timeDate.getMonth()+1) > 9 ? (timeDate.getMonth()+1) : '0'+(timeDate.getMonth()+1);
    var tDate = timeDate.getDate() > 9 ? timeDate.getDate() : '0'+timeDate.getDate();
    var tHours = timeDate.getHours() > 9 ? timeDate.getHours() : '0'+timeDate.getHours();
    var tMinutes = timeDate.getMinutes() > 9 ? timeDate.getMinutes() : '0'+timeDate.getMinutes();
    var tSeconds = timeDate.getSeconds() > 9 ? timeDate.getSeconds() : '0'+timeDate.getSeconds();
    timeDate= timeDate.getFullYear()+'/'+ tMonth +'/'+ tDate +' '+ tHours +':'+ tMinutes +':'+ tSeconds;
    return timeDate
}
socket.on('Interpreter Message', (data) => {
    var json = data.data;
    if (ChatId == json["SChatId"]) {
        var SenderName = "";
        if (json["SSenderType"] == "Robot")
            SenderName = "Robot";
        if (json["SSenderType"] == "Member")
            SenderName = decodeURI(json["SMemberName"]);
        if (json["SSenderType"] == "Account")
            SenderName = decodeURI(json["SAccountName"]);
        var chat = $("#chat").data("kendoChat");
        chat.renderMessage({
            type: "text",
            text: decodeURI(json["SRowText"]),
        }, {
            id: kendo.guid(),
            name: SenderName,
        });
    }
    else{
        if (document.getElementById(json["SChatId"]).getElementsByClassName("badge")[0].innerText == "")
            document.getElementById(json["SChatId"]).getElementsByClassName("badge")[0].innerText = "1";
        else {
            num = document.getElementById(json["SChatId"]).getElementsByClassName("badge")[0].innerText;
            num = parseInt(num) + 1;
            document.getElementById(json["SChatId"]).getElementsByClassName("badge")[0].innerText = String(num);
        }
    }
   // var text = decodeURI(json["SMemberName"]) + " 與 " + decodeURI(json["SAccountName"]);
   // addMessageState(text,json["SChatId"],json["SMemberId"],decodeURI(json["SMemberName"]),"發起對話");


});
socket.on('Robot Message', (data) => {
    var json = data.data;
        if (ChatId == json["SChatId"]) {
            var Text = "";
            var SenderName = "";
            if (json["SSenderType"] == "Robot") {
                SenderName = "Robot";
                Text = decodeURI(json["STranslateText"]);
            }
            else {
                SenderName = decodeURI(json["SMemberName"]);
                Text = decodeURI(json["SRowText"]);
            }
            var chat = $("#chat").data("kendoChat");
            chat.renderMessage({
                type: "text",
                text: Text,

            }, {
                id: kendo.guid(),
                name: SenderName,
                // click:addMembersButton(json["SMemberId"],json["SChatId"],json["SMemberName"])
            });
        }
        else{
            if (document.getElementById(json["SChatId"]).getElementsByClassName("badge")[0].innerText == "")
                document.getElementById(json["SChatId"]).getElementsByClassName("badge")[0].innerText = "1";
            else {
                num = document.getElementById(json["SChatId"]).getElementsByClassName("badge")[0].innerText;
                num = parseInt(num) + 1;
                document.getElementById(json["SChatId"]).getElementsByClassName("badge")[0].innerText = String(num);
            }
        }
       // var text = decodeURI(json["SMemberName"]) + " 與 " + "機器人";
       //addMessageState(text,json["SChatId"],json["SMemberId"],decodeURI(json["SMemberName"]),"發起對話");

});

socket.on('Create RobotChat', (data) => {
    var json = data.data;
    var text =  ChangeLanguage(json["SRowLanguage"])  + "機器人 與 ";
    addMessageList(text, json["SChatId"], json["SMemberId"], decodeURI(json["SMemberName"]),true,json["SAccountId"]);
});
socket.on('Create InterpreterChat', (data) => {
    var json = data.data;
    var text = ChangeLanguage(json["SRowLanguage"]) + "口譯人員" + decodeURI(json["SAccountName"]) + " 與 ";
    addMessageList(text, json["SChatId"], json["SMemberId"], decodeURI(json["SMemberName"]),false,json["SAccountId"]);
});
socket.on('Create_MessageState', (data) => {
    addMessageState(data,getNowTime());
});
socket.on('Interpreter_Inject', (data) => {
    if(data['data']['SIsInjection'])
    document.getElementById(data['data']['SChatId']).getElementsByClassName("InjectTag")[0].innerText = "介入";
    else{
        document.getElementById(data['data']['SChatId']).getElementsByClassName("InjectTag")[0].innerText = "";

    }


});
socket.on('Interpreter Left', (data) => {
    document.getElementById(data['data']['SChatId']).getElementsByClassName("InjectTag")[0].innerText = "";
});
socket.on('Finish_Continue', (data) => {
    if (ChatId == data["SChatId"]) {
        var SenderName = "";
        SenderName = decodeURI(data["SMemberName"]);
        var chat = $("#chat").data("kendoChat");
        chat.renderMessage({
            type: "text",
            text: "使用者拒絕結束對話",
        }, {
            id: kendo.guid(),
            name: SenderName,
        });
    }

});
socket.on('Finish_Response', (data) => {
    document.getElementById(data["SChatId"]).remove();
    document.getElementById('chat').getElementsByClassName('k-message-list k-avatars')[0].innerHTML="";
    const  i = Chat.indexOf(parseInt(data["SChatId"]));
    delete Chat[i];
    if(ChatId == data["SChatId"])
        ChatId = 0;
    console.log(data);
});
socket.on('Add_Interpreter', (data) => {
    $('#InterpreterNumber').text(data);
});
socket.on('Decrease_Interpreter', (data) => {
    $('#InterpreterNumber').text(data);
});
socket.on('Add_Member', (data) => {
    $('#MemberNumber').text(data);
});
socket.on('Decrease_Member', (data) => {
    $('#MemberNumber').text(data);
});
socket.on('disconnect', () => {
    var data = {
        "SAccountName":encodeURI(AccountName),
        "SChatId":ChatId,
    };
    console.log(data);
    socket.emit("Interpreter Left",data);
});

socket.on('image', (data) => {
    console.log("image"+data.base64)
    document.getElementById("img").src = "data:image/png;base64,"+data.base64
});
socket.on('predict', (data) => {
    console.log("predict"+data.predict)
    alert(data.predict);
});




