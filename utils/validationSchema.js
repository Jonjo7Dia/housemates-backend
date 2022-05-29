const Joi = require('joi');


const validate = data =>{
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password')
    });
    return schema.validate(data);
}

const refreshTokenBodyValidation = (body) => {
    const schema = joi.object({
        refreshToken: Joi.string().required().label('Refresh Token')
    });
    return schema.validate(body);
};

module.exports ={ validate, refreshTokenBodyValidation};