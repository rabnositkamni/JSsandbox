
// let content = document.getElementById("content");
// let button = document.getElementById("show-more");

// button.onclick = function (){
//   if(content.className == "open") {
//     content.className = "";
//     button.innerHTML = "Show More";
//   }
//   else {
//     content.className = "open";
//     button.innerHTML = "Show Less";
//   }
// };

// let person = null;


// if (confirm("Согласие на всё")) {
//   person = prompt ("Enter your name", "Anonimus")
// }

// alert("Вы ввели " + person)










// $(function() {

//     /* Smooth scroll */
//     $("[data-scroll]").on("click", function(event) {
//         event.preventDefault();

//         var $this = $(this),
//             blockId = $this.data('scroll'),
//             blockOffset = $(blockId).offset().top;

//         $("#nav a").removeClass("active");
//         $this.addClass("active");

//         $("html, body").animate({
//             scrollTop:  blockOffset
//         }, 500);
//     });



//     /* Menu nav toggle */
//     $("#nav_toggle").on("click", function(event) {
//         event.preventDefault();

//         $(this).toggleClass("active");
//         $("#nav").toggleClass("active");
//     });



//     /* Collapse */
//     $("[data-collapse]").on("click", function(event) {
//         event.preventDefault();

//         var $this = $(this),
//             blockId = $this.data('collapse');

//            $(blockId).slideToggle();

//         $this.toggleClass("active");
//     });


//     /* Slider */
//     $("[data-slider]").slick({
//         infinite: true,
//         fade: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//     });





// // Галерея

//  $('.slider-for').slick({
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    arrows: false,
//    fade: true,
//    asNavFor: '.slider-nav'
//  });
//  $('.slider-nav').slick({
//    slidesToShow: 4,
//    slidesToScroll: 1,
//    asNavFor: '.slider-for',
//    dots: false,
//    focusOnSelect: true

//  });

//  $('a[data-slide]').click(function(e) {
//    e.preventDefault();
//    var slideno = $(this).data('slide');
//    $('.slider-nav').slick('slickGoTo', slideno - 1);
//  });

// });







// Урок 1
// console.log('Промокод 25% первому заказавшему:');
// console.log('JS');
// ['Test', 'test_2'].forEach(alert)



// Урок 2
// const colorEyeUser = '#117053';
// console.log(colorEyeUser);
// let user;
// let userName;

// userName = 'Vasja';
// user = userName;
// console.log(user);


// Урок 3
// let userAge = 77;
// let userInfo = `старику ${userAge}`
// console.log(userInfo);

// let userHeight = 145 / 0;
// console.log (userHeight);
// console.log (typeof userHeight);

// let userName;
// console.log(typeof userName);

// let userSize = "45" / "8";
// console.log(userSize);


// Урок 4
// console.log('35' + - "22");
// console.log('35' * "22");
// console.log(23 > 22);


// Урок 5
// if (1 === "1") {
//     console.log("1. Истина!");
// } else {
//     console.log("1. Лож!");
// }


// if (5 == "5") {
//     console.log("2. Истина!");
// } else {
//     console.log("2. Лож!");
// }

// let message = (92 > '11' && 58 < 100) ? "Истина!" : "Лож!";
// console.log(message);

// if (0) {
//   console.log("Лож!");
// } else if (" ") {
//   console.log("Истина!");
// }



// Урок 6
// let num = 1;
// while (num > 0) {
//   console.log (num);
//   num++;
//   if (num == 151000) break;
// }



// let apples = Number (prompt("У вас яблок:", 100));
// if (apples > 100) {
//   alert ("Куда ж тебе столько яблок? С народом поделись!")
// } else {
//     if (apples > 25) {
//     alert("На вас напало полчище мышей и мыши съели 25 яблок");
//     apples = apples - 25;
//   } else {
//     alert("Мыши играли в робингудов и принесли нищему 10 яблок, отжатых у богатых");
//     apples = apples + 10;
//     console.log(`Теперь у нищего ${apples} яблок`);
//   }
// }
// if (apples > 35) {
//   console.log(`Ого! Посмотрите, у него аж ${apples} яблок!`);
// }

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?

// console.log(`a ${a}`);
// console.log(`b ${b}`);
// console.log(`c ${c}`);
// console.log(`d ${d}`);

// let variable = +prompt ("введите любое число", "100");

