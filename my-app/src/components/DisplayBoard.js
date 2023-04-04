const DisplayBoard = ({numberOfBooks, getAllBook, label}) => {
    
    return(
        <div className="display-wrapper">
            <div className="display-box">
                <div className="display-board">
                    <h4>생성된 수</h4>
                    <div className="number">
                    {numberOfBooks}
                    </div>
                </div>
                <div className="get-button">
                    <button onClick={() => getAllBook()}>{`Get all ${label[0]}s`}</button>
                </div>
            </div>
        </div>
    )
}

export default DisplayBoard;