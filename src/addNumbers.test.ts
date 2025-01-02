import { addNumberInString } from "./addNumbers";

describe("Adding Number passed in strings", () => {
  it("Display sum as 3 when 1,2 is passed to funciton", () => {
    console.log(addNumberInString("1,2"));
    expect(addNumberInString("1,2")).toBe(3);
  });
});
