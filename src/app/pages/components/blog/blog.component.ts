import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogComponent
{
    public openBlog(): void
    {
        window.open("https://blogcanaldaengenharia.com.br", "_blank");
    }
}