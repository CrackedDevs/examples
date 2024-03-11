import { createTRPCRouter, publicProcedure } from "@0/server/api/trpc";
import { env } from "@0/env";

export const crackeddevsRouter = createTRPCRouter({
    
    getJobs: publicProcedure.query(async() => {
        const LIMIT = 20;
        const ACTIVE = true;
      
        const jobs = await fetch(
            `https://api.crackeddevs.com/v1/get-jobs?limit=${LIMIT}&active=${ACTIVE}`,
            {
              headers: {
                'api-key': `${env.API_KEY}`,
              },
            }
          );

          return jobs.json();
    })
})