import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define which routes should be protected
const isProtectedRoute = createRouteMatcher([
  "/shop(.*)", // Protect all routes under /shop
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth();
  }
});

// Define which paths should be protected or public
export const config = {
  matcher: [
    // Protect all application routes except for public routes
    "/((?!_next|static|favicon.ico|.*\\.(js|css|png|jpg|jpeg|webp|svg|eot|ttf|woff|woff2|json)).*)", // Excludes static files
    "/(api|trpc)(.*)", // Protect all API routes
    "/sign-in", // Exclude sign-in page
    "/sign-up", // Exclude sign-up page
  ],
};