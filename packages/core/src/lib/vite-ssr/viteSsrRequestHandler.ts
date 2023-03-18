import { renderPage } from "vite-plugin-ssr";
import { Request, Response, NextFunction } from "express";

export const viteSsrRequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("vite request handler", req.url);
  const pageContextInit = {
    urlOriginal: req.originalUrl,
    urlQuery: req.query,
    // todo 1 extend request type
    user: (req as any).user,
    // return with url if you wanted to redirect from onBeforeRender
    redirect: null,
  };
  console.log("before render page");
  const pageContext = await renderPage(pageContextInit);
  console.log("after render page");
  if (pageContext.redirect) {
    return res.redirect(pageContext.redirect);
  }
  const { httpResponse } = pageContext;
  if (!httpResponse) return next();
  const { body, statusCode, contentType, earlyHints } = httpResponse;
  if (res.writeEarlyHints)
    res.writeEarlyHints({ link: earlyHints.map((e) => e.earlyHintLink) });
  res.status(statusCode).type(contentType).send(body);
};
