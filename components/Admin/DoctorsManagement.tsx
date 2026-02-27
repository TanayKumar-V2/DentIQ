import { useGetDoctors } from "@/hooks/use-doctors"
import { useState } from "react"
import { Card, CardHeader } from "../ui/card"

function DoctorManagement(){
    const{data:doctors=[]}=useGetDoctors()

    const[isAddDialogOpen, setIsAddDialogOpen]=useState(false)
    const[isEditDialogOpen, setIsEditDialogOpen]=useState(false)
    const[selectedDoctor,setSelectedDoctor]=useState(null)

    const handleEditDoctor=()=>{

    }

    const handleCloseEditDialog=()=>{

    }

    return(
        <Card className="mb-12">
            <CardHeader></CardHeader>
        </Card>
    )
}

export default DoctorManagement