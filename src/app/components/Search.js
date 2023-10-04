'use client'

import "@/../bootstrap/dist/css/bootstrap.min.css"
import styles from "@/app/styles/search.module.css"
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setSearchItem, setCategory, setCurrentPage } from "@/redux/slices/carSlice";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";



const Search = () => {

    const [input, setInput] = useState("")
    const [brand, setBrand] = useState("all brands")

    const dispatch = useDispatch()
    const router = useRouter()
    const { cars } = useSelector(state => state.cars)


    const handleSearch = (event) => {
        setInput(event.target.value);
    }
    const handleClick = () => {
        setBrand("")
        dispatch(setSearchItem(input))
        dispatch(setCategory(""))
        router.push('/page/1')
    }
    const handleBrand = (e) => {
        setBrand(e.target.value)
        setInput("")
        dispatch(setSearchItem(""))
        dispatch(setCategory(e.target.value))
        router.push('/page/1')
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleClick()
        }
    }

    const brandList = ["all brands", ...new Set(cars.map(curElem => curElem.make))];


    return (
        <>
            <nav className={styles.navbar}>
                <div className="container-fluid d-flex justify-content-between ">
                    <div className="d-flex" role="search">
                        <input className="form-control me-2 rounded-4" type="search" placeholder="Search" aria-label="Search" value={input} onChange={handleSearch} onKeyDown={handleKeyDown} />
                        <AiOutlineSearch className={styles.search_icon} onClick={handleClick} />
                    </div>

                    <div className={styles.filter}>
                        <select name="" id="">
                            <option value="relevance">Relevance</option>
                        </select>

                        <select name="brand" id="brand" className={styles.brand} value={brand} onChange={(e) => handleBrand(e)}>
                            {brandList.map((curElem, ind) => {
                                return <option className="text-capitalize " value={curElem} key={ind}> {curElem} </option>

                            })}
                        </select>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Search