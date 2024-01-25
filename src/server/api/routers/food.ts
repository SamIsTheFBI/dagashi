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

      return foods.map((food) => ({
        id: food.id,
        name: food.name,
        price: food.price,
        restaurant: food.restaurant,
        imageUrl: food.imageUrl,
        isVeg: food.isVeg,
      }))
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


