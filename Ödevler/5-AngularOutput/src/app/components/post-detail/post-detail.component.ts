import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  like = 15;
  constructor() { }
  //Output ile alkışlamak için tıkladığımızda çalışacak
  clickLike() {
    //Konsola tıklanınca alkışlandı yazısı çıkacak
    console.log('alkışlandı...');
    this.like++;
  }
  ngOnInit(): void {
  }

}
