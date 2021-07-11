import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateInvestmentController } from "./controllers/CreateInvestmentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserInvestmentController } from "./controllers/ListUserInvestmentController";
import { DeleteInvestmentController } from "./controllers/DeleteInvestmentController";

const router = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createInvestmentController = new CreateInvestmentController();
const deleteInvestmentController = new DeleteInvestmentController();
const listUserInvestmentController = new ListUserInvestmentController();

router.post("/users", createUserController.handle);

router.post("/login", authenticateUserController.handle);

router.post(
  "/investments",
  ensureAuthenticated,
  createInvestmentController.handle
);

router.get(
  "/users/investments",
  ensureAuthenticated,
  listUserInvestmentController.handle
);

router.delete(
  "/users/investments/:id",
  ensureAuthenticated,
  deleteInvestmentController.handle
);

export { router };
