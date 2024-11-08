// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"KNipA/0mPwxGlVhdnMVTpYVlb8gZuqBouYueNcVRGUM="},"public":{"type":"Buffer","data":"y7Q1Yz/9pBYZr0lZRdkqeAyDs44ar5ARM9u00K+R00g="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"GIlIAmHE/WcERG25vDf2ZUQmj07mdhvcxtAuuS0o4Gs="},"public":{"type":"Buffer","data":"0GkX2VXsqLUuJNQwV3KxCO7awrK7raKerTt/N5ZG6Ek="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"MJ1Ar3ZSa9WDkCGXfuWXsJST3myEY5/QLDSDDmFvKXU="},"public":{"type":"Buffer","data":"+8QyjSdMmGnNj2nakzFFddcM0KUKTVgak1pjVLboVnw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"CL1vRoIrPJ1MfG1He8KRJgxBiQ1zi7TS+BF8rvO4EHY="},"public":{"type":"Buffer","data":"k8y0clJnYaoEHoIxhlfW9WqB6nGtYduABW+Kmc2bqBY="}},"signature":{"type":"Buffer","data":"zAhb/zSz/fug6FC1ohxbhOOR5Oe7MhMSM1mQH2awL1DpPalAyEnxolTREJ9PrbOvE0hVbsCaaO5aLhnB5e9ygA=="},"keyId":1},"registrationId":241,"advSecretKey":"qO9huEHlCbBAXi8aBsZVSzVuvCAtPT58TYxxXz4cTu0=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"4BPEcR0VQmy6VA2_5IMzZw","phoneId":"b5e24e56-2300-4ddb-9023-4cdbe82e55bf","identityId":{"type":"Buffer","data":"s2RhxSn6FDE3pUkX3QKgX+pcGsY="},"registered":true,"backupToken":{"type":"Buffer","data":"LMkCM6wVlJwLsALC6KBbUVz1fGg="},"registration":{},"pairingCode":"DKSPPCZL","me":{"id":"260967838144:9@s.whatsapp.net","name":"𖣘𒁂MR2K CYBER TECH 𒁂𖣘","lid":"100550049812691:9@lid"},"account":{"details":"CIPXsNoHEM3XsLkGGAEgACgA","accountSignatureKey":"pH4zaRrFvaK3FKmsyg7TOFVK/XMDh9WSZlWomoi7wg0=","accountSignature":"V1xkzMoYv4wMtV/BPxAhjYNcjREVYQYXcXzRyADWSdQUJnPw49QdwLnaQi1T2+83TXtfeduhx10iZjEiWyUdCA==","deviceSignature":"k2RSyApoLAWlOTrOYY6hsXmAS+sO31+vsEWfHkOPh7r4TBcMPghLQUul4Dzd98duzSrmFkOGIbOLHskadsnYgQ=="},"signalIdentities":[{"identifier":{"name":"260967838144:9@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BaR+M2kaxb2itxSprMoO0zhVSv1zA4fVkmZVqJqIu8IN"}}],"platform":"smba","lastAccountSyncTimestamp":1730948048}unter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"4BPEcR0VQmy6VA2_5IMzZw","phoneId":"b5e24e56-2300-4ddb-9023-4cdbe82e55bf","identityId":{"type":"Buffer","data":"s2RhxSn6FDE3pUkX3QKgX+pcGsY="},"registered":true,"backupToken":{"type":"Buffer","data":"LMkCM6wVlJwLsALC6KBbUVz1fGg="},"registration":{},"pairingCode":"DKSPPCZL","me":{"id":"260967838144:9@s.whatsapp.net","name":"𖣘𒁂MR2K CYBER TECH 𒁂𖣘","lid":"100550049812691:9@lid"},"account":{"details":"CIPXsNoHEM3XsLkGGAEgACgA","accountSignatureKey":"pH4zaRrFvaK3FKmsyg7TOFVK/XMDh9WSZlWomoi7wg0=","accountSignature":"V1xkzMoYv4wMtV/BPxAhjYNcjREVYQYXcXzRyADWSdQUJnPw49QdwLnaQi1T2+83TXtfeduhx10iZjEiWyUdCA==","deviceSignature":"k2RSyApoLAWlOTrOYY6hsXmAS+sO31+vsEWfHkOPh7r4TBcMPghLQUul4Dzd98duzSrmFkOGIbOLHskadsnYgQ=="},"signalIdentities":[{"identifier":{"name":"260967838144:9@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BaR+M2kaxb2itxSprMoO0zhVSv1zA4fVkmZVqJqIu8IN"}}],"platform":"smba","last",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : true,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : true,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : true,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "𝙈𝙍2𝙆 𝙏𝙀𝘾𝙃",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "260967838144",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;
