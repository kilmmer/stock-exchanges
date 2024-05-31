export abstract class Entity<T> {
    protected id: number | string;

    constructor(id: number | string) {
        this.id = id || Math.random().toString(36).substr(2, 9);
    }

    public getId(): number | string {
        return this.id;
    }

    public setId(id: number | string): void {
        this.id = id;
    }
}