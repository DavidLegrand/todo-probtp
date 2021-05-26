import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
})
export class EnfantComponent implements OnInit {
  @Input() ordre: string;
  @Input() ville: string;
  @Input() nbBonbon: number;

  @Output() bonbonChange = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}
}
