import React from 'react'
import "./App.css"
import Header from "./components/Header";
import TopFold from "./components/TopFold"
import TrendingNfts from "./components/TrendingNfts"

const App = () => {
  return (
    <div className='max-width'>
<Header />
<TopFold />
<TrendingNfts />


    </div>
  )
}

export default App
