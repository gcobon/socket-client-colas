import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('container');
  }

  enter(value: number ):void{
    if(!value) return
    this._router.navigate(['/desktop/', value]);
  }

}
