const { check, validationResult } = require ('express-validator');

const validarStore = [
    check ('nombre').exists().not().isEmpty().withmessage('El nombre es requerido'),
    check ('apellidos').exists().not().isEmpty(),
    check ('email').exists().not().isEmpty(),
    check ('password').exists().not().isEmpty()

    (req, res, next) => {
        let errors = validationResult(req);

        if (!errors = isEmpty()) {
            console.log(errors.array());
            return res.json8{ errors.array()});
        }

        return next;
    
    }
]

module.exports = { validarStore }