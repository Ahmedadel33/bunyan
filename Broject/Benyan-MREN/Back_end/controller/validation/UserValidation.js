const Joi = require('joi');
const { applyTimestamps } = require('../../models/userModel');
const userRegister = Joi.object({
    userName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .trim()
        .required()
        .messages({
            'string.empty': 'Username cannot be empty',
            'string.min': 'Username must be at least 3 characters long',
            'any.required': 'Username is a required field'
        }),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org', 'edu'] } })
        .trim()
        .lowercase()
        .required()
        .messages({
            'string.email': 'Please provide a valid email address',
            'any.required': 'Email is a required field'
        }),

    password: Joi.string()
        .min(6)
        .max(32)
        .pattern(new RegExp('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{6,}$'))
        .required()
        .messages({
            'string.min': 'Password must be at least 6 characters long',
            'string.pattern.base': 'Password must contain at least one letter and one number',
            'any.required': 'Password is a required field'
        }),

    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Passwords do not match'
        })
},{timestamps: true});





const userLogin = Joi.object({
    email: Joi.string()
        .email()
        .trim()
        .lowercase()
        .required()
        .messages({
            'string.email': 'Please provide a valid email address',
            'any.required': 'Email is required'
        }),

    password: Joi.string()
        .required()
        .messages({
            'any.required': 'Password is required'
        }),
         role: Joi.string()
        .valid('user', 'admin')
        .required()
});


module.exports = {
    userLogin,
    userRegister
};