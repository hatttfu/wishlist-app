export default {
  auth: {
    register() {
      return import("./auth/register").then(m => m.default());
    }
  }
}
