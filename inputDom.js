
document.getElementById('msg').hidden=true;
let dom = document.createDocumentFragment();
let div = document.createElement('div');
div.setAttribute('id','input_background');
let input = document.createElement('input');
input.setAttribute('id','inputTag');
input.setAttribute("onkeyup","return isNumber(event)");
function isNumber(evnt){
    let value = evnt.srcElement.value;
    value = (""+value).charAt(0);
    if(value>0&&value<10){
        evnt.srcElement.value=value;
    }else{
        alert('enter valid value');
        evnt.srcElement.value="";
    }
}
for(let j=0;j<9;j++){
    for(let i=0;i<9;i++){
        let clonedNode = input.cloneNode(true);
        clonedNode.setAttribute('class',j+"@"+i);
        div.appendChild(clonedNode);
        if(i%3==2){
            let tabbreak = document.createElement("span");
            tabbreak.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp";
            div.appendChild(tabbreak);
        }
    }
    let linebreak = document.createElement("br");
        div.appendChild(linebreak);
    if(j%3===2){
        let linebreak = document.createElement("br");
        div.appendChild(linebreak);
    }
}
dom.appendChild(div);
document.getElementById('inputArea').appendChild(dom);

