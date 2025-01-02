import { addNumberInString } from "./addNumbers";

describe("inital test", () => {
  it("display inital", () => {
    expect(addNumberInString("1,2")).toBe("1,2");
  });
});
