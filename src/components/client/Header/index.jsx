import React from 'react'
import { NavLink } from 'react-router-dom'
import ActionAuth from './ActionAuth'
import Menu from './Menu'
import SearchForm from './SearchForm'

const index = () => {
  return (
    <>
            <header className="py-2 px-[30px]">
                <nav className="flex justify-between items-center">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <NavLink to="/" className="">
                                <img className="w-[130px] pt-[16px] pb-5" src="https://i.imgur.com/rKpDjIQ.png" alt="" /></NavLink>
                        </div>
                        <Menu />
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <SearchForm />
                        <ActionAuth />
                    </div>
                </nav>
            </header >
        </>
  )
}

export default index