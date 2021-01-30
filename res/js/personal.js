



var PorderNo = 17;
var GonNo =49;
var formData = new FormData();
function init() {
    // Create
    // $("#pOrderCreate_Content").load("/Views/ProductionManage/test.html");

    $("#purchase_Content").load("/Views/ProductionManage/Purchase.html");
    $("#gon_Content").load("/Views/ProductionManage/gon.html");

    //Edit
    $("#pOrderEdit_Content").load("/res/modalEdit/pOrderEdit.html");
}

function init2() {
    // Create
    gonEdit(GonNo);
    $("#purchase2Create_Content").load("/res/modalCreate/purchaseCreate.html");
    $("#assemblyCreate_Content").load("/res/modalCreate/assemblyCreate.html");
    $("#orderOutCreate_Content").load("/res/modalCreate/orderOutCreate.html");

    $("#orderSelfCreate_Content").load("/res/modalCreate/orderSelfCreate.html");
    // Edit
    $("#purchase2Edit_Content").load("/res/modalEdit/purchaseEdit.html");
    $("#assemblyEdit_Content").load("/res/modalEdit/assemblyEdit.html");
    $("#orderOutEdit_Content").load("/res/modalEdit/orderOutEdit.html");
    $("#orderSelfEdit_Content").load("/res/modalEdit/orderSelfEdit.html");
}

function pOrderCreate() {
    $("#pOrderCreate").modal("show");

}

function gonCreate(id) {
    PorderNo = id
    console.log("I am porderNo:" + PorderNo);
    GetGonTable();


}

function purchaseCreate() {

    gonCreateContent(PorderNo);
    //GonNo = 0;
    $("#purchase").modal("show");

}

function purchase2Create() {
    $("#pGonNoCreate").val(GonNo);
    console.log(GonNo);
    console.log('i am p' + GonNo);
    $("#purchase2Create").modal("show");
}

function assemblyCreate() {
    $("#aGonNoCreate").val(GonNo);
    console.log('i am a' + GonNo);
    $("#assemblyCreate").modal("show");
}

function orderOutCreate() {
    $("#oGonNoCreate").val(GonNo);
    console.log('i am o' + GonNo);
    $("#orderOutCreate").modal("show");
}

function orderSelfCreate() {
    $("#sGonNoCreate").val(GonNo);
    console.log('i am s' + GonNo);
    $("#orderSelfCreate").modal("show");
}

function confirm2() {
    $("#purchase").modal("hide");
    $("#gon").modal("show");
}

// Edit
function pOrderEdit(id) {
    $("#pOrderEdit_title").text(id + " 編輯頁面")
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/pOrder/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#pOrderIdEdit").val(e.id);
            $("#pOutOrderIdEdit").val(e.pOutOrderId);
            $("#pInOrderIdEdit").val(e.pInOrderId);
            $("#pOrderClientNoEdit").val(e.pOrderClientNo);
            $("#pOrderPredictDateEdit").val(moment(e.pOrderPredictDate).format('YYYY/MM/DD hh:mm'));
            $('#pOrderCompleteDateEdit').val(moment(e.pOrderCompleteDate).format('YYYY/MM/DD hh:mm'));
            $("#pOrderEdit").modal("show");

        }
    })
}

function gonEdit(id) {
    alert("ddddd");
    // $("#gonEdit_title").text(id + " 編輯頁面")
    // $("#gonEdit").modal("show");
    initPurchase(id);
    GonNo = id
    $("#purchase").modal("show");
    // $.ajax({
    //     type: "POST",
    //     headers: { 'Authorization': getCookie("token") },
    //     url: webApiUrl + "/gon/getById",
    //     contentType: "application/json;charset=utf-8",
    //     async: false,
    //     data: JSON.stringify({
    //         'id': id,
    //     }),
    //     success: function (e) {
    //         $("#gonIdEdit").val(e.id);
    //         $("#porderNoEdit").val(e.porderNo);
    //         $('#createDateEdit').val(e.createDate);
    //         $('#modifyDateEdit').val(e.modifyDate);
    //     }

    // })
}

