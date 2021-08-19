function updateMenuList() {

    list = lists.students; //lists.weeks
    html = '';

    foreach(item in list)
    {
        html += item;
    }

    menu.innerhtml = html;
}