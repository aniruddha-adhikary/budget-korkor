import { assertEquals } from "../app/deps-test.ts";

Deno.test("checking test sanity", () => {
  assertEquals(1 + 1, 2);
});
