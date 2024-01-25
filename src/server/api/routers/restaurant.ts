import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const restRouter = createTRPCRouter({
  listAll: publicProcedure
    .query(({ ctx }) => {
      return ctx.db.restaurant.findMany();
    }),

  getRestaurantDetailsById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.restaurant.findFirst({
        where: {
          id: input.id,
        },
        select: {
          address: true,
          tagline: true,
        }
      })
    }),

  listFood: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.restaurant.findFirst({
        where: {
          id: input.id,
        },
        select: {
          foods: true,
          name: true,
        }
      })
    }),
});
