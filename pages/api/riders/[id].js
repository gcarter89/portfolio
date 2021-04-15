import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (request, response) => {
    const rider = await prisma.rider.findUnique({
        where: {
            id: parseInt(request.query.id)
        },
        include: {
            komWins: {
                select: {
                    year: true
                }
            },
            pointsWins: {
                select: {
                    year: true
                }
            },
            gcWins: {
                select: {
                    year: true
                }
            },
            intSprintWins: {
                select: {
                    year: true
                }
            },
            combinationWins: {
                select: {
                    year: true
                }
            },
            youngRiderWins: {
                select: {
                    year: true
                }
            }
        }
    })
    response.status(200).json(rider);
}