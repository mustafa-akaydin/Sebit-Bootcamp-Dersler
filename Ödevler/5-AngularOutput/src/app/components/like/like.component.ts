import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  //input ve Outputu tanımladım
  //likeCount: alkış sayısı
  @Input() likeCount: number = 0;
  //changelike: alkışa tıklandığı zaman like() methodunu çalıştıracak
  @Output() changeLike = new EventEmitter();

  like() {
    this.changeLike.emit();
  }
  ngOnInit(): void {
  }

}
