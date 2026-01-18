import { withAuth } from "next-auth/middleware";
export default withAuth(function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/Admin")) console.log(req.nextUrl);
});
export const config = {
  matcher: ["/Admin/:path*"],
};
