function bt(){
    $("#addbutton").dialog();
}
function add(){
    name = document.build.name.value;
    workid =  document.build.workid.value;
    specialty =  document.build.specialty.value;
    license =  document.build.license.value;
    $("#memberblock").prepend("<div class=\"nameblock\" >"+
    "<img class=\"photo\" src=\"http://standaloneinstaller.com/upload/avatar.png\" >"+
    "<div class=\"name\">"+
      "<div>姓名:"+name+"</div>"+
      "<div>工號:"+workid+"</div>"+
    "<div>專長:"+specialty+"</div>"+
   "<div>證照:"+license+"</div>"+
    "</div>"+
    "<br/>"+         
  "</div>")
}