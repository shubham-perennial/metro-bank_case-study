"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmPasswordFn = void 0;
const confirmPasswordFn = (req, res, next) => {
    if (req.body.password === req.body.confirmPassword) {
        next();
    }
    else {
        return res.status(400).json("your password does not match, check again");
    }
};
exports.confirmPasswordFn = confirmPasswordFn;
