examId = 0
function EditExam(id) {
    examId = id;
    $("#EditModal1").modal('show');
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/examtemplate/GetExamDetail",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            "Id": examId
        }),
        success: function (e) {
            console.log(e);
            $("#Edit1-modal-panel").find(":text,select,textarea").each(function () {
                $('#' + $(this)[0].id).val(e.data[0][$(this)[0].id.replace("Edit", "")]);
                console.log($(this));
            });
            $("#Edit1-modal-panel").find("img").each(function () {
                if (e.data[0][$(this)[0].id.replace("Edit", "")] != null) {
                    $('#' + $(this)[0].id).attr("src", "data:image;base64," + e.data[0][$(this)[0].id.replace("Edit", "")]);
                }
                else
                    $('#' + $(this)[0].id).attr("src", "/res/img/upload_image.png");
            });
        }
    });
}
function EditNextPage() {
    formData = new FormData();
    formData.append("GroupId", getCookie("GroupId"));
    formData.append("AccountId", getCookie("id"));
    formData.append("ExamId", examId);
    var check = false;
    $("#Edit1-modal-panel").find(":text,select,textarea").each(function () {
        if ($(this)[0].value == "")
            check = true;
    });

    $("#Edit1-modal-panel").find("img").each(function () {
        if ($(this)[0].src == "http://" + window.location.host + "/res/img/upload_image.png")
            check = true;
    });

    if (check) {
        var confirmStatus = confirm("你有未輸入的資料是否繼續送出?");
        if (!confirmStatus) return false;
    }

    $("#Edit1-modal-panel").find(":text,select,textarea").each(function () {
        if ($(this)[0].value != "")
            formData.append($(this)[0].id.replace("Edit", ""), $(this)[0].value)
        else
            formData.append($(this)[0].id.replace("Edit", ""), "")
    });

    $("#Edit1-modal-panel").find(":file").each(function () {
        if ($(this)[0].files.length != 0)
            formData.append($(this)[0].id.replace("Edit", ""), $(this)[0].files[0])
    });

    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/examtemplate/GetExampleContent",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            "examId": examId
        }),
        success: function (e) {
            if (e.data.length == 0) {
                alert("題目有問題");
                return;
            }

            EditItem = 0;
            EditExampleContent = e.data;

            $("#Edit2-modal-panel").find(":text,select,textarea").each(function () {
                $('#' + $(this)[0].id).val(e.data[0][$(this)[0].id.replace("Edit", "")]);
            });


            $("#Edit2-modal-panel").find("img").each(function () {
                if (e.data[0][$(this)[0].id.replace("Edit", "")] != null)
                    $('#' + $(this)[0].id).attr("src", "data:image;base64," + e.data[0][$(this)[0].id.replace("Edit", "")]);
                else
                    formData.append($(this)[0].id.replace("Edit", ""), "")
            });

            $("#Edit2-modal-panel").find("audio").each(function () {
                $('#' + $(this)[0].id).attr("src", "data:audio/wav;base64," + e.data[0][$(this)[0].id.replace("Edit", "")]);
            });
            console.log(EditExampleContent.length);
            console.log(EditItem);
            if (EditExampleContent.length - 1 == EditItem)
                $('#EditNextItemBtn').hide();
            else
                $('#EditNextItemBtn').show();
            $("#EditModal2").modal('show');

        }
    });
}
function EditNextItem() { // 建立初始化
    EditItem++;
    var check = false;
    $("#Edit2-modal-panel").find(":text,select,textarea").each(function () {
        if ($(this)[0].value == "")
            check = true;
    });
    $("#Edit2-modal-panel").find("img").each(function () {
        if ($(this)[0].src == "http://" + window.location.host + "/res/img/upload_image.png")
            check = true;
    });

    if (check) {
        var confirmStatus = confirm("你有未輸入的資料是否繼續送出?");
        if (!confirmStatus) return false;
    }
    formData.append("Length", length);
    $("#Edit2-modal-panel").find(":text,select,textarea").each(function () {
        if ($(this)[0].value != "") {
            formData.append($(this)[0].id.replace("Edit", ""), $(this)[0].value)
            $(this).val("");
        }
        else
            formData.append($(this)[0].id.replace("Edit", ""), " ")

    });

    $("#Edit2-modal-panel").find(":file").each(function () {
        if ($(this)[0].files.length != 0) {
            formData.append($(this)[0].id.replace("Edit", ""), $(this)[0].files[0])
            $(this).removeAttr('src');
        }
    });
    $("#Edit2-modal-panel").find(":text,select,textarea").each(function () {
        $('#' + $(this)[0].id).val(EditExampleContent[EditItem][$(this)[0].id.replace("Edit", "")]);
    });

    $("#Edit2-modal-panel").find("img").each(function () {
        $('#' + $(this)[0].id).attr("src", "data:image;base64," + EditExampleContent[EditItem][$(this)[0].id.replace("Upload", "").replace("Edit", "")]);
    });

    $("#Edit2-modal-panel").find("audio").each(function () {
        $('#' + $(this)[0].id).attr("src", "data:audio/wav;base64," + EditExampleContent[EditItem][$(this)[0].id.replace("Upload", "").replace("Edit", "")]);
    });
    console.log(EditExampleContent.length);
    console.log(EditItem);
    if (EditExampleContent.length - 1 == EditItem)
        $('#EditNextItemBtn').hide();
    else
        $('#EditNextItemBtn').show();
}
function EditExamContent() {
    var check = false;
    $("#Edit2-modal-panel").find(":text,select,textarea").each(function () {
        if ($(this)[0].value == "")
            check = true;
    });
    $("#Edit2-modal-panel").find("img").each(function () {
        if ($(this)[0].src == "http://" + window.location.host + "/res/img/upload_image.png")
            check = true;
    });

    if (check) {
        var confirmStatus = confirm("你有未輸入的資料是否繼續送出?");
        if (!confirmStatus) return false;
    }

    $("#Edit2-modal-panel").find(":text,select,textarea").each(function () {
        if ($(this)[0].value != "") {
            formData.append($(this)[0].id.replace("Edit", ""), $(this)[0].value)
        }
        else
            formData.append($(this)[0].id.replace("Edit", ""), " ")

    });
    $("#Edit2-modal-panel").find(":file").each(function () {
        if ($(this)[0].files.length != 0) {
            formData.append($(this)[0].id.replace("Edit", "").replace("Upload", ""), $(this)[0].files[0])
        }
    });

    // 建立初始化
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/examtemplateple/UpdateExam",
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function () {
            dataTables.draw();
            //InitModal();
            $("#Edit1-modal-panel").find(":text,select,textarea").each(function () {
                $(this).val("");
            });
            $("#Edit1-modal-panel").find("img,audio").each(function () {
                $(this).removeAttr('src');
            });
            $("#Edit2-modal-panel").find(":text,select,textarea").each(function () {
                $(this).val("");
            });
            $("#Edit2-modal-panel").find("img,audio").each(function () {
                $(this).removeAttr('src');
            });

            $('#EditModal1').modal('hide');
            $('#EditModal2').modal('hide');
        },
    })
}

