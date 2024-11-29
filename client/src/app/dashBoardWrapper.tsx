import React from 'react'
import NavBar from "@/app/(components)/NavBar"
import SideBar from "@/app/(components)/SideBar"
type Props = {}

const DashBoardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        <SideBar/>
        <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}>
            <NavBar/>   
        </main>
          
    </div>
    </>
  );
};

export default DashBoardWrapper