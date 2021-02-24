"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var readdir = function (dir, fn) {
    fs_1.default.readdir(dir, function (err, f) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        else {
            fn(f);
        }
    });
};
exports.default = { readdir: readdir };
