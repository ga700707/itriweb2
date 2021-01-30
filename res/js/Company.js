function DeleteCompany(id, msg) { // 變更狀態
    var confirmStatus = confirm("是否刪除此公司?");
    if (confirmStatus) {
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/cm/Delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                "id": id
            }),
            success: function () {
                alert("刪除成功");
                dataTables.draw();
            },
            error:function(){
                alert("刪除失敗");
                dataTables.draw();

            }
        });
    }
}
function changeCMStatus(id, msg) { // 變更狀態
    var confirmStatus = confirm("是否" + msg + "?");
    if (confirmStatus) {
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/cm/TurnStatus",
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
function createCompany() { // 建立會員初始化





    $('#CMCreate').modal('show');

}
function createCompanyCommit() { // 建立初始化
    //if ($('#txtloginCreate').val().search(emailRule) == -1) return alert("帳號格式不正確");
    //if ($('#txtnameCreate').val() == "") return alert("暱稱不正確");
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/cm/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'companyName': $('#txtcompanyNameCreate').val(),
            'active': $('#txtactiveCreate').val(),
        }),
        success: function () {
            dataTables.draw();
            $('#CMCreate').modal('hide');
        }

    })
    $('#CMCreate').modal('show');
}
function editCompany(id, title) { // 編輯會員初始化
    $('#CMEditLabel').html('編輯 ' + title);

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/cm/GetById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            "Id": id
        }),
        success: function (e) {
            $("#txtidEdit").val(id);
            $('#txtcompanyNameEdit').val(e.companyName);
            $('#txtactiveEdit').val(e.active);
        }
    });
    $('#CMEdit').modal('show');

}

function editCompanyCommit() { // 編輯會員送出
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/cm/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'Id': $("#txtidEdit").val(),
            'CompanyName': $("#txtcompanyNameEdit").val(),
            'Active': $("#txtactiveEdit").val(),
        }),
        success: function () {
            dataTables.draw();
            $('#CMEdit').modal('hide');
        }
    });
}


function CompanyManager(Id, title) { // 編輯會員初始化
    $('#AMModalLabel').html('編輯 ' + title);
    setCookie("companyId", Id);
    companyDataTables = $('#AMTable').DataTable({
        "searching": false,
        "ordering": false,
        "serverSide": true,
        "processing": true,
        "destroy": true,
        "ajax": {
            "headers": {
                'Authorization': getCookie("token")
            },
            "type": "POST",
            url: parent.webApiUrl + "/cm/GetAllAccount",
            contentType: "application/json",
            data: function (d) {
                d.companyId = Id;
                return JSON.stringify(d)

            }
        },
        //Type varchar(45) 

        "columns": [
            { 'data': 'id' },
            { 'data': 'active' },
            { 'data': 'userName' },
            { 'data': 'type' },
            { 'data': 'nickName' },//5
            { 'data': 'password' },
            { 'data': 'createDate' },
            { 'data': 'modifyDate' },
            { 'data': null }
        ], "columnDefs": [{
            "targets": [0, 2, 5], // hidden column
            "visible": false
        }, {
            "targets": 1,
            "render": function (data, type, row) {
                var checked = (row.active == 0) ? "啟用" : "停用";
                return "<a href='javascript:void(0);' onclick='changeAMStatus(" + row.id + ",\"" + checked + row.companyName + "\", \"" + checked + "\");'>" + checked + "</a>";
            }

        }, {
            "targets": 3,
            "render": function (data, type, row) {

                return memberTypeData[row.type];
            }

        }, {
            "targets": 8, // add edit buttononclick="recordChat(' + row.id + ')
            "render": function (data, type, row) {
                var html = "";
                html += ' <a href="javascript:void(0);" onclick="editAccount(' + row.id + ',\'' + row.nickName + '\')">編輯</a>'
                html += ' | <a href="javascript:void(0);" onclick="DeleteAccount(' + row.id + ')">刪除</a> '
                return html
            }
        }, {
            "targets": [6, 7], render: function (data) {
                if (data == null)
                    return "無";
                else {
                    var dateOrigin = new Date(data)
                    dateOrigin.setHours(dateOrigin.getHours() + 8)
                    return moment(dateOrigin).format('YYYY-MM-DD hh:mm:ss');
                }
            }
        }],
        "dom": '<"toolbar">frtip', // enable custommize toolbar elements
        "language": { // change display text
            "info": " 目前顯示 _START_ 至 _END_ 筆，共計 _TOTAL_ 筆。",
            "paginate": {
                "first": "第一頁",
                "last": "最後一頁",
                "next": ">",
                "previous": "<"
            }
        }

    });

    $('#modalDetail').modal('show');
}

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
                companyDataTables.draw();
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
                companyDataTables.draw();
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
            'companyId': getCookie("companyId"),
        }),
        success: function (e) {
            switch (e) {
                case "success":
                    alert("新增帳號成功")

                    companyDataTables.draw();
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
            companyDataTables.draw();
            $('#AMEdit').modal('hide');
        }
    });
}