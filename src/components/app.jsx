import React from "react";
import Header from './header';
import Note from './note';
import Footer from './footer';
import notes from '../notes'; 

function App(){
    return (
        <div>
        <Header />
        {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
        <Footer />
        </div>


    )

}
export default App
