import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  @Input() loveIts = 0;

  increment() {
    this.loveIts++;
    console.log(this.loveIts);
  }

  decrement() {
    this.loveIts--;
    console.log(this.loveIts);
  }

  constructor() { }

  ngOnInit() {
  }

}
