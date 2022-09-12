import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-finished',
    templateUrl: './finished.component.html',
    styleUrls: ['./finished.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinishedComponent implements OnInit
{

    constructor() { }

    ngOnInit(): void
    {
    }

}
