import "@/../bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
import styles from "@/app/styles/card.module.css"
import Tooltip from '@mui/material/Tooltip';
import { GoPeople } from "react-icons/go";
import { LuFuel } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { PiSteeringWheel } from "react-icons/pi";
import Like from "./Like";
import MyCarousel from "./Carousel";

const Card = (props) => {

    const { id, model, make, model_year, price, people, mileage, steering, fuel, img } = props.data

    return (
        <>
            <div className={`card my-4 shadow ${styles.card}`}>
                {/* <Image src={img} className={styles.img} alt="img" height={200} width={300} /> */}
                <MyCarousel img={img} height={200} width={300} interval={2000} />

                <div className="card-body">
                    <div className="d-flex justify-content-between ">
                        <h5 className="card-title">{make} / <span className={styles.model}> {model} </span> </h5>
                        <span className={styles.year}> {model_year} </span>
                    </div>

                    <div className={styles.card_text}>
                        <div className="row">
                            <div className="col-6 d-flex">
                                <i><GoPeople /></i>
                                <p> {people} people</p>
                            </div>
                            <div className="col-6 d-flex">
                                <i><LuFuel /></i>
                                <p> {fuel} </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 d-flex">
                                <i><BsSpeedometer /></i>
                                <p> {mileage}km/1-litre</p>
                            </div>
                            <div className="col-6 d-flex">
                                <i><PiSteeringWheel /></i>
                                <p>{steering}</p>

                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className={`d-flex justify-content-between ${styles.card_bottom} `} >
                        <div>
                            <p><span className="fs-3">${price}</span> /month </p>
                        </div>
                        <div className={styles.like_icon}>
                            <Like />
                            <Link href={`/page/pages/${id}`}>
                                <Tooltip title="Order Now">
                                    <button className={`btn btn-primary ${styles.btn}`} >Rent Now</button>
                                </Tooltip>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card