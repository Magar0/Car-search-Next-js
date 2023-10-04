'use client'

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Like = () => {

    const [isLike, setIsLike] = useState(false)
    return (
        <>
            {!isLike && <i onClick={() => setIsLike(!isLike)}><AiOutlineHeart /></i>}
            {isLike && <i style={{ color: "red" }} onClick={() => setIsLike(!isLike)}><AiFillHeart /></i>}
        </>
    )
}

export default Like;