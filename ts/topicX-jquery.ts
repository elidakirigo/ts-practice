/**
 * ----------------------------
 * adding jquery to typescript
 * ---------------------------
 */
 declare var $ : any;

//  OR
declare var $ :{
    ( selector : string) : any
}