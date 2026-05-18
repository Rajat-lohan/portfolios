import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { prisma } from "@/lib/prisma";

export const projectRouter = router({
  getProjects: publicProcedure.query(async () => {
    return prisma.project.findMany();
  }),

  createProject: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      return prisma.project.create({
        data: {
          title: input.title,
          description: input.description,
          image: "",
          githubUrl: "",
          liveUrl: "",
          techStack: [],
        },
      });
    }),
});