function purchase2Edit(id) {
    $("#purchase2Edit_title").text(id + " 編輯頁面")
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/purchaseOrder/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#purchaseOrderIdEdit").val(e.id);
            $("#purchaseOrderListEdit").val(e.purchaseOrderList);
            $("#purchaseOrderMemberNameEdit").val(e.purchaseOrderMemberName);
            $("#purchaseOrderPredictDateEdit").val(moment(e.purchaseOrderPredictDateEdit).format('YYYY/MM/DD hh:mm'));

            $("#purchaseOrderCompleteDateEdit").val(moment(e.purchaseOrderCompleteDate).format('YYYY/MM/DD hh:mm'));
            $("#pGonNoEdit").val(e.pGonNo);
            $("#purchase2Edit").modal("show");

        }

    })
}

function assemblyEdit(id) {
    $("#assemblyEdit_title").text(id + " 編輯頁面")
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/assemblyList/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#assemblyIdEdit").val(e.id);
            $('#aListImageEdit').val(e.aListImage);
            $('#aListMemberNameEdit').val(e.aListMemberName);
            $('#aListToolEdit').val(e.aListTool);
            $('#aListPredictDateEdit').val(moment(e.aListPredictDate).format('YYYY/MM/DD hh:mm'));
            $('#aListCompleteDateEdit').val(moment(e.aListCompleteDate).format('YYYY/MM/DD hh:mm'));
            $("#aGonNoEdit").val(e.aGonNo);
            $("#assemblyEdit").modal("show");

        }

    })
}

function orderOutEdit(id) {
    $("#orderOutEdit_title").text(id + " 編輯頁面")

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderoutsource/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            if (e.oOrderImage != null)
                $('#oOrderImageEdit').attr("src", "data:image;base64," + e.oOrderImage);
            else
                $('#oOrderImageEdit').attr("src", "/res/img/upload_image.png");
            $("#oOrderIdEdit").val(e.id);
            // $('#oOrderImageEdit').val(e.oOrderImage);
            $('#oOrderScheduleEdit').val(e.oOrderSchedule);
            $('#oOrderMethodEdit').val(e.oOrderMethod);
            $('#oOrderContractorEdit').val(e.oOrderContractor);
            $('#oOrderPredictDateEdit').val(moment(e.oOrderPredictDate).format('YYYY/MM/DD hh:mm'));
            $('#oOrderCompleteDateEdit').val(moment(e.oOrderCompleteDate).format('YYYY/MM/DD hh:mm'));

            $("#oGonNoEdit").val(e.oGonNo);
            $("#orderOutEdit").modal("show");

        }
    })
}

function orderSelfEdit(id) {
    $("#orderSelfEdit_title").text(id + " 編輯頁面")
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderselfmade/getById",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': id,
        }),
        success: function (e) {
            $("#sOrderIdEdit").val(e.id);
            if (e.sOrderImage != null)
                $('#sOrderImageEdit').attr("src", "data:image;base64," + e.sOrderImage);
            else
                $('#sOrderImageEdit').attr("src", "/res/img/upload_image.png");
            $('#sOrderScheduleEdit').val(e.sOrderSchedule);
            $('#sOrderMethodEdit').val(e.sOrderMethod);
            $('#sOrderContractorEdit').val(e.sOrderContractor);
            $('#sOrderMemberNameEdit').val(e.sOrderMemberName);
            $('#sOrderMachineEdit').val(e.sOrderMachine);
            $('#sOrderToolEdit').val(e.sOrderTool);
            $('#sOrderProgramEdit').val(e.sOrderProgram);
            $('#sOrderSettingEdit').val(e.sOrderSetting);
            $('#sOrderCountEdit').val(e.sOrderCount);
            $('#sOrderMaterialEdit').val(e.sOrderMaterial);
            $('#sOrderPredictDateEdit').val(moment(e.sOrderPredictDate).format('YYYY/MM/DD hh:mm'));
            $('#sOrderCompleteDateEdit').val(moment(e.sOrderCompleteDate).format('YYYY/MM/DD hh:mm'));

            $("#sGonNoEdit").val(e.sGonNo);
            $("#orderSelfEdit").modal("show");

        }
    })
}

