"use client"

import { useDispatch, useSelector } from "react-redux"
import DisplayItems from "@/app/components/DisplayItems"
import Pagination from "@/app/components/Pagination"
import Search from "@/app/components/Search"
import { useEffect } from "react"
import jsonData from "@/json/car"
import { setCars } from "@/redux/slices/carSlice"

const CarList = () => {

    const dispatch = useDispatch()
    const { cars, currentPage, searchItem, category } = useSelector((state) => state.cars)

    let carList = cars

    // filtering data based on searched input.....
    if (searchItem) {
        carList = cars.filter(curElem => {
            const regEx = new RegExp(searchItem, "i");
            return regEx.test(curElem.model) || regEx.test(curElem.make)
        })
    }

    // filtering data based on selected brands.........
    if (category) {
        if (!(category == "all brands")) {
            carList = cars.filter(curElem => {
                return curElem.make.includes(category)
            })
            console.log(carList)
        }
    }

    const newCarList = carList.slice((currentPage - 1) * 6, currentPage * 6); //car list to be displayed in a page

    const getData = async () => {
        dispatch(setCars(jsonData))
    }


    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Search />
            <DisplayItems data={newCarList} />
            <Pagination currentPage={currentPage} total={carList.length} displayLength={newCarList.length} />
        </>
    )
}

export default CarList;