const Title = (props) => {
    return(
        <>
            <div>
            <h1>
                <span>{props.children}</span>
                <span>{props.name}</span>
                </h1>
            </div>
        </>
    )
}

export default Title;