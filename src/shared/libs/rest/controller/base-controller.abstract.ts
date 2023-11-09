import { injectable } from 'inversify';
import { Controller } from './controller.interface.js';
import { Response, Router } from 'express';
import { Logger } from '../../logger/logger.interface.js';
import { Route } from '../index.js';
import { StatusCodes } from 'http-status-codes';

const DEFAULT_CONTENT_TYPE = 'application/json';

@injectable()
export abstract class BaseController implements Controller {
  private readonly _router: Router;

  constructor(protected readonly logger: Logger) {
    this._router = Router();
  }

  get router() {
    return this._router;
  }

  public addRoute(route: Route): void {
    this._router[route.method](route.path, route.handler.bind(this));
  }

  public send<T>(res: Response, statusCode: number, data: T): void {
    res.type(DEFAULT_CONTENT_TYPE).status(statusCode).json(data);
  }

  public created<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.CREATED, data);
  }

  public noContent<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.NO_CONTENT, data);
  }

  public ok<T>(res: Response, data: T): void {
    this.send(res, StatusCodes.OK, data);
  }
}
