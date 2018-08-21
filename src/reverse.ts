'use strict';

import * as vscode from 'vscode';
import { Range } from 'vscode';

export function reverse(): vscode.Disposable {
    return vscode.commands.registerCommand('extension.reverseSelections', () => {
        // The code you place here will be executed every time your command is executed

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selections = editor.selections;
        editor.edit(editBuilder => {
            let replacements = [...selections];
            selections.forEach((s, i) => {
                let range = new Range(s.start, s.end);
                if (editor) {
                    editBuilder.replace(range, editor.document.getText(replacements[replacements.length - (i+1)]));
                }
            });
        });
    });
}