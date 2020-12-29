const CUSTOM_HEADERS = {
 Company: "Leadwallet",
 "Access-Control-Allow-Origin": "*"
};

export class CustomError extends Error {
 errorCode: number;
 headers: any;
 constructor(
  errorCode: number,
  message: string,
  headers: any = CUSTOM_HEADERS
 ) {
  super(message);
  this.errorCode = errorCode;
  this.headers = headers;
 }
}
