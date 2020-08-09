declare class Point {
    x: string;
    constructor(x: string);
    protected add(point: Point3D): void;
}
declare class Point3D extends Point {
    x: string;
    y: number;
    z: number;
    constructor(x: string, y: number);
    add(point: Point3D): Point3D;
}
