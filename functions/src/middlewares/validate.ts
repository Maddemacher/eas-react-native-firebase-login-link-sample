import express from "express";
import Joi from "joi";
import { BadRequestError } from "../errors";

export const body =
  (schema: Joi.Schema) => (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const { body: requestBody } = request;

    const { error } = schema.validate(requestBody);

    if (error) {
      next(new BadRequestError(`Bad body: ${error.message}`));
      return;
    }

    next();
  };

export const headers =
  (schema: Joi.Schema) => (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const { headers: requestHeaders } = request;

    const { error } = schema.validate(requestHeaders);

    if (error) {
      next(new BadRequestError(`Bad headers: ${error.message}`));
      return;
    }

    next();
  };
