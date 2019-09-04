"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var obniz_1 = __importDefault(require("obniz"));
var obniz = new obniz_1.default('7836-4186');
obniz.onconnect = function () {
    return __awaiter(this, void 0, void 0, function () {
        var servo0, servo1, servo2, servo3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    servo0 = null;
                    servo1 = obniz.wired("ServoMotor", { signal: 1 });
                    servo2 = obniz.wired("ServoMotor", { signal: 2 });
                    servo3 = obniz.wired("ServoMotor", { signal: 3 });
                    return [4 /*yield*/, servo1.angle(180)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, servo2.angle(180)];
                case 2:
                    _a.sent();
                    process.stdin.on('data', function (chunk) {
                        return __awaiter(this, void 0, void 0, function () {
                            var lineString, line;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        lineString = chunk.toString().split(' ');
                                        line = lineString.map(function (x) { return x = parseInt(x); });
                                        obniz.display.clear();
                                        obniz.display.print(lineString);
                                        return [4 /*yield*/, servo3.angle(line[2])];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, sleep(2000)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, servo1.angle(line[0])];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, servo2.angle(line[1])];
                                    case 4:
                                        _a.sent();
                                        return [4 /*yield*/, servo3.angle(line[2])];
                                    case 5:
                                        _a.sent();
                                        return [4 /*yield*/, sleep(3000)];
                                    case 6:
                                        _a.sent();
                                        return [4 /*yield*/, servo1.angle(180)];
                                    case 7:
                                        _a.sent();
                                        return [4 /*yield*/, servo2.angle(180)];
                                    case 8:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                    _a.label = 3;
                case 3:
                    if (!true) return [3 /*break*/, 20];
                    return [4 /*yield*/, moveToPiano('Do', servo0, servo1, servo2, servo3)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('si', servo0, servo1, servo2, servo3)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('ra', servo0, servo1, servo2, servo3)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('so', servo0, servo1, servo2, servo3)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('fa', servo0, servo1, servo2, servo3)];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('mi', servo0, servo1, servo2, servo3)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('re', servo0, servo1, servo2, servo3)];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('do', servo0, servo1, servo2, servo3)];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('do', servo0, servo1, servo2, servo3)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('re', servo0, servo1, servo2, servo3)];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('mi', servo0, servo1, servo2, servo3)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('fa', servo0, servo1, servo2, servo3)];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('so', servo0, servo1, servo2, servo3)];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('ra', servo0, servo1, servo2, servo3)];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('si', servo0, servo1, servo2, servo3)];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('Do', servo0, servo1, servo2, servo3)];
                case 19:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 20: return [2 /*return*/];
            }
        });
    });
};
var sleep = function (msec) { return new Promise(function (resolve) { return setTimeout(resolve, msec); }); };
function moveToPiano(soundCode, servo0, servo1, servo2, servo3) {
    return __awaiter(this, void 0, void 0, function () {
        var pianoPlace;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pianoPlace = {
                        "Do": { servo0: 82, servo1: 105, servo2: 110, servo3: 82 },
                        "si": { servo0: 82, servo1: 130, servo2: 124, servo3: 88 },
                        "ra": { servo0: 82, servo1: 140, servo2: 124, servo3: 100 },
                        "so": { servo0: 82, servo1: 152, servo2: 136, servo3: 110 },
                        "fa": { servo0: 82, servo1: 152, servo2: 137, servo3: 120 },
                        "mi": { servo0: 82, servo1: 150, servo2: 135, servo3: 133 },
                        "re": { servo0: 82, servo1: 150, servo2: 130.7, servo3: 143 },
                        "do": { servo0: 82, servo1: 142, servo2: 124, servo3: 153 },
                    };
                    return [4 /*yield*/, servo3.angle(pianoPlace[soundCode]['servo2'])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, sleep(1000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, servo1.angle(pianoPlace[soundCode]['servo1'])];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, servo2.angle(pianoPlace[soundCode]['servo2'])];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, servo3.angle(pianoPlace[soundCode]['servo3'])];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, sleep(1000)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, servo1.angle(180)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, servo2.angle(180)];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
