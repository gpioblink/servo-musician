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
        var pwm, servo0, servo1, servo2, servo3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    pwm = obniz.getFreePwm();
                    pwm.start({ io: 0 }); // start pwm. output at io0
                    pwm.freq(1000);
                    pwm.duty(50);
                    servo0 = obniz.wired("ServoMotor", { signal: 0 });
                    servo1 = obniz.wired("ServoMotor", { signal: 1 });
                    servo2 = obniz.wired("ServoMotor", { signal: 2 });
                    servo3 = obniz.wired("ServoMotor", { signal: 3 });
                    return [4 /*yield*/, moveToPiano('do', servo0, servo1, servo2, servo3)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('re', servo0, servo1, servo2, servo3)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('mi', servo0, servo1, servo2, servo3)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('fa', servo0, servo1, servo2, servo3)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('so', servo0, servo1, servo2, servo3)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('ra', servo0, servo1, servo2, servo3)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('si', servo0, servo1, servo2, servo3)];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, moveToPiano('Do', servo0, servo1, servo2, servo3)];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
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
                        "do": { servo0: 85, servo1: 140, servo2: 100, servo3: 93.6 },
                        "re": { servo0: 85, servo1: 140, servo2: 100, servo3: 103 },
                        "mi": { servo0: 85, servo1: 140, servo2: 100, servo3: 113 },
                        "fa": { servo0: 85, servo1: 140, servo2: 100, servo3: 123 },
                        "so": { servo0: 85, servo1: 140, servo2: 100, servo3: 134 },
                        "ra": { servo0: 85, servo1: 90, servo2: 0, servo3: 140 },
                        "si": { servo0: 85, servo1: 90, servo2: 0, servo3: 148 },
                        "Do": { servo0: 85, servo1: 90, servo2: 0, servo3: 155 }
                    };
                    return [4 /*yield*/, servo0.angle(pianoPlace[soundCode]['servo0'])];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, servo2.angle(140)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, servo3.angle(pianoPlace[soundCode]['servo3'])];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, servo1.angle(pianoPlace[soundCode]['servo1'])];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, sleep(1000)];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, servo2.angle(pianoPlace[soundCode]['servo2'])];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, sleep(1000)];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
