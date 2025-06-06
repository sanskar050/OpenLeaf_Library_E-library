import React from 'react'
import "./Section.css"
import ViewAll from './ViewAll'
import { NavLink } from 'react-router-dom'
import Book from './Book'

function Section3() {

  function openBook({authorName, bookTitle}) {
    const author_Name = authorName.replaceAll(" ", "_")
    const book_Title = bookTitle.replaceAll(" ", "_")
    const fileUrl = `/Popular_Books/${author_Name}-${book_Title}.pdf`;
    const sliced = fileUrl.slice(15)
    const Name = sliced.replaceAll("_", " ")
    const bookName = Name.replaceAll("-", " - ")
    const viewerUrl = `/pdf-viewer.html?file=${encodeURIComponent(fileUrl)}&title=${encodeURIComponent(bookName)}`;
    window.open(viewerUrl, '_blank');
  }

  return (
    <div>
      <div className='popularBooksTitle'>
        <h2>POPULAR BOOKS</h2>
        <NavLink to="/popular_books"><ViewAll /></NavLink>
      </div>
      <div className='popularBooks'>
        <Book onClick={() => openBook({ bookTitle: "Strength Training Anatomy 2nd Edition", authorName: "Frederic Delavier" })} src="https://m.media-amazon.com/images/I/81gBnqgwb2L._AC_UF1000,1000_QL80_.jpg" alt="image" bookTitle="Strength Training Anatomy 2nd Edition" authorName="Frederic Delavier" />
        <Book onClick={() => openBook({ bookTitle: "The Making of a Manager", authorName: "Julie Zhuo" })} src="https://m.media-amazon.com/images/I/71qwuYqlexL.jpg" alt="image" bookTitle="The Making of a Manager" authorName="Julie Zhuo" />
        <Book onClick={() => openBook({ bookTitle: "Beauty Sick", authorName: "Renee Engeln" })} src="https://m.media-amazon.com/images/I/81eomOsXF9L._AC_UF1000,1000_QL80_.jpg" alt="image" bookTitle="Beauty Sick" authorName="Renee Engeln" />
        <Book onClick={() => openBook({ bookTitle: "Sacred Geometry", authorName: "Richard Heath" })} src="https://m.media-amazon.com/images/I/81exOiiij-L._UF1000,1000_QL80_.jpg" alt="image" bookTitle="Sacred Geometry" authorName="Richard Heath" />
        <Book onClick={() => openBook({ bookTitle: "Waiting For Godot", authorName: "Samuel Beckett" })} src="https://m.media-amazon.com/images/I/71AmkThCufL._AC_UF1000,1000_QL80_.jpg" alt="image" bookTitle="Waiting For Godot" authorName="Samuel Beckett" />
        <Book onClick={() => openBook({ bookTitle: "Like A House On Fire", authorName: "Cate Kennedy" })} src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1346626915i/15982707.jpg" alt="image" bookTitle="Like A House On Fire" authorName="Cate Kennedy" />
      </div>
    </div>
  )
}

export default Section3