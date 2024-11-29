import React from 'react'
import NavBar from "@/app/(components)/NavBar"
import SideBar from "@/app/(components)/SideBar"
type Props = {}

const DashBoardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <div >
        <SideBar/>
        <main >
            <NavBar/>   
        </main>
          
    </div>
    </>
  );
};

export default DashBoardWrapper