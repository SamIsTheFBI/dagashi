import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";
import { catRouter } from "./routers/category";
import { foodRouter } from "./routers/food";
import { restRouter } from "./routers/restaurant";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  category: catRouter,
  food: foodRouter,
  restaurant: restRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
