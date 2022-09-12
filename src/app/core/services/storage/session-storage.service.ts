import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";


@Injectable()
export class SessionStorageService extends StorageService
{
    public setKey(key: string, value: any): void
    {
        if (!value)
            throw new Error("Nenhum valor passado para salvar");

        const json = JSON.stringify(value);
        sessionStorage.setItem(key, json);
    }

    public getKey<T>(key: string): T | null
    {
        if (!key)
            throw new Error("Nenhuma key fornecedida");

        const json = sessionStorage.getItem(key);

        if(!json)
            return null;

        return JSON.parse(json) as T;
    }

    public clear(): void
    {
        sessionStorage.clear();
    }

    public clearKey(key: string): void
    {
        if (!key)
            throw new Error("Nenhuma key fornecedida");

        sessionStorage.removeItem(key);
    }
}
