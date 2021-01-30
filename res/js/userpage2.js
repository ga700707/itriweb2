
function init() {
    // Create
    $("#memberCreate_Content").load("/res/modalCreate/memberCreate.html");
    $("#toolcutterCreate_Content").load("/res/modalCreate/cutterCreate.html");
    $("#machineCreate_Content").load("/res/modalCreate/machineCreate.html");
    $("#tooljigCreate_Content").load("/res/modalCreate/jigCreate.html");
    $("#materialCreate_Content").load("/res/modalCreate/materialCreate.html");

    // Edit
    $("#memberEdit_Content").load("/res/modalEdit/memberEdit.html");
    $("#toolcutterEdit_Content").load("/res/modalEdit/cutterEdit.html");
    $("#machineEdit_Content").load("/res/modalEdit/machineEdit.html");
    $("#tooljigEdit_Content").load("/res/modalEdit/jigEdit.html");
    $("#materialEdit_Content").load("/res/modalEdit/materialEdit.html");

}
function memberCreate() {
    $("#memberCreate").modal("show");
}

function toolcutterCreate() {
    $("#toolcutterCreate").modal("show");
}

function machineCreate() {
    $("#machineCreate").modal("show");
}

function materialCreate() {
    $("#materialCreate").modal("show");
}

function tooljigCreate() {
    $("#tooljigCreate").modal("show");
}



function memberEdit(id) {
    $("#memberEdit_title").text(id + " 編輯頁面")
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/member/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#memberIdEdit").val(e.id);
            $("#memberNoEdit").val(e.memberNo);
            $("#memberNameEdit").val(e.memberName);
            $("#memberDutiesEdit").val(e.memberDuties);
            $("#memberSubDutiesEdit").val(e.memberSubDuties);
            $("#memberHiringDayEdit").val(e.memberHiringDay);
            $("#memberFiringDayEdit").val(e.memberFiringDay);
            $("#memberEdit").modal("show");

        }

    })
}

function machineEdit(id) {
    $("#machineEdit_title").text(id + " 編輯頁面")
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/machine/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {   
            $("#machineIdEdit").val(e.id);
            $("#machineClassEdit").val(e.machineClass);
            $("#machineNameEdit").val(e.machineName);
            $("#machineNoEdit").val(e.machineNo);
            $("#machineBrandEdit").val(e.machineBrand);
            $("#machineSizeEdit").val(e.machineSize);
            $("#machineEdit").modal("show");

        }
    })
   
}

function toolcutterEdit(id) {
    $("#toolcutterEdit_title").text(id + " 編輯頁面")

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/toolcutter/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        
        success: function (e) {   
            $("#toolcutterIdEdit").val(e.id);
            $('#toolcutterClassEdit').val(e.cutterClass);
            $('#toolcutterNameEdit').val(e.cutterName);
            $('#toolcutterNoEdit').val(e.cutterNo);
            $('#toolcutterBrandEdit').val(e.cutterBrand);
            $('#toolcutterSizeEdit').val(e.cutterSize);
            // $('#toolcutterStatusEdit').val(e.cutterStatus);
            $("#toolcutterEdit").modal("show");

        }
    })
}
function tooljigEdit(id) {
    $("#tooljigEdit_title").text(id + " 編輯頁面")
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/tooljig/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        
        success: function (e) {   
            $("#tooljigIdEdit").val(e.id);
            $("#tooljigNameEdit").val(e.jigName);
            // $("#tooljigNoEdit").val(e.jigNo);
            $("#tooljigClassEdit").val(e.jigClass);
            // $("#tooljigUseEdit").val(e.jigUse);
            $("#tooljigEdit").modal("show");

            

        }

    })
}

function materialEdit(id) {
    $("#materialEdit_title").text(id + " 編輯頁面")

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/material/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $('#materialIdEdit').val(e.id);
            $('#materialNameEdit').val(e.materialName);
            $('#materialClassEdit').val(e.materialClass);
            $('#materialSizeEdit').val(e.materialSize);
            $('#materialCountEdit').val(e.materialCount);
            $("#materialEdit").modal("show");

            // $('#materialNoEdit').val(e.materialNo);
            // $('#materialStatusEdit').val(e.materialStatus);
            // $('#materialTableCreateDateEdit').val(e.materialTableCreateDate);
            // $('#materialTableModifyDateEdit').val(e.materialTableModifyDate);   
        
        }

    })
}

