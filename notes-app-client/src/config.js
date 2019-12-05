export default {
  STRIPE_KEY: "pk_test_fntA0QEDRcT70m4jAuHt67Xh00ZzdoB2Pn",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "matts-bucket-test1"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://428p1fj649.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_8CDFH1umR",
    APP_CLIENT_ID: "42kl8b7onjcup2ffbrpl8u47mf",
    IDENTITY_POOL_ID: "us-east-2:e6f6c8bc-0508-4957-9aa1-18358a513673"
  }
};