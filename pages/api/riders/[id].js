import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (request, response) => {
    const rider = await prisma.rider.findUnique({
        where: {
            id: parseInt(request.query.id)
        },
        include: {
            gcWins: {
                select: {
                    id: true,
                    year: true
                }
            },
            komWins: {
                select: {
                    id: true,
                    year: true
                }
            },
            pointsWins: {
                select: {
                    id: true,
                    year: true
                }
            },
            intSprintWins: {
                select: {
                    id: true,
                    year: true
                }
            },
            combinationWins: {
                select: {
                    id: true,
                    year: true
                }
            },
            youngRiderWins: {
                select: {
                    id: true,
                    year: true
                }
            }
        }
    })

    for (let field in rider) {
        rider[field] = rider[field].length === 0 ? undefined : rider[field];
    }
    
    response.status(200).json(rider)
}