function machineCreateContent() {
    // <!-- public string machineClass { get; set; }
    // public string machineName { get; set; }
    // public int? machineNo { get; set; }
    // public string machineBrand { get; set; }
    // public string machineSize { get; set; }
    // public byte? machineStatus { get; set; } -->
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/machine/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'machineClass': $('#machineClassCreate').val(),
            'machineName': $('#machineNameCreate').val(),
            'machineNo': $('#machineNoCreate').val(),
            'machineBrand': $('#machineBrandCreate').val(),
            'machineSize': $('#machineSizeCreate').val(),
            'accountId': getCookie("id"),
            'companyId': getCookie("companyId")

        }),
        success: function () {
            machineTable.draw();
            $("#machineCreate").modal("hide");
        }

    })

}
function machineEditContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/machine/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#machineIdEdit').val(),
            'machineClass': $('#machineClassEdit').val(),
            'machineName': $('#machineNameEdit').val(),
            'machineNo': $('#machineNoEdit').val(),
            'machineBrand': $('#machineBrandEdit').val(),
            'machineSize': $('#machineSizeEdit').val(),
            'accountId': getCookie("id"),
            'companyId': getCookie("companyId")
        }),
        success: function () {
            machineTable.draw();
            $("#machineEdit").modal("hide");
        }
    })
}

function machineDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/machine/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                machineTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}

function toolcutterCreateContent() {
    // <!-- public string machineClass { get; set; }
    // public string machineName { get; set; }
    // public int? machineNo { get; set; }
    // public string machineBrand { get; set; }
    // public string machineSize { get; set; }
    // public byte? machineStatus { get; set; } -->
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/toolcutter/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'cutterClass': $('#toolcutterClassCreate').val(),
            'cutterName': $('#toolcutterNameCreate').val(),
            'cutterNo': $('#toolcutterNoCreate').val(),
            'cutterBrand': $('#toolcutterBrandCreate').val(),
            'cutterSize': $('#toolcutterSizeCreate').val(),
            // 'cutterStatus': $('#toolcutterStatusCreate').val(),
            'accountId': getCookie("id"),
            'companyId': getCookie("companyId")
        }),
        success: function () {
            toolcutterTable.draw();
            $("#toolcutterCreate").modal("hide");
        }

    })
}
function toolcutterEditContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/toolcutter/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#toolcutterIdEdit').val(),
            'cutterClass': $('#toolcutterClassEdit').val(),
            'cutterName': $('#toolcutterNameEdit').val(),
            'cutterNo': $('#toolcutterNoEdit').val(),
            'cutterBrand': $('#toolcutterBrandEdit').val(),
            'cutterSize': $('#toolcutterSizeEdit').val(),
            // 'cutterStatus': $('#toolcutterStatusEdit').val(),
            'accountId': getCookie("id"),
            'companyId': getCookie("companyId")
        }),
        success: function () {
            toolcutterTable.draw();
            $("#toolcutterEdit").modal("hide");
        }
    })
}
function toolcutterDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/toolcutter/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                toolcutterTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}

function tooljigCreateContent() {
    // <!-- public string machineClass { get; set; }
    // public string machineName { get; set; }
    // public int? machineNo { get; set; }
    // public string machineBrand { get; set; }
    // public string machineSize { get; set; }
    // public byte? machineStatus { get; set; } -->
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/tooljig/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'jigName': $('#tooljigNameCreate').val(),
            // 'jigNo': $('#tooljigNoCreate').val(),
            'jigClass': $('#tooljigClassCreate').val(),
            // 'jigUse': $('#tooljigUseCreate').val(),
            'accountId': getCookie("id"),
            'companyId': getCookie("companyId")
        }),
        success: function () {
            tooljigTable.draw();
            $("#tooljigCreate").modal("hide");
        }

    })

}
function tooljigEditContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/tooljig/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#tooljigIdEdit').val(),
            'jigName': $('#tooljigNameEdit').val(),
            // 'jigNo': $('#tooljigNoEdit').val(),
            'jigClass': $('#tooljigClassEdit').val(),
            // 'jigUse': $('#tooljigUseEdit').val(),
            'accountId': getCookie("id"),
            'companyId': getCookie("companyId")
        }),
        success: function () {
            tooljigTable.draw();
            $("#tooljigEdit").modal("hide");
        }
    })
}
function tooljigDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/tooljig/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                tooljigTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}

