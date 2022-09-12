
export abstract class StorageService
{
    public abstract setKey(key: string, value: any): void;
    public abstract getKey<T>(key: string): T | null;
    public abstract clear(): void;
    public abstract clearKey(key: string): void;
}
