import Joi from 'joi';

const schema = Joi.object({
    FullName: Joi.string().min(3).max(30).required(),
    EmailId:
        Joi.string().email({
            minDomainSegments: 2,
            tlds: { allow: ['com', 'net'] }
        }).required(),
    Password: Joi.string().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    ConfirmPassword: Joi.string().min(6)
});

export default schema;