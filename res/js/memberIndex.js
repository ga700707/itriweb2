var webApiUrl = "http://192.168.232.128:49705";

function mainInitial() {
    $("#loginForm").hide();
    $("#mainPage").show();
    $("body").css("background-image", "none");
    $("#iframe-content").attr("src", "/Views/MemberManage/MemberProfile.html");
    var generateMenuType = (getCookie('memberType') == 'T') ? 'T' : 0;
    $.getScript("/res/data/menuData.js")
        .done(function () {
            $.each(menuData[generateMenuType], function () {
                $("#menu").append(
                    getMenuItem(this)
                );
            });
            feather.replace();
        })
        .fail(function (jqxhr, settings, exception) {
            $("div.log").text("Triggered ajaxError handler.");
        });
}

var getMenuItem = function (itemData) {
    var item = $("<li>", {
        class: 'nav-item',
        onclick: 'changeContent("' + itemData.title + '","' + itemData.views + '","' + itemData.command + '")'
    }).append(
        $("<a>", {
            href: itemData.link,
            html: "<span data-feather='" + itemData.icon + "'></span>" + itemData.title,
            class: 'nav-link'
        }));
    if (itemData.sub) {
        var subList = $("<ul>", {
            class: 'nav flex column mb-2'
        });
        $.each(itemData.sub, function () {
            subList.append(getMenuItem(this));
        });
        item.append(subList);
    }
    return item;
};

function changeContent(title, views, command) {
    $("#iframe-title").text(title);
    $("#iframe-content").attr("src", "/Views/" + views + "/" + command + ".html");
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function postWebApi(actions, dataField) {
    $.ajax({
        type: "post",
        url: parent.webApiUrl + actions,
        data: dataField,
        contentType: "application/json",
        error: function (e) {
            return JSON.stringify({
                "result": false,
                "data": e
            });
        },
        success: function (e) {
            return JSON.stringify({
                "result": true,
                "data": e
            });
        }
    });
}

function setCookie(cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue + ";path=/";
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var cookieDecode = decodeURIComponent(document.cookie);
    var cookieItem = cookieDecode.split(';');
    for (var i = 0; i < cookieItem.length; i++) {
        var item = cookieItem[i];
        while (item.charAt(0) === ' ') {
            item = item.substring(1);
        }
        if (item.indexOf(name) === 0) {
            return item.substring(name.length, item.length);
        }
    }
    return "";
}

function memberLogin(form) {
    $.ajax({
        type: "POST",
        url: webApiUrl + "/member/login",
        contentType: "application/json;charset=utf-8",
        async: false,
        data: JSON.stringify({
            "username": form.inputEmail.value,
            "password": form.inputPassword.value
        }),
        success: function (result) {
            setCookie("memberLogin", result.login);
            setCookie("memberId", result.id);
            setCookie("memberName", result.nickname);
            setCookie("memberType", result.type);
            setCookie("memberToken", result.token);
            setCookie("role", "member");
            mainInitial(null);
            form.reset();
            $("#menu").empty();
        }
    });
    return false;
}

$("#signOut").click(function () {
    alert("log out");
    memberLogout();
    return false;
});

function memberLogout() {
    setCookie("memberLogin", "", -1);
    setCookie("memberId", "", -1);
    setCookie("memberName", "", -1);
    setCookie("memberType", "", -1);
    setCookie("memberToken", "", -1);
    $("#loginForm").show();
    $("#mainPage").hide();
    $("body").css("background-image", "url('/res/img/accountLogin.jpg')");
}