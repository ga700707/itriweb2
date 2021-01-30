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
                dataTables.draw();
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
                dataTables.draw();
            }
        });
    }
}
function createAccount() { // 建立會員初始化




    $("#txtactiveCreate").append('<option value="1">啟用</option>');
    $("#txtactiveCreate").append('<option value="0">停用</option>');

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
            'CompanyId': ($('#txttypeCreate').val()!="A")?$('#txtcompanyCreate').val():0,
        }),
        success: function (e) {
            switch (e) {
                case "success":
                    alert("新增帳號成功")

                    dataTables.draw();
                    $('#AMCreate').modal('hide');
                    break;
                case "error":
                    alert("帳號重複請重新設定")
                    break;
            }

        }

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
            console.log(e.active);
            $("#txtidEdit").val(id);
            $("#txtloginEdit").val(e.userName);
            $("#txttypeEdit").val(e.type);
            $('#txtnameEdit').val(e.nickName);
            $('#txtpasswordEdit').val(e.password);
            $('#txtConfirmPasswordEdit').val(e.password);
            $('#txtactiveEdit').val(e.active);
            $('#txtcompanyEdit').val(e.companyId);

            switch (e.type) {
                case "A":
                    $("#companyEdit").css('display', 'none');
                    break;
                default:
                    $("#companyEdit").css('display', 'block');
                    break;
            }
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
            'CompanyId': ($('#txttypeEdit').val()!="A")?$('#txtcompanyEdit').val():0,

        }),
        success: function () {
            dataTables.draw();
            $('#AMEdit').modal('hide');
        }
    });
}
function GetAllCompany() { // 編輯會員送出
    $.ajax({
        type: "GET",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/cm/GetAllCompany",
        contentType: "application/json;charset=utf-8",
        async: false,

        success: function (data) {
            data.forEach(e => {
                $("#txtcompanyEdit").append('<option value=' + e.id + '>' + e.companyName + '</option>');
                $("#txtcompanyCreate").append('<option value=' + e.id + '>' + e.companyName + '</option>');
            });
        }

    });

}