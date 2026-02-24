"use client"

import { syncUser } from "@/lib/actions/users"
import { useUser } from "@clerk/nextjs"
import { useEffect } from "react"

function UserSync() {

    const { isSignedIn, isLoaded, user } = useUser()

    useEffect(()=>{
        const handleuserSync=async()=>{
            if(isLoaded && isSignedIn && user?.id){
                try {
                    await syncUser()
                } catch (error) {
                    console.error("Failed to sync user", error)
                }
            }
        }

        handleuserSync()
    },[isLoaded,isSignedIn,user?.id])

  return null
}

export default UserSync
