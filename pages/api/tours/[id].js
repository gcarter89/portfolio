import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (request, response) => {
    const tour = await prisma.tour.findUnique({
        where: {
            id: parseInt(request.query.id)
        },
    })
    for (let field in tour) {
        tour[field] = tour[field] === null ? undefined : tour[field];
    }
    response.status(200).json(tour);
}