//create_content
function pOrderCreateContent() {
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/pOrder/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'pOutOrderId': $('#pOutOrderIdCreate').val(),
            'pInOrderId': $('#pInOrderIdCreate').val(),
            'pOrderClientNo': $('#pOrderClientNoCreate').val(),
            'pOrderPredictDate': new Date($('#pOrderPredictDateCreate').val()),
            'pOrderCompleteDate': new Date($('#pOrderCompleteDateCreate').val()),

        }),
        success: function () {
            pOrderTable.draw();
            $("#pOrderCreate").modal("hide");
        }

    })
    alert("ddddd");
}
function pOrderEditContent() {
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/pOrder/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#pOrderIdEdit').val(),
            'pOutOrderId': $('#pOutOrderIdEdit').val(),
            'pInOrderId': $('#pInOrderIdEdit').val(),
            'pOrderClientNo': $('#pOrderClientNoEdit').val(),
            'pOrderPredictDate': new Date($('#pOrderPredictDateEdit').val()),
            'pOrderCompleteDate': new Date($('#pOrderCompleteDateEdit').val()),

        }),
        success: function () {
            pOrderTable.draw();
            $("#pOrderEdit").modal("hide");
        }
    })
}
function pOrderDelete(id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/pOrder/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                pOrderTable.draw();
                alert("刪除成功")
            },
            error: function () {
                alert("刪除失敗")
            }

        })

}

function gonCreateContent(PorderNo) {
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/gon/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'porderNo': PorderNo,
            'createDate': $('#createDateCreate').val(),
            'modifyDate': $('#modifyDateCreate').val(),
        }),
        success: function (e) {
            console.log('api call back:' + e);
            GonNo = e;
            initPurchase(GonNo)
            $("#gon").modal("hide");
        }
    })
}
function gonEditContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/gon/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#gonIdEdit').val(),
            'porderNo': $('#porderNoEdit'),
            'createDate': $('#createDateEdit').val(),
            'modifyDate': $('#modifyDateEdit').val()

        }),
        success: function () {
            gonTable.draw();
            $("#gonEdit").modal("hide");
        }
    })
}
function gonDelete(id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/gon/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                gonTable.draw();
                alert("刪除成功")
            },
            error: function () {
                alert("刪除失敗")
            }

        })

}

function purchase2CreateContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/purchaseOrder/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'purchaseOrderList': 1,
            'purchaseOrderMemberName': $('#purchaseOrderMemberNameCreate').val(),
            'purchaseOrderPredictDate': new Date($('#purchaseOrderPredictDateCreate').val()),
            'purchaseOrderCompleteDate': new Date($('#purchaseOrderCompleteDateCreate').val()),
            'pGonNo': $('#pGonNoCreate').val(),
        }),
        success: function () {
            purchaseTable2.draw();
            $("#purchase2Create").modal("hide");
        }

    })
}
function purchase2EditContent() {

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/purchaseOrder/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#purchaseOrderIdEdit').val(),
            'purchaseOrderList': $('#purchaseOrderListEdit').val(),
            'purchaseOrderMemberName': $('#purchaseOrderMemberNameEdit').val(),
            'purchaseOrderPredictDate': new Date($('#purchaseOrderPredictDateEdit').val()),
            'purchaseOrderCompleteDate': new Date($('#purchaseOrderCompleteDateEdit').val()),
            'pGonNo': $('#pGonNoEdit').val(),
        }),
        success: function () {
            purchaseTable2.draw();
            $("#purchase2Edit").modal("hide");
        }
    })
}
function purchase2Delete(id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/purchaseOrder/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                purchaseTable2.draw();
                alert("刪除成功")
            },
            error: function () {
                alert("刪除失敗")
            }

        })

}

