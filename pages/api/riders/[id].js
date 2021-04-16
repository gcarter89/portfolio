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
                    year: true
                }
            },
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

    for (let field in rider) {
        rider[field] = rider[field].length === 0 ? undefined : rider[field];
    }
    
    response.status(200).json(rider)
}