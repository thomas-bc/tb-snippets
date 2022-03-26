import * as vscode from 'vscode';



export function registerSnippetCommand(context: vscode.ExtensionContext) {
		
    // Get the active text editor
    const editor = vscode.window.activeTextEditor;
    
    if (editor) {
        const document = editor.document;
        const selection = editor.selection;
        
        // Get the text within the selection
        const selectedText = document.getText(selection);

        vscode.window.showInformationMessage("Register Snippet: " + selectedText);
        
        context.workspaceState.update("1", selectedText);
        
    }
    
}


export function writeSnippetCommand(context: vscode.ExtensionContext) {

    // Get the active text editor
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        const cursorPosition = editor.selection.active;

        const textSnippet = context.workspaceState.get("1");

        if (typeof textSnippet === "string") {
            editor.edit(editBuilder => {
                editBuilder.insert(cursorPosition, textSnippet);
            });
            vscode.window.showInformationMessage("You wrote a snippet!!");
        }
    }
}