// if (variable > 0) {
//   alert (1);
// } else if (variable < 0){
//   alert (-1);
// } else {
//   alert (0);
// }
// console.log (variable);
// console.log (typeof variable);


// let a = prompt ("a =", 3);
// let b = prompt ("b =", 3);

// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
// alert (result)
// или:

// let result = (a + b < 4) ? "мало" : "много" ;
// alert (result)

// let message;
// let login = prompt ("Ваш логин", 'Сотрудник');

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// или:

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте':
//   (login == '') ? 'Нет логина' : '';

// console.log (message);

// let age = prompt("введите ваш возраст");

// if (variable < 14) {
//   console.log('мелкий поц');
// } else if (variable > 94) {
//   console.log('старый поц');
// } else if (variable >= 14) {
//   console.log('обычный поц');
// } else {
//   console.log('бред какой-то');
// }

// if ( age >= 14 && age <= 90 )  {
//   console.log('возраст от 14 до 90 включительно');
// }

// if ( age < 14 || age > 90 )  {
//   console.log('тебе здесь не место');
// }


// let login = prompt ("ты кто?", 'admin');
// let password;

// if (login == 'admin') {
//   password = prompt ("введите пароль", 'admin');
//   if (password == 'admin') {
//     alert("здравствуй админ");
//   } else {
//     alert("ты не админ!");
//   }
// } else {
//   alert("я тебя не знать");
// }
//
// let go = -10000;
// while (go < 0) {
//   console.log (go);
//   go++;
// }

// Объекты



// const bike = {
// 	wheels: 29,
// 	speed: 20,
// 	transmission: 'dual',
// 	frameSize: 24
// }

// console.log(bike)

// bike.wheels = {
// 	wheelSize: 28,
// 	spokesCount: 36
// }

// console.log(`Количество спиц: ${bike.wheels.spokesCount}`)



// bike.wheels.spokesCount = prompt('Ваше количество спиц:', bike.wheels.spokesCount);
// console.log(`Теперь количество спиц: ${bike.wheels.spokesCount}`)



// newBike = bike

// newBike.wheels.spokesCount = 32;
// console.log(`Спиц на новом байке: ${bike.wheels.spokesCount}`)

// newBike.wheels.spokesType = 'Aero'
// console.log(`Тип спиц: ${newBike.wheels.spokesType}`)

// newBike.wheels = 10
// console.log(newBike.wheels)




//Запись объектов
//Имя ключа задал как объект. в консоли при первом запросе и развороте объекта
// указалось, что объект был изменён после?

// const name = 'Bogdan'
// const postsQty = 23

// const test = {
// 	name,
// 	postsQty,
// 	blaBla: false
// }

// const userProfile = {
// 	name,
// 	postsQty,
// 	blaBla: false
// }

// console.log(userProfile)

// userProfile[test] = 11

// console.log(userProfile)





// let H=16
// let D = 14
// const bobrovka = {
// 	H,
// 	L: 32,
// 	D,
// 	price: {
// 		minPrice: 400,
// 		maxPrice: 1000
// 	}
// }

// const bobrovkaTravel = JSON.parse(JSON.stringify(bobrovka))
// bobrovkaTravel.L = 28
// bobrovkaTravel.cost = 1200
// bobrovkaTravel.price.maxPrice = 1200

// console.log(bobrovka)
// console.log(bobrovkaTravel)




// Функции

// let a= 5
// let b = 4
// function sum(qwe, ewq) {
//     const c=qwe/ewq;
//     return c
// }
// let result = sum(a,b)
// console.log(result)

// let result2 = sum(55,1231)
// setTimeout(() => {
//     console.log(result2)
// }, 1500);

// let a = 1
// let b = 5
// function sum (a, b) {
// 	a = ++a
// 	age: +18
// }

// function upAge (a) {
// 	let newAge = persCard.age + a
// 	console.log (newAge)
// }
// upAge (5)
// upAge (15)

//Присвоение глобальной переменной значения из функциии.
// let a;
// let b;

// function myFn() {
//     let b;
//     a = "red";
//     b = "green"
//     console.log(b)
// }
// myFn()
// console.log(a)
// console.log(b)

//JS range

// function outputUpdate(rad) {
//     let output = document.getElementById('volume');
//     let borderRadius = document.getElementById('block')