function assemblyCreateContent() {
    // $("#pOrderTable").prepend("<button class=\"btn btn-secondary btn-round btn-block\" data-toggle=\"modal\" data-target=\".animate\" data-ui-class=\"a-fadeUp\" >"+"123"+
    // "<a onclick=\"purchaseCreate()\">新增</a>"+
    // "</button>");

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/assemblyList/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'aListImage': $('#aListImageCreate').val(),
            'aListMemberName': $('#aListMemberNameCreate').val(),
            'aListTool': $('#aListToolCreate').val(),
            'aListPredictDate': new Date($('#aListPredictDateCreate').val()),
            'aListCompleteDate': new Date($('#aListCompleteDateCreate').val()),
            'aGonNo': $('#aGonNoCreate').val(),

        }),
        success: function () {

            assemblyTable.draw();
            $("#assemblyCreate").modal("hide");
        }

    })


}
function assemblyEditContent() {
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/assemblyList/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#assemblyIdEdit').val(),
            'aListImage': $('#aListImageEdit').val(),
            'aListMemberName': $('#aListMemberNameEdit').val(),
            'aListTool': $('#aListToolEdit').val(),
            'aListPredictDate': new Date($('#aListPredictDateEdit').val()),
            'aListCompleteDate': new Date($('#aListCompleteDateEdit').val()),
            'aGonNo': $('#aGonNoEdit').val(),
        }),
        success: function () {
            assemblyTable.draw();
            $("#assemblyEdit").modal("hide");
        }
    })
}
function assemblyDelete(id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/assemblyList/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                assemblyTable.draw();
                alert("刪除成功")
            },
            error: function () {
                alert("刪除失敗")
            }

        })

}

async function orderOutCreateContent() {

    if ($('#UploadoOrderImageCreate')[0].files.length != 0) {
        const arrayBuffer = await getArrayBuffer($('#UploadoOrderImageCreate')[0].files[0]);
        var image = Array.from(new Uint8Array(arrayBuffer));
    }
    else
        var image = null;
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderoutsource/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'oOrderImage': image,
            'oOrderSchedule': $('#oOrderScheduleCreate').val(),
            'oOrderMethod': $('#oOrderMethodCreate').val(),
            'oOrderContractor': $('#oOrderContractorCreate').val(),
            'oOrderPredictDate': new Date($('#oOrderPredictDateCreate').val()),
            'oOrderCompleteDate': new Date($('#oOrderCompleteDateCreate').val()),
            'oGonNo': $('#oGonNoCreate').val(),
        }),
        success: function () {
            orderOutTable.draw();
            $("#orderOutCreate").modal("hide");
        }
    })
}

function getArrayBuffer(file) {
    return new Promise((resolve, reject) => {
        // STEP 3: 轉成 ArrayBuffer, i.e., reader.result
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            resolve(reader.result);
        });
        reader.readAsArrayBuffer(file);
    });
}

async function orderOutEditContent() {
    if ($('#UploadoOrderImageEdit')[0].files.length != 0) {
        const arrayBuffer = await getArrayBuffer($('#UploadoOrderImageEdit')[0].files[0]);
        var image = Array.from(new Uint8Array(arrayBuffer));
    }
    else
        var image = null;
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderoutsource/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#oOrderIdEdit').val(),
            'oOrderImage': image,
            'oOrderSchedule': $('#oOrderScheduleEdit').val(),
            'oOrderMethod': $('#oOrderMethodEdit').val(),
            'oOrderContractor': $('#oOrderContractorEdit').val(),
            'oOrderPredictDate': new Date($('#oOrderPredictDateEdit').val()),
            'oOrderCompleteDate': new Date($('#oOrderCompleteDateEdit').val()),
            'oGonNo': $('#oGonNoEdit').val(),
        }),
        success: function () {
            orderOutTable.draw();
            $("#orderOutEdit").modal("hide");
        }
    })
}
function orderOutDelete(id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/orderoutsource/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                orderOutTable.draw();
                alert("刪除成功")
            },
            error: function () {
                alert("刪除失敗")
            }

        })

}

