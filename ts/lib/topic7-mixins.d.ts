declare class Flies {
    fly(): void;
}
declare class Climbs {
    climb(): void;
}
declare class Bulletproof {
    deflect(): void;
}
declare class BeetleGuy implements Climbs, Bulletproof {
    climb: () => void;
    deflect: () => void;
}
declare function applyMixins(derivedCtor: any, baseCtors: any[]): void;
