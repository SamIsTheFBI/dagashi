import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const catRouter = createTRPCRouter({
  listAll: publicProcedure
    .query(({ ctx }) => {
      return ctx.db.category.findMany();
    }),
});

