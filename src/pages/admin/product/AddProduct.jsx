/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import slugify from 'react-slugify'
import { addProduct } from '../../../features/product/productSlice'
import { listCategory } from '../../../features/categoryPro/cateProSlice'

const AddProduct = () => {
    const categoryProduct = useSelector(data => data.category.value);
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        const slugProduct = slugify(data.name)
        const dataProduct = {...data,  slug: slugProduct}
        dispatch(addProduct(dataProduct));
        navigate('/admin/product')
    }
    useEffect(() => {
        dispatch(listCategory());
    }, [])


    return (
        <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-gray-700 :text-gray-200">
                Product
            </h2>
            <h4 className="text-xl font-semibold text-green-500 :text-gray-200">Add product</h4>
            <div className="grid grid-cols-2 gap-8">
                <form id="form-add" className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                    <label className="block :text-white text-gray-700 text-sm font-bold mb-2">
                        Product name
                    </label>
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                        id="title-product" type="text"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <span className="text-red-500">Field is required!</span>}
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                    <div className="m-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Image
                        </label>
                        <div className="mb-3">
                        <input
                            {...register('img', { required: true })}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="text"
                            id="img-product" />
                        </div>
                    </div>
                    <div className="m-full mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Category Name
                        </label>
                        <select
                        {...register('categoryPro', { required: true })}
                        className="selected-cate form-select appearance-none block 
                                                    w-full
                                                    px-3
                                                    py-[4px]
                                                    text-base
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding bg-no-repeat
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example">
                        {categoryProduct?.map((item) => {
                            return <option className=""defaultValue={item._id}>{item.name}</option>
                        })}
                        </select>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                    <div className="m-full mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Regular Price($)
                        </label>
                        <div className="mb-3">
                        <input
                            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                            id="old-price-product" type="number"
                            {...register('regularPrice', { required: true })}
                        />
                        {errors.regularPrice && <span className="text-red-500">Field is required!</span>}
                        </div>
                    </div>
                    <div className="m-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                        Sale Price($)
                        </label>
                        <div className="mb-3">
                        <input
                            {...register('salePrice')}
                            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline"
                            id="price-product" type="number"
                        />
                        {errors.salePrice && <span className="text-red-500">Field is required!</span>}
                        </div>
                    </div>
                    </div>
                    <div className="mb-4">
                    <label className="block :text-white text-gray-700 text-sm font-bold mb-2">
                        Size
                    </label>
                    <input
                        {...register('size', { required: true })}
                        id="size" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:-outline" type="text" />
                    </div>
                    <div className="mb-4">
                    <label className="block :text-white text-gray-700 text-sm font-bold mb-2">
                        Description
                    </label>
                    <textarea className="w-full" id="desc-product" {...register('desc')} ></textarea>
                    </div>
                    <div className="text-right">
                    <button
                        className="btnAdd bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:-outline"
                    >
                        Submit
                    </button>
                    </div>
                </form>
                <div className="img">
                    <img id="img-preview" className="w-full h-[420px] object-cover"
                    src="https://i.imgur.com/3XGhQ2Z.png"
                    alt="" />
                </div>
            </div>
        </div>
    )
}

export default AddProduct