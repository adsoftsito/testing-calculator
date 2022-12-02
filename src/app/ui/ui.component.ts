import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { addition } from "../addition/addition"
import { substraction } from "../substraction/substraction"
import { multiplication } from "../multiplication/multiplication"
import { division } from "../division/division"
import { exp } from "../exp/exp"
import { sqr } from "../sqr/sqr"
import { sqrt } from "../sqrt/sqrt"

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }
  
  result = 0;
  operator1 = 0;
  operator2 = 0;


  ngOnInit() {
  }


  addition() {
    let myresult = 0;
    myresult = addition(this.operator1, this.operator2);
    this.result = myresult;
  }

  substraction() {
    let myresult = 0;
    myresult = substraction(this.operator1, this.operator2);
    this.result = myresult;
  }

  multiplication() {
    let myresult = 0;
    myresult = multiplication(this.operator1, this.operator2);
    this.result = myresult;
  }

  division() {
    let myresult = 0;
    myresult = division(this.operator1, this.operator2);
    this.result = myresult;
  }

  exp() {
    let myresult = 0;
    myresult = exp(this.operator1, this.operator2);
    this.result = myresult;
  }

  sqr() {
    let myresult = 0;
    myresult = sqr(this.operator1);
    this.result = myresult;
  }

  sqrt() {
    let myresult = 0;
    myresult = sqrt(this.operator1);
    this.result = myresult;
  }
}