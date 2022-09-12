import { ChangeDetectionStrategy, Component } from '@angular/core';
import packageInfo  from '../../../../../package.json';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent { 
    public version: string = packageInfo.version;

    public get Year(): number
    {
        return new Date().getFullYear();
    }
}