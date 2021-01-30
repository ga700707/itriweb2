var printWindow;
async function PrintQRCode() {
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/sm/GetAllStudent",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            "AccountId": getCookie('id')
        }),
        success: function (e) {
            var tab_text = " ";
            var student = [];
            for (var i = 0; i < e.length; i++) {
                student.push(e[i])
            }
            tab_text = tab_text + "<button onclick='window.print();'>列印</button>"

            for (var a = 0; a < student.length; a++) {
                tab_text = tab_text + "<table>"
                tab_text = tab_text + "<tr><td><b><strong>第" + a + "位</strong></b></td></tr>"
                tab_text = tab_text + "<tr><td>學生帳號" + student[a].userName + " </td></tr>"
                tab_text = tab_text + "<tr><td>學生暱稱" + student[a].nickName + " </td></tr>"

                tab_text = tab_text + "<tr><td><img src= \"data:image/jpeg;base64," + student[a].qrcode + "\" width = \"200\" height = \"150\"> </td></tr>"

                tab_text = tab_text + "</table>";

            }


            tab_text = tab_text.replace(/"([^"]*)"/g, "$1") //過濾引號
            tab_text = tab_text.replace(/null/g, "") //過濾null變空白
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");

            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
            {
                // printWindow = window.open('', '', 'height=400,width=800');
                // printWindow.document.write(tab_text);
                // printPDF()
                txtArea1.document.open("txt/html", "replace");
                txtArea1.document.write(tab_text);
                txtArea1.document.close();
                txtArea1.focus();
                sa = txtArea1.document.execCommand("SaveAs", true, "Say Thanks to Sumit.xls");
            }
            else {
                printWindow = window.open('', '', 'height=400,width=800');
                //other browser not tested on IE 11
                printWindow.document.write(tab_text);
                printWindow.document.close();
                return;
            }
        },
    });
}
function DownLoadImg() {
    var zip = new JSZip();
    // 创建一个被用来打包的名为Hello.txt的文件
    // 创建一个名为images的新的文件目录
    var img = zip.folder("images");
    // 这个images文件目录中创建一个base64数据为imgData的图像，图像名是smile.gif
    
    $.ajax({
        type: "POST",
        headers: { 'Authorization': getCookie("token") },
        url: webApiUrl + "/sm/GetAllStudent",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            "AccountId": getCookie('id')
        }),
        success: function (e) {


            for (var a = 0; a < e.length; a++) {
                imgData = e[a].qrcode
                img.file(e[a].number+".jpg", imgData, { base64: true });


            }

            img.file("smile.gif", imgData, { base64: true });
            // 把打包内容异步转成blob二进制格式
            zip.generateAsync({ type: "blob" }).then(function (content) {
                // content就是blob数据，这里以example.zip名称下载    
                // 使用了FileSaver.js  
                saveAs(content, "example.zip");
            });
        },
    });
   
}
function printPDF() {
    printWindow.print();

}
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
