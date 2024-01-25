import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '',
    '/',
    '/home',
    "/(.*)",
    '/cart',
    '/sign-in',
    '/api/trpc/category.listAll',
    '/api/trpc/food.getFoodItems',
    "/api/trpc/category.listAll,food.getFoodItems",
    "/api/trpc/restaurant.listAll",
    '/restuarants/(.*)',
  ],
  ignoredRoutes: [
    '/restuarants/(.*)',
  ],
  apiRoutes: [
    '',
  ]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
