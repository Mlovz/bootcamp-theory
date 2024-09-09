function TestimonialsList(props) {
    return (
        <ul>
            {
                props.arr.map((item) => {
                    return <li>{item}</li>
                })
            }
        </ul>
    )
}
export default TestimonialsList