import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  //input ile tanımlıyoruz
  @Input() titleChild: string = '';
  @Input() userNameChild: string = '';
  @Input() imgUrlChild: string = '';
  @Input() contentChild: string = '';

  constructor() {}

  ngOnInit(): void {}
}
