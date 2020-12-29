import AWS from "aws-sdk";

const lambda = new AWS.Lambda({
 region: "us-east-2",
 endpoint: "https://lambda.us-east-2.amazonaws.com"
});

export const ping = async (): Promise<{ body: any }> => {
 try {
  const pingInvocation = await lambda
   .invoke({ FunctionName: "leadwallet-multisender-api-ping" })
   .promise();
  if (pingInvocation.FunctionError)
   throw new Error(pingInvocation.FunctionError);
  // console.log(pingInvocation.StatusCode);
  const payload = { ...JSON.parse(pingInvocation.Payload.toString()) };
  return Promise.resolve({
   body: payload.body
  });
 } catch (error) {
  return Promise.reject(error);
 }
};

export const executeTx = async (body: any): Promise<{ body: any }> => {
 try {
  const executeTxInvocation = await lambda
   .invoke({
    FunctionName: "leadwallet-multisender-api-executeTx",
    Payload: Buffer.from(JSON.stringify(body))
   })
   .promise();
  if (executeTxInvocation.FunctionError)
   throw new Error(executeTxInvocation.FunctionError);

  // console.log(executeTxInvocation.StatusCode);
  const payload = { ...JSON.parse(executeTxInvocation.Payload.toString()) };
  return Promise.resolve({
   body: payload.body
  });
 } catch (error) {
  return Promise.reject(error);
 }
};

export const getFee = async (body: any): Promise<{ body: any }> => {
 try {
  const feeInvocation = await lambda
   .invoke({
    FunctionName: "leadwallet-multisender-api-getFee",
    Payload: Buffer.from(JSON.stringify(body))
   })
   .promise();
  if (feeInvocation.FunctionError) throw new Error(feeInvocation.FunctionError);

  const payload = { ...JSON.parse(feeInvocation.Payload.toString()) };
  return Promise.resolve({
   body: payload.body
  });
 } catch (error) {
  return Promise.reject(error);
 }
};
