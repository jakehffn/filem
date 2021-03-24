# filem
A better file manager and explorer for Windows

## Current Features
- Single panel file explorer

## Future Features
- MultiPanel file explorer
- Simple UI
- Integrated command line
- Abilility to disable and replace windows taskbar

## Build Instructions
Pre-req: Install Node and required packages

- Compile TypeScript with ```tsc```
- Start Electron app with ```npm start```
- Copy index.html and style.css to build directory

### example .vscode tasks.json to use for default build task:
```json
{
	"version": "1.0.0",
	"tasks": [
		{
			"label": "Build",
			"group": {
				"kind": "build",
				"isDefault": true
			},
			"dependsOn":["Move Index", "Move Style", 
				"TypeScript Build", "npm: start"],
			"dependsOrder": "sequence"
		},
		{
			"type": "npm",
			"script": "start",
			"label": "npm: start",
			"detail": "electron ./build/."
		},
		{
			"label": "Move Index",
			"type": "shell",
			"command": "copy",
			"args": ["/Y", 
				"${workspaceFolder}\\src\\index.html", 
				"${workspaceFolder}\\build\\index.html"]
		},
		{
			"label": "Move Style",
			"type": "shell",
			"command": "copy",
			"args": ["/Y", 
				"${workspaceFolder}\\src\\style.css", 
				"${workspaceFolder}\\build\\style.css"]
		},
		{
			"label": "TypeScript Build",
			"type": "shell",
			"command": "tsc"
		}
	]
}
```
