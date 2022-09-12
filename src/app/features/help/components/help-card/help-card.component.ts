import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-help-card',
  templateUrl: './help-card.component.html',
  styleUrls: ['./help-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
