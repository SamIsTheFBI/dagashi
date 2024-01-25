import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '',
    '/',
    '/home',
    '/restaurants',
    '/cart',
    '/sign-in',
    '/api/trpc/category.listAll',
  ],
  apiRoutes: [
    '',
  ]
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