//     output.value = rad;
//     borderRadius.style.borderRadius = rad+'%'
//     console.log(`значение rad: ${rad}`)
// }


//функция добавления даты в скопированный объект
// const postDate = (post, addDate = Date()) => ({
//     ...post,
//     addDate,
// })
// const postSerg = {
//     id: 1,
//     author: 'Serhii',
// }
// postDate(postSerg)

// console.table(postDate(postSerg))

// function postDate(post, addDate = Date()) {
//     let c = {...post, addDate,}
//     return c
// }
// const postSerg = {
//     id: 1,
//     author: 'Serhii',
// }
// postDate(postSerg)
// console.table(postDate(postSerg))

// const myArray = [1, 2, 3]
// const myArray2 = [1, 2, 3]
// myArray.length = 2
// console.log(myArray)
// myArray.length = 3
// console.log(myArray)

//document.querySelector('.button-push').onclick = pushText

//function pushText () {
//    let text;
//    text = document.querySelector('.input-text').value;
//    document.querySelector('.get-text').innerText = text;
//}



// const myArray = [1, 2, 3, 2, 55, 567, 2, '2']
// console.log(myArray)
// myArray.push([1, 2], 2)
// console.log(myArray)
// myArray.forEach(element => {
//     if (element === 2) {
//         console.log("здесть двойка")
//     }
// })

// const myArray2 = myArray.map(el => el+1)
// console.log(myArray2)

// if ( myArray === myArray2) {
//     console.log('метод map копирует ссылку на массив')
// } else {
//     console.log('метод map создаёт новый массив')
// }


//Запуск вывода в консоль перебора до указанного числа
// document.querySelector('.button-push').onclick = pushText;
// function pushText () {
//     let inputText = document.querySelector('.input-text').value;
//     document.querySelector('.get-text').innerHTML = inputText;
//     console.log('Button on');
//     for (let i = 1; i < inputText; i++) {
//         console.log(i);
//     }
// }




//КАЛЬКУЛЯТОР!!!!!!!!!!!!!!!!!!!!!!!

// let operand_1 = 0;
// document.getElementById('display').innerText = operand_1

// document.getElementById('1').onclick = addOne;
// function addOne() {
//     if (operand_1 == '0') {
//         operand_1 = '1';
//     } else {
//         operand_1 += '1';
//     }
//     document.getElementById('display').innerText = operand_1;
// }

// document.getElementById('2').onclick = addTwo;
// function addTwo() {
//     if (operand_1 == '0') {
//         operand_1 = '2';
//     } else {
//         operand_1 += '2';
//     }
//     document.getElementById('display').innerText = operand_1;
// }
//что тоо делаю явно не так. не знаю как переключить ввод во второй операнд


// калькулятор на минималках:
document.querySelector('#show-calc').onclick = () => {
    if (document.querySelector('#show-calc').checked) {
        document.querySelector('.calc').hidden = false;
    } else {
        document.querySelector('.calc').hidden = true;
    }
}

function operand_1 () {
    i = document.getElementById('operand_1').value;
    return +i;
}
function operand_2 () {
    i = document.getElementById('operand_2').value;
    return +i;
}

function show(i) {
    if (isNaN(i)) {
        document.getElementById('display').innerText = 'Введено не число'
    } else {
        document.getElementById('display').innerText = i;
    }
}

document.getElementById('+').onclick = plusus;
function plusus (a, b) {
    a = operand_1();
    b = operand_2();
    let i = a + b;
    show (i);
}
document.getElementById('-').onclick = minusus;
function minusus (a, b) {
    a = operand_1();
    b = operand_2();
    let i = a - b;
    show (i);
}
document.getElementById('/').onclick = delitel;
function delitel (a, b) {
    a = operand_1();
    b = operand_2();
    let i = a / b;
    show (i);
}
document.getElementById('*').onclick = multiply;
function multiply (a, b) {
    a = operand_1();
    b = operand_2();
    let i = a * b;
    show (i);
}






//Крутилка с выбором цвета у круга
// шаг 1 сделать круг, при кручении ползунка меняется заполненость круга


document.querySelector('#block-range').oninput = heightBackground;


function heightBackground(range) {
    range = document.querySelector('#block-range').value
    let array = document.getElementById('backgroung-color').style.height
    let height = array[0] + array[1]
    if (height != range) {
        document.getElementById('backgroung-color').style.height = range+'%';
        console.log(range)
    }
}