import { parseDate } from "../utilities/ParseDate.js";

describe("Date parsing utility", () => {
  it("returns accurate date", () => {
    expect(parseDate("2016-12-20T12:26:11Z")).toBe("20/12/2016");
  });
});
