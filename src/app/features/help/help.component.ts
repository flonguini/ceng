import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Accordion } from 'src/app/shared/components/accordion/accordion';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-help',
    templateUrl: './help.component.html',
    styleUrls: ['./help.component.scss']
})
export class HelpComponent
{
    public itens: Accordion[] = [];

    constructor()
    {
        this.itens = [
            {
                active: false,
                content: 'Foo',
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
            },
            {
                active: false,
                content: 'Foo',
                title: 'bar2'
            },
            {
                active: false,
                content: 'Foo',
                title: 'bar3'
            },]
    }
}