/* globals Chart:false, feather:false */

var getMenuItem = function (itemData) {
    var item = $("<li>", {
        class: 'nav-item'
    })
        .append(
            $("<a>", {
                href: '#' + itemData.link,
                html: "<span data-feather='" + itemData.icon + "'></span>" + itemData.name,
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

var $menu = $("#menu");
$.each(data.menu, function () {
    $menu.append(
        getMenuItem(this)
    );
});

feather.replace();