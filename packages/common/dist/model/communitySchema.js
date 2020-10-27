"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.communitySchema = void 0;
const Yup = __importStar(require("yup"));
exports.communitySchema = Yup.object().shape({
    name: Yup.string()
        .max(255, 'Name exceeds the character limit')
        .required('Name is required'),
    email: Yup.string().email(),
    website: Yup.string().url(),
    about: Yup.string()
        .max(1e5, 'About exceeds the character limit')
        .required('About is required'),
    location: Yup.string(),
    tags: Yup.array().of(Yup.string().required('Tag cannot be blank')),
    maxParticipants: Yup.number().min(0, 'Max Participants cannot be negative'),
    isSchool: Yup.boolean(),
    isPrivate: Yup.boolean(),
    emailNotifications: Yup.boolean(),
});
//# sourceMappingURL=communitySchema.js.map