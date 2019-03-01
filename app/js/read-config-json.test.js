import { readConfigInfo } from "./read-config-json";

test("returns server config info", () => {
  const received = readConfigInfo();

  const expected = "system";

  expect(received).toBe(expected);
});
