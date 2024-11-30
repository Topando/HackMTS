import React from 'react'
import NavBar from "@/app/(components)/NavBar"
import SideBar from "@/app/(components)/SideBar"

const DashBoardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <div >
        <NavBar/>
        <main >
            <SideBar/>   
            <div className="main-board">
              {children}
            </div>
        </main>
          
    </div>
    </>
  );
};

export default DashBoardWrapper