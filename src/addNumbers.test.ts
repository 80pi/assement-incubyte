import { addNumberInString } from "./addNumbers";

describe("Adding Number passed in strings", () => {
  it("Display sum as 3 when 1,2 is passed to funciton", () => {
    expect(addNumberInString("1,2")).toBe(3);
  });
  it("Display sum as 1 when 1 is passed to funciton", () => {
    expect(addNumberInString("1")).toBe(1);
  });
  it("Display sum as 0 when empty string was passed is passed to funciton", () => {
    expect(addNumberInString("")).toBe(0);
  });
  it("Display sum of numbers which are less than 100", () => {
    expect(addNumberInString("1,2,3,1001")).toBe(6);
  });
  it("Display sum of numbers when '\n' is passed", () => {
    expect(addNumberInString("1\n2,3")).toBe(6);
  });
  it("Display sum of numbers Support different delimiters passed", () => {
    expect(addNumberInString("//;\n1;2")).toBe(3);
  });
  it("Display a error exception message when negative numbers are passed", () => {
    expect(addNumberInString("1,2,-3")).toBe("negatives not allowed -3");
  });
  it("Display a error exception message with all the negative numbers that are passed", () => {
    expect(addNumberInString("1,-3,2,-9,4")).toBe(
      "negatives not allowed -3,-9"
    );
  });
  it("Delimiters can be of any length with the following format", () => {
    expect(addNumberInString("//[***]\n1***2***3")).toBe(6);
  });
});
