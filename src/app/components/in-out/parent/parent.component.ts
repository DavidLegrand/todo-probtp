import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  sommeBonbons = 0;
  data = [
    {
      ordre: 'premier',
      ville: 'Paris',
      nbBonbons: 0,
    },
    {
      ordre: 'second',
      ville: 'Cagnes-sur-Mer',
      nbBonbons: 5,
    },
    {
      ordre: 'troisième',
      ville: 'Strasbourg',
      nbBonbons: 0,
    },
  ];
  constructor() {}

  calculSommeBonbons(event, enfant): void {
    this.sommeBonbons += event - enfant.nbBonbons;
    enfant.nbBonbons = event;
  }

  ngOnInit(): void {
    this.data.forEach((enfant) => (this.sommeBonbons += enfant.nbBonbons));
  }
}
