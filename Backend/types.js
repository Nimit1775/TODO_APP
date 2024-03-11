const zod = require ('zod');

const  createTODO = zod.object({

    title: zod.string().optional() ,
    description  : zod.string(),

})
const updateTODO = zod.object({

    id : zod.string(),

})

module.exports = {
    createTODO : createTODO ,
    updateTODO : updateTODO
}