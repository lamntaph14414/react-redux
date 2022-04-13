import React from 'react'
import { Link, NavLink } from 'react-router-dom';
type Props = {}

const AsideCategory = (props: Props) => {
  return (
    <aside className="rounded-lg bg-white py-5 px-3 sticky top-[10px]">
            <div className="shop__category-group">
                <span className="ff-2">Top</span>
                <ul className="category-item__list p-0">
                    <li className="category-item__item list-none my-1 mx-0"> <Link to=""
                        className="category-link-active inline-block w-full py-[6px] px-[5px] rounded-[5px] trans-second hover:bg-primary-15-color hover:text-primary-color">Trending
                    </Link> </li>
                    <li className="category-item__item list-none my-1 mx-0"> <Link to=""
                        className="inline-block w-full py-[6px] px-[5px] rounded-[5px] trans-second hover:bg-primary-15-color hover:text-primary-color">
                        Mostest view </Link> </li>
                </ul>
            </div>
            <div className="shop__category-group">
                <span className="ff-2">Category</span>
                <ul className="category-item__list p-0">
                <li className="category-item__item list-none my-1 mx-0"> <NavLink to=""
                            className="cate-link inline-block w-full py-[6px] px-[5px] rounded-[5px] trans-second hover:bg-primary-15-color hover:text-primary-color">
                             </NavLink> </li>

                </ul>
                </div>
            <div className="shop__category-group">
                <span className="ff-2">Filter</span>
                <div className="my-2">
                <input className="filter-range w-full block" type="range" min="0" max="1000" />
                </div>
            </div>
        </aside>
  )
}

export default AsideCategory