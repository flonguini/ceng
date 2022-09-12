import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent 
{ 
    public isOpen: boolean = false;

    public toogle(): void
    {
        this.isOpen = !this.isOpen;
    }

    public closeMenu()
    {
        this.isOpen = false;
    }
}