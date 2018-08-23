'use strict';

import * as vscode from 'vscode';

export function reverse(selections: vscode.Selection[], getStringFun: Function) {
    let reversed = [...selections];
    reversed.reverse();
    return reversed;
}