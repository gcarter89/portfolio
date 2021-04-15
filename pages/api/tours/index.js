// Next.js API route support: https://nextjs.org/docs/api-routes/introductio
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (request, response) => {
  const tours = await prisma.tour.findMany()
  const classifications = ["gcWinnerId", "komWinnerId", "pointsWinnerId", "intSprintWinnerId", "youngRiderWinnerId", "combinationWinnerId"]
  classifications.forEach(classification => {
    tours.forEach(tour => {
      tour[classification] = tour[classification] != null ? tour[classification] : undefined; 
    })
  })

  response.status(200).json(tours)
}
