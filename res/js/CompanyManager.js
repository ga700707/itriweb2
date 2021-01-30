

function DeleteAccount(id, msg) { // 變更狀態
    var confirmStatus = confirm("是否刪除此帳號?");
    if (confirmStatus) {
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/am/Delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                "id": id
            }),
            success: function () {
                datatables.draw();
            }
        });
    }
}
function changeAMStatus(id, msg) { // 變更狀態
    var confirmStatus = confirm("是否" + msg + "?");
    if (confirmStatus) {
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/am/TurnStatus",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                "id": id
            }),
            success: function () {
                datatables.draw();
            }
        });
    }
}
function createAccount() { // 建立會員初始化
    $('#AMCreate').modal('show');

}
function createAccountCommit() { // 建立初始化
    if ($('#txtpasswordCreate').val() != $('#txtConfirmPasswordCreate').val()) return alert("密碼不符");
    //if ($('#txtloginCreate').val().search(emailRule) == -1) return alert("帳號格式不正確");
    //if ($('#txtnameCreate').val() == "") return alert("暱稱不正確");
    
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/am/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'userName': $('#txtloginCreate').val(),
            'type': $('#txttypeCreate').val(),
            'nickName': $('#txtnameCreate').val(),
            'password': $('#txtpasswordCreate').val(),
            'active': $('#txtactiveCreate').val(),
            'companyId': ($('#txttypeCreate').val()!="A")?getCookie("companyId"):0,
        }),
        success: function (e) {
            switch (e) {
                case "success":
                    alert("新增帳號成功")
                    datatables.draw();
                    $('#AMCreate').modal('hide');
                    break;
                case "error":
                    alert("帳號重複請重新設定")
                    break;
            }
        },
    
    })
    $('#AMCreate').modal('show');
}
function editAccount(id, title) { // 編輯會員初始化
    $('#AMEditLabel').html('編輯 ' + title);

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/am/GetById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            "Id": id
        }),
        success: function (e) {

            $("#txtidEdit").val(id);
            $("#txtloginEdit").val(e.userName);
            $("#txttypeEdit").val(e.type);
            $('#txtnameEdit').val(e.nickName);
            $('#txtpasswordEdit').val(e.password);
            $('#txtConfirmPasswordEdit').val(e.password);
            $('#txtactiveEdit').val(e.active);
        }
    });
    $('#AMEdit').modal('show');

}
function editAccountCommit() { // 編輯會員送出
    console.log($('#txtloginEdit').val());
    if ($('#txtpasswordEdit').val() != $('#txtConfirmPasswordEdit').val()) return alert("密碼不符");

    console.log($("#txtidEdit").val())
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/am/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'Id': $("#txtidEdit").val(),
            'UserName': $("#txtloginEdit").val(),
            'NickName': $("#txtnameEdit").val(),
            'Type': $("#txttypeEdit").val(),
            'Active': $("#txtactiveEdit").val(),
            'Password': $("#txtpasswordEdit").val(),
            'companyId': getCookie("companyId"),

        }),
        success: function () {
            datatables.draw();
            $('#AMEdit').modal('hide');
        }
    });
}