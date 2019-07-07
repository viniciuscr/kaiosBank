import Router from "koa-router";
import Middleware from "../middleware/bank";

const router = new Router();
router.post("/", Middleware.home);
router.post("/login", Middleware.login);
router.post("/statment", Middleware.statement);

export default router.routes();
