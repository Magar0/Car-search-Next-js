'use client'
import "@/../bootstrap/dist/css/bootstrap.min.css"
import styles from "@/app/styles/productpage/productPage.module.css"
// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GoPeople } from "react-icons/go";
import { LuFuel } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { PiSteeringWheel } from "react-icons/pi";
import Image from "next/image";
import GoBack from "../btn/GoBack";
import jsonData from "@/json/car";
import { Button } from "@mui/material";


const ProductPage = () => {

    const [cars, setCars] = useState([])
    const [isOrder, setIsOrder] = useState(false)
    const params = useParams()
    const { id } = params
    // const { cars } = useSelector((state) => state.cars)


    const { model, make, price, people, mileage, steering, fuel, img, description } = cars

    useEffect(() => {
        const data = jsonData.filter((curElem) => {
            return (curElem.id == id)
        });
        console.log("filter", data);

        setCars(data[0] ? data[0] : data)
    }, [])

    return (
        <>
            {!(cars.id) &&
                <div className={styles.err}>
                    <h3>Not Found</h3>
                    <GoBack />
                </div>
            }
            {
                (cars.id) &&
                <section >
                    <div className="container">
                        <div className={`row ${styles.item}`}>

                            <h2 className={`ms-5 my-4 ${styles.title}`} >{make} / <span className={styles.model}> {model} </span> <GoBack /> </h2>
                            <div className="col-7">
                                <Image src={img} alt="img" className="rounded-3" height={300} width={400} />
                            </div>

                            <div className='col-5'>
                                <ul className="mt-4 list-unstyled">
                                    <li> <i><GoPeople /></i> {people} people </li>
                                    <li> <i><LuFuel /></i> {fuel} </li>
                                    <li> <i><BsSpeedometer /></i> {mileage}km/1-litre </li>
                                    <li> <i><PiSteeringWheel /></i> {steering} </li>
                                </ul>

                                <div>
                                    <p>${price}/-</p>

                                    <Button aria-describedby={id} variant="contained" color="success" disabled={isOrder} onClick={() => setIsOrder(true)}>
                                        Order Now
                                    </Button>

                                    {isOrder && <h5 className="text-success" >Ordered Successful</h5>}
                                </div>

                            </div>
                        </div>

                        <div className={`offset-2 col-8 mt-4 styles.description`}>
                            <p> <span className='fs-4'>Description :</span> {description} </p>
                        </div>

                    </div>
                </section >
            }
        </>
    )
}

export default ProductPage;