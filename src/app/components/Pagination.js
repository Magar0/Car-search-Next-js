'use client'

import "@/../bootstrap/dist/css/bootstrap.min.css"
import styles from "@/app/styles/pagination.module.css"
import { setCurrentPage } from "@/redux/slices/carSlice";
import Link from "next/link"
import { useParams } from "next/navigation";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch } from "react-redux";


const Pagination = (props) => {

    const params = useParams()
    const dispatch = useDispatch()

    dispatch(setCurrentPage(parseInt(params.pages)))
    const { currentPage, total, displayLength } = props

    let pageNo = []
    for (let i = (currentPage - 1); i <= (currentPage + 1); i++) {
        if (i <= 1) continue
        if (i >= 10) break
        pageNo.push(i)
    }


    const displayData = 6 * (currentPage - 1) + displayLength

    return (
        <>
            <div className={styles.pagination}>
                <div className="container-fluid d-flex justify-content-between ">
                    <div>
                        <p className="fs-5 fw-light"> {displayData > total ? total : displayData} from {total} </p>
                    </div>

                    <div>
                        <ul className={styles.pageno}>

                            {!(currentPage == 1) &&
                                <li> <Link href={`/page/${currentPage - 1}`} > <AiOutlineArrowLeft /></Link> </li>
                            }
                            <li > <Link href={`/page/1`} className={currentPage == 1 ? styles.activePage : ""} > 1 </Link></li>
                            {currentPage >= 5 && <p>...</p>}

                            {
                                pageNo.map((curElem) => {
                                    return <li key={curElem}> <Link href={`/page/${curElem}`} className={currentPage == curElem ? styles.activePage : ""}> {curElem}</Link></li>
                                })
                            }

                            {currentPage <= 6 && <p>...</p>}
                            <li > <Link href={`/page/10`} className={currentPage == 10 ? styles.activePage : ""} > 10 </Link></li>

                            {!(currentPage == 10) &&
                                <li> <Link href={`/page/${currentPage + 1}`}  > <AiOutlineArrowRight /></Link> </li>
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pagination