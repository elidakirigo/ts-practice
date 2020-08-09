interface Crazy {
    new (): {
        hello: number;
    };
}
declare class CrazyClass implements Crazy {
    constructor();
}
declare const crazy: CrazyClass;
