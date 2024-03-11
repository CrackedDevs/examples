import { postRouter } from "@0/server/api/routers/post";
import { createTRPCRouter } from "@0/server/api/trpc";
import { crackeddevsRouter } from "./routers/crackeddevs";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  crackeddevs: crackeddevsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
