import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

//add number of wins per classification
export default async (request, response) => {
    try {
        const riders = await prisma.rider.findMany({
            include: {
                _count: {
                    select: { 
                        gcWins: true,
                        komWins: true,
                        pointsWins: true,
                        intSprintWins: true,
                        youngRiderWins: true,
                        combinationWins: trsfue
                    }
                }
            }
        })
        
        riders.forEach(rider => {
            for (let prop in rider._count) {
                if (rider._count[prop] === 0) {
                    rider._count[prop] = undefined
                }
            }
        })
    
        response.status(200).json(riders);
        
    } catch (error) {
        // response.status(500).send('Internal Server Error');
        console.error(error)
        throw error;
        
        
    }
    
}