import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './components/Card.jsx';
import Navbar from './layouts/NavbarLayout/Navbar.jsx';
import Footer from './layouts/FooterLayout/Footer.jsx';
import "./App.css"
const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8000/products")
    console.log(response.data);
    setData(response.data)
    setisLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <>
        <Navbar />
        <div style={{maxWidth: "80%", marginLeft: "auto", marginRight: "auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: "30px", padding: "100px"}}>
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            data.map(car=> <Card item={car} key={data.id} />)
          )}
        </div>
        <Footer />
    </>
    
  )
}

export default App