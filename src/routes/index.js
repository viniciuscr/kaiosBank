/**
 * @param{ import("koa-router")} router
 */
export default router => {
  router
    .prefix("/v1")
    .use("/user", require("./user").default)
    .use("/bank", require("./bank").default)
    .use("/manager", require("./manager").default)
};