function materialCreateContent() {
    // <!-- public string machineClass { get; set; }
    // public string machineName { get; set; }
    // public int? machineNo { get; set; }
    // public string machineBrand { get; set; }
    // public string machineSize { get; set; }
    // public byte? machineStatus { get; set; } -->
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/material/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'materialName': $('#materialNameCreate').val(),
            'materialClass': $('#materialClassCreate').val(),
            'materialSize': $('#materialSizeCreate').val(),
            'materialCount': $('#materialCountCreate').val(),
            'accountId': getCookie("id"),
            'companyId': getCookie("companyId")
            // 'materialNo': $('#materialNoCreate').val(),
            // 'materialStatus': $('#materialStatusCreate').val(),
            // 'materialTableCreateDate':$('#materialTableCreateDateCreate').val(),
            // 'materialTableModifyDate':$('#materialTableModifyDateCreate').val(),
        }),
        success: function () {
            materialTable.draw();
            $("#materialCreate").modal("hide");
        }

    })

}

function materialEditContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/material/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#materialIdEdit').val(),
            'materialName': $('#materialNameEdit').val(),
            'materialClass': $('#materialClassEdit').val(),
            'materialSize': $('#materialSizeEdit').val(),
            'materialCount': $('#materialCountEdit').val(),
            'accountId': getCookie("id"),
            'companyId': getCookie("companyId")
            // 'materialNo': $('#materialNoEdit').val(),
            // 'materialStatus': $('#materialStatusEdit').val(),
            // 'materialTableCreateDate':$('#materialTableCreateDateEdit').val(),
            // 'materialTableModifyDate':$('#materialTableModifyDateEdit').val(),
        }),
        success: function () {
            materialTable.draw();
            $("#materialEdit").modal("hide");
        }
    })
}

function materialDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/material/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                materialTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}
function memberCreateContent() {
    // <!-- public string machineClass { get; set; }
    // public string machineName { get; set; }
    // public int? machineNo { get; set; }
    // public string machineBrand { get; set; }
    // public string machineSize { get; set; }
    // public byte? machineStatus { get; set; } -->
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/member/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'memberNo': $('#memberNoCreate').val(),
            'memberName': $('#memberNameCreate').val(),
            'memberDuties': $('#memberDutiesCreate').val(),
            // 'memberSubDuties': $('#memberSubDutiesCreate').val(),
            // 'memberHiringDay':$('#memberHiringDayCreate').val(),
            // 'memberFiringDay':$('#memberFiringDayCreate').val(),
            'accountId': getCookie("id"),
            'companyId': getCookie("companyId")
        }),
        success: function () {
            memberTable.draw();
            $("#memberCreate").modal("hide");
        }

    })

}
function memberEditContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/member/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#memberIdEdit').val(),
            'memberNo': $('#memberNoEdit').val(),
            'memberName': $('#memberNameEdit').val(),
            'memberDuties': $('#memberDutiesEdit').val(),
            // 'memberSubDuties': $('#memberSubDutiesEdit').val(),
            // 'memberHiringDay':$('#memberHiringDayEdit').val(),
            // 'memberFiringDay':$('#memberFiringDayEdit').val(),
            'accountId': getCookie("id"),
            'companyId': getCookie("companyId")
        }),
        success: function () {
            memberTable.draw();
            $("#memberEdit").modal("hide");
        }
    })
}

function memberDelete (id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/member/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                memberTable.draw();
                alert("刪除成功")
            },
            error:function(){
                alert("刪除失敗")
            }

        })

}