async function orderSelfCreateContent() {
    if ($('#UploadsOrderImageCreate')[0].files.length != 0) {
        const arrayBuffer = await getArrayBuffer($('#UploadsOrderImageCreate')[0].files[0]);
        var image = Array.from(new Uint8Array(arrayBuffer));
    }
    else
        var image = null;
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderselfmade/Create",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'sOrderImage': image,
            'sOrderSchedule': $('#sOrderScheduleCreate').val(),
            'sOrderMethod': $('#sOrderMethodCreate').val(),
            'sOrderContractor': $('#sOrderContractorCreate').val(),
            'sOrderMemberName': $('#sOrderMemberNameCreate').val(),
            'sOrderMachine': $('#sOrderMachineCreate').val(),
            'sOrderTool': $('#sOrderToolCreate').val(),
            'sOrderProgram': $('#sOrderProgramCreate').val(),
            'sOrderSetting': $('#sOrderSettingCreate').val(),
            'sOrderCount': $('#sOrderCountCreate').val(),
            'sOrderMaterial': $('#sOrderMaterialCreate').val(),
            'sOrderPredictDate': new Date($('#sOrderPredictDateCreate').val()),
            'sOrderCompleteDate': new Date($('#sOrderCompleteDateCreate').val()),
            'sGonNo': $('#sGonNoCreate').val(),


        }),
        success: function () {
            orderSelfTable.draw();
            $("#orderSelfCreate").modal("hide");
        }

    })
}
async function orderSelfEditContent() {
    if ($('#UploadsOrderImageEdit')[0].files.length != 0) {
        const arrayBuffer = await getArrayBuffer($('#UploadsOrderImageEdit')[0].files[0]);
        var image = Array.from(new Uint8Array(arrayBuffer));
    }
    else
        var image = null;
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/orderselfmade/Update",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            'id': $('#sOrderIdEdit').val(),
            'sOrderImage': image,
            'sOrderSchedule': $('#sOrderScheduleEdit').val(),
            'sOrderMethod': $('#sOrderMethodEdit').val(),
            'sOrderContractor': $('#sOrderContractorEdit').val(),
            'sOrderMemberName': $('#sOrderMemberNameEdit').val(),
            'sOrderMachine': $('#sOrderMachineEdit').val(),
            'sOrderTool': $('#sOrderToolEdit').val(),
            'sOrderProgram': $('#sOrderProgramEdit').val(),
            'sOrderSetting': $('#sOrderSettingEdit').val(),
            'sOrderCount': $('#sOrderCountEdit').val(),
            'sOrderMaterial': $('#sOrderMaterialEdit').val(),
            'sOrderPredictDate': new Date($('#sOrderPredictDateEdit').val()),
            'sOrderCompleteDate': new Date($('#sOrderCompleteDateEdit').val()),
            'sGonNo': $('#sGonNoEdit').val(),
        }),
        success: function () {
            orderSelfTable.draw();
            $("#orderSelfEdit").modal("hide");
        }
    })
}
function orderSelfDelete(id) {
    var confirmStatus = confirm("是否刪除?");

    if (confirmStatus)
        $.ajax({
            type: "POST",
            headers: { 'Authorization': getCookie("token") },
            url: webApiUrl + "/orderselfmade/delete",
            contentType: "application/json;charset=utf-8",
            async: false,
            data: JSON.stringify({
                'id': id,
            }),
            success: function () {
                orderSelfTable.draw();
                alert("刪除成功")
            },
            error: function () {
                alert("刪除失敗")
            }

        })

}

