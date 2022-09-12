import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Accordion } from './accordion';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterViewInit
{
    @Input()
    public itens: Accordion[]
    @Input()
    public isLoading: boolean = false;

    constructor() 
    {
        this.itens = [];
    }

    public ngAfterViewInit(): void
    {
        if(!this.itens)
            throw new Error("Nenhum item passado para o componente");
    }

    public expandAccordion(item: Accordion): void
    {
        var selectedItem = this.itens.find(i => i.title == item.title)

        if (!selectedItem)
            return;

        selectedItem.active = !selectedItem.active;
    }
}