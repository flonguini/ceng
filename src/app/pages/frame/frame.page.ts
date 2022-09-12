import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './frame.page.html',
    styleUrls: ['./frame.page.scss']
})
export class FramePage { }