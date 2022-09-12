let express = require('express')
    router  = express.Router();

//retrievingAll & creating expenes 
router.route('/')
    .get()
    .post()

    
// retrievingSingle && updating && deleting an expenses
router.route('/:id')
    .get()
    .patch()
    .delete()    



module.exports = router    