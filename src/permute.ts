'use strict';

import * as vscode from 'vscode';
import { Range } from 'vscode';

export function permute(sortingFun: Function): void {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        return; // No open text editor
    }

    let selections = editor.selections;
    editor.edit(editBuilder => {
        let permuted = sortingFun(selections, (e: vscode.Selection) => (editor ? editor.document.getText(e).toLowerCase() : ''));
        selections.forEach((s, i) => {
            let range = new Range(s.start, s.end);
            if (editor) {
                editBuilder.replace(range, editor.document.getText(permuted[i]));
            }
        });
    });
}