
function importf() {//匯入
    ExcelData = new FormData();

    var obj = document.getElementById("UploadExcelFile"); // js 獲取檔案物件

    if (!obj.files) {
        return;
    }
    var file = obj.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, { type: 'binary' });
        outputWorkbook(workbook)
    };
    reader.readAsBinaryString(file);
}

function outputWorkbook(workbook) {
    var sheetNames = workbook.SheetNames; // 工作表名称集合
    sheetNames.forEach(name => {
        //console.log(JSON.stringify(XLSX.utils.sheet_to_csv(worksheet)))
        var worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表

        var csv = XLSX.utils.sheet_to_csv(worksheet).replace(/\r\n/g, "")
        //console.log(csv)
        var rows = csv.split('\n');

        rows.pop(); // 最后一行没用的
        rows.forEach(function (row, idx) {
            var Gender = 0;
            var goOutWeekends = 0;
            var overnightWeekends = 0;
            var goOutWeekdays = 0;

            var columns = row.split(',');
            if (idx > 0) {

                if (columns[4] = "男")
                    Gender = 0;
                else
                    Gender = 1;
                for (var k in GoOutWeekends) {
                    if (GoOutWeekends[k] == columns[8]) {
                        goOutWeekends = k;
                        break;
                    }
                }
                for (var k in OvernightWeekends) {
                    if (OvernightWeekends[k] == columns[9]) {

                        overnightWeekends = k;
                        break;
                    }
                }
                for (var k in GoOutWeekdays) {
                    if (GoOutWeekdays[k] == columns[10]) {
                        goOutWeekdays = k;
                        break;
                    }
                }
                $.ajax({
                    type: "POST",
                    headers: { 'Authorization': getCookie("token") },
                    url: webApiUrl + "/sm/Create",
                    contentType: "application/json;charset=utf-8",
                    async: false,
                    data: JSON.stringify({
                        //Id, AccountId, Status, Number, ChineseName, EnglishName, Gender, Year, Class, ClassNumber, GoOutWeekends, GoOutWeekdays, OvernightWeekends
                        'status': 1,
                        'Number': columns[0],
                        'CardNumber': columns[1],

                        'ChineseName': columns[2],
                        'EnglishName': columns[3],
                        'Gender': Gender,
                        'Year': columns[5],
                        'Class': columns[6],
                        'ClassNumber': columns[7],
                        'GoOutWeekends': goOutWeekends,
                        'OvernightWeekends': overnightWeekends,
                        'GoOutWeekdays': goOutWeekdays,
                        'AccountId': getCookie('id'),
                        'language': 0,
                    }),
                    success: function () {
                        dataTables.draw();
                    }

                })
            };
        });

    });
}

// GroupId, AccountId, Level, Category, Reference, Volume, Class, Theme, Result, TxtExampleGroup, PicExampleGroup, PicExampleGroupMark, VoiceExampleGroup
// TxtExampleGroup, PicExampleGroup, PicExampleGroupMark, VoiceExampleGroup, 
// TxtExample, VoiceExample, VoiceExampleMark, PicExample, PicExampleMark, txtA, txtB, 
//txtC, txtD, txtE, txtF, Answer, PicA, PicAMark, PicB, PicBMark, PicC, PicCMark, VoiceA
//, VoiceAMark, VoiceB, VoiceBMark, VoiceC, VoiceCMark




