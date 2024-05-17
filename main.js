a=0;
function addcomment(){
    comment=document.getElementById('comment');
    
    document.getElementById('box-container').innerHTML+=` <div class="box">
    <p id="comment${a}">${comment.value}</p>
  
    <li>
        <ul><button id="like${a}" onclick="like(${a})" >LIKE</button></ul>
        <ul><button onclick="deletecomment(this)">DELETE</button></ul>
        <ul><button onclick="editcomment(${a})">EDIT</button></ul>
    </li>
</div>`;

a++;
comment.value="";
}
function deletecomment(e)
{
    e.parentElement.parentElement.parentElement.remove();
}
function like(e){
    btnid="like"+e;
    document.getElementById(btnid).style.backgroundColor="red";
}
function editcomment(e)
{
    cmid="comment"+e;
    c=document.getElementById(cmid).innerText;
    document.getElementById('comment').value=c;
    document.getElementById(cmid).parentElement.remove();
}