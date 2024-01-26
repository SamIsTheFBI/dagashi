import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";


export const foodRouter = createTRPCRouter({
  getFoodItems: publicProcedure
    .query(async ({ ctx }) => {
      const foods = await ctx.db.food.findMany({
        include: {
          restaurant: true,
        },
      })

      return foods
    }),

  getFoodByRestaurantId: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const foods = await ctx.db.food.findMany({
        where: {
          restaurantId: input.id,
        }
      })

      return foods
    }),

  listByCategoryName: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.food.findMany({
        where: {
          category: {
            name: input.name,
          },
        },
        include: {
          category: true,
        }
      })
    })
});


