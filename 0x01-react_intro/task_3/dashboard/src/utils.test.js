import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe("Utils", () => {
  test("getFullYear returns the correct year", () => {
    const currentYear = new Date.getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  test("getFooterCopy return correct string based on arg", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
  });

  test("returned right string from getLatestNotification", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
  });
});