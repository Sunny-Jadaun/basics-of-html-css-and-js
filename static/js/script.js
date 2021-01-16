function ageInDays(){
    var birthyear=prompt("Enter your birth-year");
    var ageindays=(2021-birthyear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('You are '+ageindays+' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset()
{
    document.getElementById('ageInDays').remove();
}