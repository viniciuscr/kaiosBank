const roles = ["u", "a"];

export default class Bank {
  static async statment(ctx) {
    const { month = {} } = ctx.request.body;
    const { user } = ctx.state;

    if (!Array.includes(roles, user.role)) {
      ctx.unauthorized("User does not have permissions for it.");
      return;
    }
    if (!month) {
      errors.statment = "Define a month.";
    }

    if (Object.keys(errors).length > 0) {
      ctx.badRequest(errors);
      return;
    }

    ctx.ok({ event: eventStored });
  }

}
