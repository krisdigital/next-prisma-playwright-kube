import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const reset = async () => {
  await prisma.$transaction([
    prisma.profile.deleteMany(),
    prisma.post.deleteMany(),
    prisma.user.deleteMany(),
  ]);
};

export default reset;
