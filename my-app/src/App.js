import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook, getAllTodos, createTodo } from './services/BookService';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);
  const label1  = ['book', 'category', 'author']

  const handleSubmit = () => {
    createBook(bookShelf).then(() => {
      setNumberBooks(numberOfBooks + 1);
    });
  };

  const getAllBook = () => {
    getAllBooks().then((data) => {
      setBooks(data);
      setNumberBooks(data.length);
      console.log(books)

    });
  };

  const handleOnChangeForm = (e) => {
    let inputData = bookShelf;
    if (e.target.name === 'book') {
      bookShelf.book = e.target.value;
    } else if (e.target.name === 'category') {
      bookShelf.category = e.target.value;
    } else if (e.target.name === 'author') {
      bookShelf.author = e.target.value;
    }
    setBookShelf(inputData);
  };


  const [todoShelf, setTodoShelf] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);
  const label2  = ['todo', 'category', 'isComplete']


  const handleSubmitTodo = () => {
    createTodo(todoShelf).then(() => {
      setNumberBooks(numberOfTodos + 1);
    });
  };

  const getAllTodo = () => {
    getAllTodos().then((data) => {
      setTodos(data);
      setNumberTodos(data.length);
    });
  };

  const handleOnChangeFormTodo = (e) => {
    let inputData = todoShelf;
    if (e.target.name === 'todo') {
      todoShelf.book = e.target.value;
    } else if (e.target.name === 'category') {
      todoShelf.category = e.target.value;
    } 
    else if (e.target.name === 'isComplete') {
      todoShelf.isComplete = e.target.value;
    }
    setTodoShelf(inputData);
  };

  return (
    <div className="main-wrapper">
      <div className="main">
        <Link to="/" className='link'>Book</Link>
        <Link to="/todo" className='link'>To Do</Link>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <CreateBook
                  bookShelf={bookShelf}
                  onChangeForm={handleOnChangeForm}
                  handleSubmit={handleSubmit}
                  label={label1}
                />
                <DisplayBoard
                  numberOfBooks={numberOfBooks}
                  getAllBook={getAllBook}
                  label={label1}
                />
                <BookTable 
                  books={books}
                  label={label1}
                />
              </>
            }
          />
          <Route
            path="/todo"
            element={
              <>
                <CreateBook
                  bookShelf={todoShelf}
                  onChangeForm={handleOnChangeFormTodo}
                  handleSubmit={handleSubmitTodo}
                  label={label2}
                />
                <DisplayBoard
                  numberOfBooks={numberOfTodos}
                  getAllBook={getAllTodo}
                  label={label2}
                />
                <BookTable 
                  books={todos}
                  label={label2}
                />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
