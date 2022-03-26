// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { registerSnippetCommand, writeSnippetCommand} from "./snippets";

export function activate(context: vscode.ExtensionContext) {
	
	console.log('Congratulations, your extension "tb-snippets" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('tb-snippets.registerSnippet', 
				() => registerSnippetCommand(context))
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('tb-snippets.writeSnippet', 
				() => writeSnippetCommand(context))
	);

}

// this method is called when your extension is deactivated
export function deactivate() {}
