import { useEffect, useState } from "react"
import reviewCardC from "./ReviewCard.module.css"

function ReviewCard(props) {
    let img = "https://cdn-icons-png.flaticon.com/128/12709/12709532.png"
    const [arr, setArr] = useState([])


    useEffect(() => {

        if(props.rating) {
            let newArr = []
            for(let i = 0; i < props.rating; i++) {
                newArr.push(img)   
            }

            setArr(newArr)
        }

    },[props.rating])
    
    return (
        <div className={reviewCardC.cont}>
            <h2 className={reviewCardC.userNames}>{props.userNames}</h2>
            <p className={reviewCardC.reviewText}>{props.reviewText}</p>
            <div className={reviewCardC.ratingWrap}>
                {
                    arr.map((item) => 
                        <img src={item}/>
                    )
                }
            </div>
        </div>
    )
}

export default ReviewCard