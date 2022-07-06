let content = document.querySelector('.formContent');
let pass1 = document.getElementById('pass1');
let pass2 = document.getElementById('pass2');
let btn = document.getElementById('btn');
let txt = document.getElementById('infoPass');

function confirmPass()
{
  if(document.mainForm.pass1.value === document.mainForm.pass2.value)
  {
    pass2.style.backgroundColor = 'rgb(180, 255, 191)';
    pass2.style.border = '2px solid rgb(0, 150, 0)';
    btn.style.background = '#0568aa';
    btn.disabled = false;
  }
  else
  {
    pass2.style.backgroundColor = 'rgb(255, 200, 219)';
    pass2.style.border = '2px solid red';
    btn.style.background = '#3893cf';
    btn.disabled = true;
  }
}

function showTxt()
{
  txt.hidden = false;
}

function hideTxt()
{
  txt.hidden = true;
}