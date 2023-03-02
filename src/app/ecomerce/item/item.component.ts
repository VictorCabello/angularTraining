import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public item:Item

  constructor() {
    this.item = new Item('', '', 0, false, 1)
  }

  ngOnInit(): void {
      this.item = new Item(
        'Keyboard Case',
        '/assets/img/case.webp',
        899,
        false,
        0
      );
  }

  increase(): void {
    this.item.quantity++;
  }

  decrese(): void {
    this.item.quantity--;
  }

}
