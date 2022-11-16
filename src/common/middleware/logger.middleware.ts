import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log('Request...');
//     next();
//   }
// }

// class we've been using is quite simple. It has no members, no additional methods,
// and no dependencies. Why can't we just define it in a simple function instead of a class?
// In fact, we can. This type of middleware is called functional middleware.
// Let's transform the logger middleware from class-based into functional
// middleware to illustrate the difference:

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  next();
};
