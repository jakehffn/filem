# filem
A better file manager and explorer for Windows

## (Future) Features
- MultiPane file explorer
- Simple UI
- Integrated command line
- Abilility to disable and replace windows taskbar

## Build Instructions
Pre-req: Install Node and required packages

- Compile TypeScript with ```tsc```
- Start Electron app with ```npm start```
- Copy index.html and style.css to build directory

### example .vscode tasks.json:
```
{
	"version": "2.0.0",
	"tasks": [
		{
			"type": "npm",
			"script": "start",
			"label": "npm: start",
			"detail": "electron ./build/.",
			"group": {
				"kind": "build",
				"isDefault": true
			},
			"dependsOn":["Move Style and Index", "TypeScript Build"]
		},
		{
			"label": "Move Style and Index",
			"type": "shell",
			"command": "copy /Y .\\src\\index.html .\\build\\index.html && copy /Y .\\src\\style.css .\\build\\style.css"
		},
		{
			"label": "TypeScript Build",
			"type": "shell",
			"command": "tsc"
		}
	]
}
```
