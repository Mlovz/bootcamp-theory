function Menu(props) {
    return (
        <>
            {
                 props.arr.map((item) => {
                    return (
                        <>
                        <h2>{item}</h2>
                        </>
                    )
                })
            }
        </>
    )
}

export default Menu