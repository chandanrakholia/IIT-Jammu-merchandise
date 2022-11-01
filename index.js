document.getElementById('change_next').onclick = changeColor;  
// document.getElementById('change_next').onclick = changefont;  
document.getElementById('change_prev').onclick = changeColor;   
function changefont(){
    var fontType = [ "Arial", "Verdana", "Helvetica"];
    var num;
    num=Math.floor(Math.random()*3);
    document.body.style.fontFamily=fontType[num];
    return false;
}
function changeColor() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.color = "#"+randomColor;
    return changefont();
}  
 
