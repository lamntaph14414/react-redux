import React from 'react'
import { Outlet } from 'react-router-dom'
import NavAdmin from '../../components/admin/Nav'
import Sidebar from '../../components/admin/Sidebar'

type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <>
        <div className=" flex h-screen bg-gray-50 :bg-gray-900">
            <Sidebar />
            <div className="flex flex-col flex-1 w-full">
                <NavAdmin />
                <main className="h-full overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    </>
  )
}

export default AdminLayout