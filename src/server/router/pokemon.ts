import { createRouter } from "./context";
import { z } from "zod";

export const pokemonRouter = createRouter()
  .query("get-pokemon-by-id", {
    input: z.object({
      id: z.number(),
    }),
    async resolve({ input }) {
      const pokemon = prisma?.pokemon.findFirst({ where: { id: input.id } });
      if (!pokemon) throw new Error("doesnt exist");
      return pokemon;
    },
  })
  .mutation("cast-vote", {
    input: z.object({
      votedFor: z.number(),
      votedAgainst: z.number(),
    }),
    async resolve({ input }) {
      const voteInDb = await prisma?.vote.create({
        data: {
          votedAgainstId: input.votedAgainst,
          votedForId: input.votedFor,
        },
      });
      return { success: true, vote: voteInDb };
    },
  });
