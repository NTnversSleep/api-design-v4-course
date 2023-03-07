import * as users from "../users";

describe("users handler", () => {
  it("should do something when something happens", () => {
    expect(1).toBe(1);
  });

  it("should create a new user", async () => {
    const req = { body: { username: "hello", password: "hi" } };
    const res = {
      json({ token }) {
        expect(token).toBeTruthy();
      },
    };

    await users.createNewUser(req, res, () => {});
  });
});
