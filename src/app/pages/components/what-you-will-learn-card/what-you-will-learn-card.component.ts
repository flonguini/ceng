import { Component, ChangeDetectionStrategy, Input, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-what-you-will-learn-card',
    templateUrl: './what-you-will-learn-card.component.html',
    styleUrls: ['./what-you-will-learn-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhatYouWillLearnCardComponent implements AfterViewInit
{
    @Input()
    public img: string;

    @Input()
    public text: string;

    ngAfterViewInit(): void
    {
        if(!this.img)
            throw new Error("É preciso fornecer a url da imagem");
        if(!this.text)
            throw new Error("É preciso fornecer o texto do card");
    }
}