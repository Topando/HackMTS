import React from 'react'
import NavBar from "../components/NavBar/NavBar"
import SideBar from "../components/SideBar/SideBar"

const DashBoardWrapper = ({children}) => {
  return (
    <>
    <div >
        <NavBar/>
        <main >
            <SideBar/>   
            <div>
              {children}
            </div>
        </main>
          
    </div>
    </>
  );
};

export default DashBoardWrapper