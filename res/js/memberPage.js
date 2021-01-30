function initName(){
    console.log($("#memberName").val());
    $("#memberName").val(getCookie("nickName"));
}