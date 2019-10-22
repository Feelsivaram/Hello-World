import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styles: []
})
export class FirstComponentComponent implements OnInit {
  
  public note = "want some then get some!!";
  public note2 = "inspect the HTML code";
  public note3 = "Note3";
  public note4 = "inspect the HTML code node 4";
  
  public click1 = "";
  public click2 = "";

  public ngModelSample = "Two way data binding";

  public IfCondition = true;

  public swithCondition = 'red';

  public ngForColors = ['red', 'green', 'blue']

  constructor() { }

  ngOnInit() {
  }

  ClickEvent() {
    this.click1 = "ClickEvent";
  }

  ClickEvent2(event) {
    this.click2 = "ClickEvent type -- " + event.type;
  }

}
