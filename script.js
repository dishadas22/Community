var btn=document.queryselector('.hambtn');
var btnshow=true;
var menushow=document.getElementsByClassName("hamburger-menu");
btn.onclick()= function(){
    if(btnshow==true){
        menushow.style.display=flex;
        btnshow=false;

    }
    else if(btnshow==false){
        menushow.style.display=none;
        btnshow=true;
    }
}