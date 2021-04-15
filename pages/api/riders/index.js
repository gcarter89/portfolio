import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (request, response) => {
    const riders = await prisma.rider.findMany()
    response.status(200).json(riders);
}