import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import AdminDashboardClient from "./AdminDashboardClient"

async function AdminPage() {

    const user=await currentUser()

    if(!user) redirect("/")

    const adminEmail=process.env.ADMIN_EMAIL?.trim().toLowerCase()
    const userEmail=(
        user.primaryEmailAddress?.emailAddress ??
        user.emailAddresses[0]?.emailAddress
    )?.trim().toLowerCase()

    if(!adminEmail || !userEmail || userEmail!==adminEmail) redirect("/dashboard")

    
    return <AdminDashboardClient/>
}

export default AdminPage
