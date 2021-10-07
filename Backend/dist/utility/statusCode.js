"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["Created"] = 201] = "Created";
    Status[Status["NotFound"] = 202] = "NotFound";
    Status[Status["RequestFailure"] = 203] = "RequestFailure";
})(Status || (Status = {}));
exports.default = Status;
