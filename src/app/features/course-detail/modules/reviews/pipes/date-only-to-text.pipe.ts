import { Pipe, PipeTransform } from "@angular/core";
import { DateOnly } from "src/app/shared/models/date-only";

@Pipe({name: "dateonlytotext", pure: true})
export class DateOnlyToText implements PipeTransform
{
    transform(value: DateOnly, ...args: any[])
    {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        
        if(year == value.year && month == value.month && day == value.day)
            return "Hoje";
        else if(year == value.year && month == value.month && day - 1 <= value.day)
            return "Ontem";
        else if(year == value.year && month == value.month && day - 7 <= value.day)
            return "Há mais de 1 semana";
        else if(year == value.year)
        {
            const diff = this.diff(month, value.month);
            const mes = diff == 1 ? 'mês' : 'meses';
            if(diff <= 12)
                return `Há mais de ${diff} ${mes}`;
        }

        return "Há mais de 1 ano";
    }

    private diff(month: number, value: number)
    {
        return month - value;
    }
}