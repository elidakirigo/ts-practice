export interface Starks {
    name: string;
    age: number;
    figure: boolean;
    contactDetails?: number;
    initials(description: string): void;
    undefined(): void;
}
