const express = require("express");
const router = express.Router();
const { UsersController } = require("./controllers");

router.post("/auth/users", UsersController.add);
router.get("/users", UsersController.browse);
router.get("/users/mail", UsersController.sendMail);
router.post("/login/users", UsersController.login);
router.get("/logout/users", UsersController.logout);
router.get("/users/:id", UsersController.read);
router.delete("/users/:id", UsersController.delete);
router.put("/infos/users/:id", UsersController.editInfos);
router.put("/password/users/:id", UsersController.editPassword);

module.exports = router;
