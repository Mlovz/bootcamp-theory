
function BusinessCard(props) {
    return(
            <div>
                <h1>{props.name}</h1>
                <h2>{props.jobTitle}</h2>
                <p>{props.company}</p>
            </div>
    )
}


function App() {
    return (
        <div>
            <BusinessCard name='' jobTitle='' company='' />
        </div>
    );
}