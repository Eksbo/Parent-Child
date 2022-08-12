"use script" ;
// Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу. 
// let elem = document.querySelector('#div') ;
// let btn = document.querySelector('#btn') ;
// btn.addEventListener('click' , func );
// function func() {

// elem.style.width = '80px';
// elem.style.height = '80px';
// elem.style.background = 'green';
   

// };


// Дан див с текстом и кнопка. 
// По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон. 
// let elem = document.querySelector('#div') ;
// let btn = document.querySelector('#btn') ;
// btn.addEventListener('click' , func );
// function func() {
// elem.style.fontSize = '20px';
// elem.style.borderTop = '8px solid green';
// };

// Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left. 
// let li = document.querySelectorAll('#li') ;
// let btn = document.querySelector('#btn') ;
// btn.addEventListener('click' , func );
// function func () {
//     for ( let k of li)
// {
// k.style.cssFloat='left'
// } ;
// } ;


// Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. 
// Пусть по нажатию на каждую кнопку заданное действие 
// происходит с абзацем (становится красным, например).
// let p = document.querySelector('#p');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// let btn3= document.querySelector('#btn3');

// btn1.addEventListener('click' , function () { p.classList.toggle('perText')}) ;
// btn2.addEventListener('click' , function () { p.classList.toggle('fw800')}) ;
// btn3.addEventListener('click' , function () { p.classList.toggle('color')}) ;


//

// Свойство firstElementChild содержит первый дочерний элемент. 
// Дочерними элементами считаются все теги, которые непосредственно 
// расположены внутри блока. Если у элемента нет дочерних элементов - возвращается null.
// Синтаксис
// элемент.firstElementChild


// Свойство lastElementChild хранит в себе последний дочерний элемент. 
// Дочерними элементами считаются все теги, которые непосредственно
//  расположены внутри блока. Если у элемента нет дочерних элементов - 
//  возвращается null.
// Синтаксис
// элемент.lastElementChild

// Свойство children хранит в себе псевдомассив дочерних элементов.
//  Дочерними элементами считаются все теги, которые непосредственно расположены 
//  внутри блока.
// Синтаксис
// элемент.children



// Свойство parentElement содержит родительский элемент.
// Синтаксис
// элемент.parentElement


//  Метод closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор,
//  при этом сам элемент тоже включается в поиск.
// Синтаксис
// элемент.closest('селектор')


// Свойство previousElementSibling содержит предыдущий элемент, находящийся 
// в этом же родителе. Если такого элемента нет - возвращается null.
// Синтаксис
// элемент.previousElementSibling


//  Свойство nextElementSibling содержит следующий элемент, находящийся в этом же родителе. 
// Если такого элемента нет - возвращается null.
// Синтаксис
// элемент.nextElementSibling


// Дан элемент #elem:
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>

// Найдите первого потомка этого элемента и сделайте его текст красного цвета. 
// let ul = document.querySelector('#elem') ;
// ul.firstElementChild.classList.add('color');


// Дан элемент #elem:
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>

// Найдите последнего потомка этого элемента и сделайте его текст красного цвета. 
// let ul = document.querySelector('#elem') ;
// ul.lastElementChild.classList.add('color');

// Дан элемент #elem:
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>

// Найдите всех потомков этого элемента и добавьте им в конец текст '!'. 
// let ul = document.querySelector('#elem') ;
// let arr =ul.children ;
// for ( let k of arr)
// {
//     k.textContent += '@#$!'
// }


// Дан элемент #elem:
// <div>
// 	<ul>
// 		<li>text</li>
// 		<li>text</li>
// 		<li id="elem">text</li>
// 		<li>text</li>
// 		<li>text</li>
// 	</ul>
// </div>

// Найдите его родителя и задайте ему красную границу. 
// let li = document.querySelector('#elem') ;
// let papa = li.parentElement ;
// papa.style.display = 'block' ;
// papa.style.borderBottom = "4px solid red"


//  Дан элемент:
// <header>
// 	<div>
// 		<p>
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>

// Найдите ближайшего родителя этого элемента, являющегося тегом div. 
// let sp = document.querySelector('#elem') ;
// let papa = sp.closest('div') ;
// console.log(papa);
// papa.style.border= ' 4px solid green'

//  Дан элемент:
// <header>
// 	<div class="www">
// 		<p class="www">
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>

// Найдите ближайшего родителя этого элемента, являющегося элементом с классом www. 
// let sp = document.querySelector('#elem') ;
// let papa = sp.closest('.www') ;
// console.log(papa);

// Дан элемент #elem:
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>

// Найдите его соседа сверху и добавьте ему в конец текст '!'. 
// let li = document.querySelector('#elem') ;
// li.classList.add('color') ;
// let prev = li.previousElementSibling ;
// prev.textContent += '!';


// Дан элемент #elem:
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>

// Найдите его соседа снизу его соседа снизу
//  (следующий элемент за соседним)
//   и добавьте ему в конец текст '!'. 
// let li = document.querySelector('#elem') ;
// li.classList.add('color') ;
// let next = li.nextElementSibling ;
// next.textContent += '!';


// Дан элемент #elem:
// <ul>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li id="elem">text3</li>
// 	<li>text4</li>
// 	<li>text5</li>
// </ul>

// Поменяйте местами текст его соседа сверху и текст его соседа снизу. 
// let li = document.querySelector('#elem') ;
// let next  = li.nextElementSibling.textContent ;
// let prev = li.previousElementSibling.textContent ;
// li.nextElementSibling.textContent = prev ;
// li.previousElementSibling.textContent = next ;




