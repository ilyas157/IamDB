import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import GetData from '../utilities';
import Page from './Page';


function App() {
  const [page, setPage] = useState(1)
  const [type, setType] = useState("movie")
  const [selected, setSelected] = useState("discover")
  const [query, setQuery] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function getQuery(q) {
    setQuery(q)
  }
  function getPage(p) {
    setPage(p)
  }

  function getType(t) {
    setType(t)
    setPage(1)
  }
  function getSelected(s) {
    setSelected(s)
    setPage(1)
  }
  

  return (
    <div className='container'>
      <Header handleType={getType} handleSelect={getSelected} handleQuery={getQuery} handleSubmit={setSubmitted } />
      <GetData page={page} genre={type} select={selected} query={query} submit={submitted} handleSubmit={setSubmitted }/>
      <Page handlePage={getPage} page={page} />
      <Footer />

    </div>
  )
}

export default App
