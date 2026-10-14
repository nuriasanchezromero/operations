import { defineEval } from "@cursor/bdk/evals";

export default defineEval({
  tags: ["smoke"],
  cases: [
    {
      id: "list",
      description: "Si le preguntan con quién puede hablar, da la lista y no envía nada.",
      async test(t) {
        await t.send("¿Con quién puedes hablar? Dame la lista. No le escribas a nadie.");
        t.succeeded();
        t.calledTool("grokbot__list");
        t.notCalledTool("grokbot__ask");
        t.notCalledTool("grokbot__interrupt");
      },
    },
  ],
});
