
import $ from "jquery"
// const $  = require('jquery'); 
$('li:even').css({
    background:"red"
})

$("li:odd").css({
    background:"green"
})

import './style/index.css';
import './style/index.less';

import './style/index.scss';


class Person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
}

var p1  = new Person('小明','22')
console.log(p1)