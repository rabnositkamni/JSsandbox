
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
// 


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

// let a = 1
// let b = 5
// function sum (a, b) {
// 	a = ++a
// 	const c = a / b
// 	console.log (c)
// 	return c
// }
// sum (a, b)


// const persCard = {
// 	name: "Alisa",
// 	age: +18
// }

// function upAge (a) {
// 	let newAge = persCard.age + a
// 	console.log (newAge)
// }
// upAge (5)
// upAge (15)


