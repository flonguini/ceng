import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-title-subtitle',
    templateUrl: './title-subtitle.component.html',
    styleUrls: ['./title-subtitle.component.scss']
})
export class TitleSubtitleComponent implements AfterViewInit
{
    @Input()
    public title: string;

    @Input()
    public subtitle: string;

    ngAfterViewInit(): void
    {
        if(!this.title)
            throw new Error("O título é obrigatório");
        
        if(!this.subtitle)
            throw new Error("O sub-título é obrigatório");
    }
}