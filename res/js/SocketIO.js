
// Initialize variables

const socket = io("http://210.60.221.121:3000");

function sendText(Text,ExamId){
    var data ={
        "SText":encodeURI(Text),
        "SExamId":ExamId,
    }
    socket.emit('CommentText',data);
}

function sentStartDate(date,ExamRoonId){
    var data ={
        "SStartDate":encodeURI(date),
        "ExamRoonId":ExamRoonId,
    }
    socket.emit('StartQuiz',data);
}


// Whenever the server emits 'new message', update the chat body
socket.on('CommentText', (data) => {

    console.log(data["SExamId"]);
    var chat = $("#chat").data("kendoChat");
    chat.renderMessage({
        type: "text",
        text: decodeURI(data["SText"]),
    }, {
        id: kendo.guid(),
        name: "",
    });
});



