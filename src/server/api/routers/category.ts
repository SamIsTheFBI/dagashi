import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const catRouter = createTRPCRouter({
  listAll: publicProcedure
    .query(async ({ ctx }) => {
      const res = await ctx.db.category.findMany();
      return res
    }),
});

