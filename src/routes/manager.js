import Router from "koa-router";
import Middleware from "../middleware/manager";

const router = new Router();
router.post("/", Middleware.listBanks);
router.post("/registered", Middleware.listRegisteredBanks);
router.post("/add", Middleware.addBank);
router.post("/remove", Middleware.removeBank);

export default router.routes();
