import koa from "koa";
const app = new koa();
import bodyParser from "koa-body";

app.use(bodyParser());

app.use((ctx: ParameterizedContext) => {
  ctx.body = "Hello World";
});

app.listen(1234, () => {
  console.log("koa is listening on port 1234, daddy.");
});
