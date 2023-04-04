const CreateBook = ({ onChangeForm, handleSubmit, label }) => {


    return(
        <div className="form-wrapper">
            <div className="form">
                <form>
                    <div className="input-group">
                        <label>{label[0]}</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name={label[0]}
                            placeholder={label[0]}
                        />
                    </div>
                    <div className="input-group">
                        <label>category</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name="category" 
                            placeholder="category" 
                        />
                    </div>
                    <div className="input-group">
                        <label>{label[2]}</label>
                        <input 
                            type="text" 
                            onChange={(e) => onChangeForm(e)} 
                            name={label[2]}
                            placeholder={label[2]}
                        />
                    </div>
                    <button 
                        className="submit-button"
                        onClick= {() => handleSubmit()}
                    >Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateBook;