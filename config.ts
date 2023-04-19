import  {  Config,  getFunctions,  getSchemaCreator  }  from  "nobox-client";

export const config: Config = {
endpoint:  "https://api.nobox.cloud",
project:  "waza_blog",
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6eyJfaWQiOiI2NDNmZmIxODQxYzFhNTk1NWEyYjg2MzkiLCJlbWFpbCI6IndhemFiYW5nYTAwQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMGRiOWE1ZjYtY2Q1OS00MDRlLWFhNTEtM2MxZDZiMTBkZTQzIiwicGljdHVyZSI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS85MDgzNDg3NT92PTQiLCJmaXJzdE5hbWUiOiJJZGVtZXRvIEVtZWRpb25nIn0sImlhdCI6MTY4MTkxNDY1MH0.pRBZFrsvl_jKRKTsqXqYGoZk2uGTgZqoE1aXnG7vLuA",
};
export  const  createSchema  =  getSchemaCreator(config);
export  const  Nobox  =  getFunctions(config);