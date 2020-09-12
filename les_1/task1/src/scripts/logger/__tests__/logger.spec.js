import { createLogger } from "../logger";

it("should return stored logs", () => {
  expect(logger.getLogs()).toEqual([]);
});
