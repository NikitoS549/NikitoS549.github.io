function kvadrt()
{
d=document
var a = Number(d.form1.num1.value)//для поля ввода a
var b = Number(d.form1.num2.value)//для поля ввода b
var c = Number(d.form1.num3.value)//для поля ввода c
var diz = eval(Math.pow(b,2)-4*a*c)//расчёт дискримина́нта
var x1 = Number(d.form1.x1.value)//для поля вывода х1
if(a!=0 && b!=0 && c!=0)
{
x1 = eval(diz);
}
d.form1.x1.value=x1;
}

function Srav()
{
    d=document
    var a = Number(d.form2.x1.value)//для поля ввода a
    var b = Number(d.form2.x2.value)//для поля ввода b
    var y2 = Math.max(a,b)//Выбор максимального значения
    d.form2.y2.value=y2;
}

function Imya()
{
d=document
var admin, name; // можно объявить две переменные через запятую
name = "Никитос";
admin = name;
alert( admin ); // "Никита"
}

function Vozrast()
{
d=document
var age1 = Number(d.form4.x1.value)
var age = ('Вам ' + age1 + ' лет?');
var answer1 = confirm(age);
if (answer1 == true) 
{ alert('Хорошо, ваш возраст ' + age1 + ' записан'); } 
else
{ alert('Введите ваш возраст заново!'); }
}

function NewName()
{
d=document
var a = prompt('Введите новое имя:', 'Никита');
alert('Сохраненно');
d.form10.x1.value = a;
}

function NewSecName()
{
d=document
var a = prompt('Введите новое имя:', 'Нехорошев');
alert('Сохраненно');
d.form11.x2.value = a;
}


function Resum()
{
    d=document
    var x1;
    x1 = document.getElementById('one');
    if(x1.checked)
    {alert('Спасибо :)');}
    
    var x2;
    x2 = document.getElementById('two');
        if(x2.checked)
    {alert('Вы мне тоже :(');}
}

function End()
{
    var x3 = (d.form6.x3.value) 
    var x4 = (d.form6.x4.value)
    var x5 = (d.form6.x5.value)
}    alert('Я вас запомнил!')
}