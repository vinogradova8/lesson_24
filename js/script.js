"use strict";

// Масиви, задача №1
let arr = ["Ваня", "Иштван", "Оля"];
let newArr = arr;
newArr.push("Петя");
console.log(arr.length);

// Масиви, задача №2
let users = ["Ваня", "Иштван"];
users.push("Оля");
users.splice(1, 1, "Петя");
console.log(users.indexOf("Петя"));
let removed = users.shift();
console.log(removed);
users.splice(0, 0, "Маша", "Паша");
console.log(users);

// Масиви, задача №3
let arrOne = ["Ваня", "Иштван", "Оля"];
let removedOne = arrOne.splice(1, 1);
console.log(removedOne);

// Масиви, задача №4
let str = "Ваня,Иштван,Оля";
let arrTwo = str.split(",");
console.log(arrTwo);

// Масиви, задача №5
let arrThree = [9, 2, 8];
let reduceValue = arrThree.reduce(function (previousValue, item, index, array) {
	console.log(previousValue);
});

// Функції

function calcSum(numOne, numTwo, more, less) {
	let numSum = numOne + numTwo;
	if (numSum > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log("Больше чем 3");
}

function showLessMessage() {
	console.log("Меньше чем 3");
}

calcSum(1, 1, showMoreMessage, showLessMessage);

// Функції, задача №1

function showName() {
	console.log("Ваcя");
}
setTimeout(showName, 0);
console.log("Koля");

// Функції, задача №2

showMessageOne();

function showMessageOne() {
	console.log("Сообщение");
}

// Функції, задача №3

let showWord = function () {
	console.log("Сообщение");
};

showWord();


// Функції, задача №4

// if (2 > 1) {
// 	function showMessage() {
// 		console.log("Сообщение");
// 	}
// 	showMessage();
// }

let showMessage;

if (2 > 1) {
	showMessage = function () {
		console.log("Сообщение");
	}
}
showMessage();

// DOM, задача №1

const text = document.querySelector(".text");
console.log(text.dataset.sayHi);
// text.dataset.sayHi = "no";
// console.log(text.dataset.sayHi);

// DOM, задача №2 (як селектор використовувала клас замість тегу, оскільки у файлі html є 2 об'єта з тегом ul)

const list = document.querySelector('.list-1');

const lastUlChild = list.lastElementChild;
console.log(lastUlChild);

// DOM, задача №3

const someObjects = document.querySelectorAll(".like");
console.log(someObjects);

// DOM, задача №4 (як селектор використовувала клас замість тегу, оскільки у файлі html є 2 об'єта з тегом ul)

const listTwo = document.querySelector(".list-2");
listTwo.insertAdjacentHTML('beforeend', '<li>Текст</li>');
console.log(listTwo);

// Прокрутка, задача №1

let windowWidth = window.innerWidth;
console.log(windowWidth);

let mainElement = document.documentElement;
let mainElementWidth = mainElement.clientWidth;
console.log(mainElementWidth);

let scroll = windowWidth - mainElementWidth;
console.log(scroll);

// Прокрутка, задача №2

function setScrollPage() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	})
}

setTimeout(setScrollPage, 1000);

// Прокрутка, задача №3

const container = document.querySelector(".page__container");
const getContainerCoord = container.getBoundingClientRect();
console.log(getContainerCoord);

const homework2 = document.querySelector(".page__homework-video-2");
const getHomework2Coord = homework2.getBoundingClientRect();
console.log(getHomework2Coord);

const getListCoord = list.getBoundingClientRect();
console.log(getListCoord);
