import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";

export default function Home(){
  return(
   <div>
     <h1>
      Home Page
    </h1>
    <SignUpButton mode="modal"></SignUpButton>
   </div>
  )
}