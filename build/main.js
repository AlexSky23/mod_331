(()=>{"use strict";var e=function(e,n){
        var r=document.createElement("ul");
        r.className="menu";
        var t="";
    return["Главная","Обо мне","Портфолио","Блог"].forEach((function(e){
        t+="<li>"+e+"</li>"})),
        r.innerHTML=t,r}();
    document.body.appendChild(e)})();