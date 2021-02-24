"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var custom_electron_titlebar_1 = __importDefault(require("custom-electron-titlebar"));
var files_1 = __importDefault(require("./util/files"));
window.addEventListener('DOMContentLoaded', function () {
    new custom_electron_titlebar_1.default.Titlebar({
        backgroundColor: custom_electron_titlebar_1.default.Color.fromHex('#292828')
    });
    var replaceText = function (selector, text) {
        var element = document.getElementById(selector);
        if (element)
            element.innerText = text;
    };
    for (var _i = 0, _a = ['chrome', 'node', 'electron']; _i < _a.length; _i++) {
        var type = _a[_i];
        replaceText(type + "-version", process.versions[type]);
    }
    document.getElementById('path-finder').defaultValue = "C:\\";
});
window.readdir = function (dir) {
    files_1.default.readdir(dir, function (f) {
        var fileList = document.getElementById('files-container');
        fileList.innerHTML = '';
        f.forEach(function (file) {
            var node = document.createElement('p');
            node.classList.add('file');
            node.appendChild(document.createTextNode(file));
            fileList.appendChild(node);
        });
        console.log(f);
    });
};
