import express from "express";
import * as lambdas from "../lambdas";
// import { CustomError } from "../custom";

// const CUSTOM_HEADERS = {
//  Company: "Leadwallet",
//  "Access-Control-Allow-Origin": "*"
// };

export const ping = async (req: express.Request, res: express.Response) => {
 try {
  const response = await lambdas.ping();

  if (response.body.statusCode >= 400) throw new Error(response.body.response);

  return res.status(200).json({
   statusCode: 200,
   response: response.body.response
  });
 } catch (error) {
  return res.status(500).send(error.message);
 }
};

export const getFee = async (req: express.Request, res: express.Response) => {
 try {
  const response = await lambdas.getFee(req.body);

  if (response.body.statusCode >= 400) throw new Error(response.body.response);

  return res.status(200).json({
   statusCode: 200,
   response: response.body.response
  });
 } catch (error) {
  return res.status(500).send(error.message);
 }
};

export const executeTx = async (
 req: express.Request,
 res: express.Response
) => {
 try {
  const response = await lambdas.executeTx(req.body);

  if (response.body.statusCode >= 400) throw new Error(response.body.response);

  return res.status(200).json({
   statusCode: 200,
   response: response.body.response
  });
 } catch (error) {
  return res.status(500).send(error.message);
 }
};
