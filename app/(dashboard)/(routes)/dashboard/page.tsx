import {UserButton} from "@clerk/nextjs";

const DashboarPage= () => {
  return (
    <div>
      <p>Dashboard Page (Protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>  

  )
}


export default DashboarPage;

