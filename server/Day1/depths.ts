const Router = require("koa-router");
const router = Router({
  prefix: "/day1",
});
import got from "got";
import { Request, Response } from "koa";

const calculate = (input: string[]): number => {
  let total: number = 0;

  for (let i = 0; i < input.length; i++) {
    const current = Number(input[i]);
    const next = Number(input[i + 1]);
    if (next > current) {
      total++;
    }
  }
  return total;
};

router.post("/", async (request: Request, response: Response, ctx) => {
  const input = await got("https://adventofcode.com/2021/day/1/input");
  console.log(input);
  const { depths } = request.body;
  const result = calculate(depths);
  ctx.response(`${result}`);
});
