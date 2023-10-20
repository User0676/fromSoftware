import React from "react";
import Book from './Book';


const booksData = [
    {id:1,title:'book1',author:'Author 1', image:'book1.jpg'},
    {id:2,title:'book2',author:'Author 2', image:'book2.jpg'},
    {id:3,title:'book3',author:'Author 3', image:'book3.jpg'},
    {id:4,title:'book4',author:'Author 4', image:'book4.jpg'},
    {id:5,title:'book5',author:'Author 5', image:'book5.jpg'},
    {id:6,title:'book6',author:'Author 6', image:'book6.jpg'},
    {id:7,title:'book7',author:'Author 7', image:'book7.jpg'},
    {id:8,title:'book8',author:'Author 8', image:'book8.jpg'},
];

function BookList(){
    return(
        <div>
            {booksData.map((book)   => (
                <Book key = {book.id} book = {book}/>)
            )
            }
        </div>
    );
}


export default BookList;