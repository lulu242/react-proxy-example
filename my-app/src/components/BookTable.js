const BookTable = ({books, label}) => {

    if (books.length === 0) return null;

    return(
        <div className="table-wrapper">
            <div className="table-box">
                <h2>My {label[0]}</h2>
                <div className="table-scroll">
                    <table>
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>{label[0]}</th>
                            <th>Category</th>
                            <th>{label[2]}</th>
                        </tr>
                        </thead>
                        <tbody>
                            {books.map((book,index) => {
                                return (
                                    <tr key = {index} className={index%2 === 0?'odd':'even'}>
                                        <td>{index + 1}</td>
                                        <td>{book.book?book.book:book.todo}</td>
                                        <td>{book.category}</td>
                                        <td>{book.author?String(book.author):String(book.isComplete)}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BookTable;