'use strict';

export function reverse(selections: any[], getStringFun: Function) {
    let reversed = [...selections];
    reversed.reverse();
    return reversed;
}