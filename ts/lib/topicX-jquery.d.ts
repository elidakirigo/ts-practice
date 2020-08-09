/**
 * ----------------------------
 * adding jquery to typescript
 * ---------------------------
 */
declare var $: any;
declare var $: {
    (selector: string): any;
};
declare type JQuery = any;
declare var $: JQuery;
/**
 * import * as $ from 'jquery';
 * declare module 'jquery';
 */
/**
 * import * as $ from 'jquery';
 * npm install @types/jquery --save-dev
 */
