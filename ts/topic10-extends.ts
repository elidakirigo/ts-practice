class Point {
    constructor(public x:string){}
    protected add(point : Point3D){
        return;
    }
}

class Point3D extends Point {
    public z : number;
    constructor(public x : string,public y : number){
        super(x)
        this.z = y;
    }
    
    add(point: Point3D) {
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
}