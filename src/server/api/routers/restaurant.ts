import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const restRouter = createTRPCRouter({
  listAll: publicProcedure
    .query(async ({ ctx }) => {
      const res = await ctx.db.restaurant.findMany();
      return res
    }),

  getRestaurantDetailsById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const res = await ctx.db.restaurant.findFirst({
        where: {
          id: input.id,
        },
      })

      return res
    }),

  listFood: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.restaurant.findFirst({
        where: {
          id: input.id,
        },
        include: {
          foods: true,
        },
      })
    }),
});
