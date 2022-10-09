const {Router} = require("express")
const router = Router()
const {postUrl,getUrl} = require('../controladores/controllerLink')

router.post("/",postUrl)
router.get("/:url",getUrl)


module.exports = router
