// app/_libs/microcms.ts
import { createClient } from 'microcms-js-sdk';
import type { MicroCMSListContent, MicroCMSImage, MicroCMSQueries } from 'microcms-js-sdk';

export type Skill = {
  skillname: string;
  image: MicroCMSImage;
  skilltext: string;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}
if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

export const getSkillsList = async (queries?: MicroCMSQueries) => {
  return await client.getList<Skill>({ endpoint: 'skills', queries });
};



// import { createClient } from "microcms-js-sdk";
// import type {
//     MicroCMSQueries,
//     MicroCMSImage,
//     MicroCMSListContent,
// } from "microcms-js-sdk";

// export type skill = {
//     skillname: string;
//     image: MicroCMSImage;
//     skilltext: string;
// }& MicroCMSListContent;

// if (!process.env.MICROCMS_SERVICE_DOMAIN) {
//   throw new Error("MICROCMS_SERVICE_DOMAIN is required");
// }

// if (!process.env.MICROCMS_API_KEY) {
//   throw new Error("MICROCMS_API_KEY is required");
// }

// const client = createClient({
//   serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
//   apiKey: process.env.MICROCMS_API_KEY,
// });

// export const getMembersList = async (queries?: MicroCMSQueries) => {
//   const listData = await client.getList<skill>({
//     endpoint: "skills",
//     queries,
//   });

//   return listData;
// };
