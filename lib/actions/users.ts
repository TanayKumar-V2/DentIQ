"use server"

import { currentUser } from "@clerk/nextjs/server"
import {prisma} from "../prisma"

export async function syncUser(){
  try {
    const user = await currentUser()
    if (!user) return null

    const email =
      user.primaryEmailAddress?.emailAddress ?? user.emailAddresses[0]?.emailAddress

    if (!email) {
      throw new Error(`Cannot sync Clerk user ${user.id}: no email address found`)
    }

    const existingByClerkId = await prisma.user.findUnique({
      where: { clerkId: user.id },
    })

    if (existingByClerkId) {
      return await prisma.user.update({
        where: { clerkId: user.id },
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          email,
          phone: user.phoneNumbers[0]?.phoneNumber,
        },
      })
    }

    const existingByEmail = await prisma.user.findUnique({
      where: { email },
    })

    if (existingByEmail) {
      return await prisma.user.update({
        where: { email },
        data: {
          clerkId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phoneNumbers[0]?.phoneNumber,
        },
      })
    }

    const dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email,
        phone: user.phoneNumbers[0]?.phoneNumber,
      },
    })

    return dbUser
  } catch (error) {
    console.error("Error in syncUser", error)
    throw error
  }
}
