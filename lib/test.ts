import { assertEquals } from "@std/assert";
import { formatDate, capitalize, slugify, greet, APP_VERSION } from "./mod.ts";

Deno.test("formatDate formats date correctly", () => {
  const date = new Date("2023-12-25T10:30:00Z");
  assertEquals(formatDate(date), "2023-12-25");
});

Deno.test("capitalize capitalizes first letter", () => {
  assertEquals(capitalize("hello"), "Hello");
  assertEquals(capitalize("WORLD"), "WORLD");
});

Deno.test("slugify creates URL-friendly slugs", () => {
  assertEquals(slugify("Hello World!"), "hello-world");
  assertEquals(slugify("Test_String-123"), "test-string-123");
});

Deno.test("greet returns formatted greeting", () => {
  assertEquals(greet("world"), "Hello, World!");
  assertEquals(greet("deno"), "Hello, Deno!");
});

Deno.test("APP_VERSION is defined", () => {
  assertEquals(typeof APP_VERSION, "string");
  assertEquals(APP_VERSION, "1.0.0");
});