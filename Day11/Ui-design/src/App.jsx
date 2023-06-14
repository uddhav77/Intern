import './App.css'
// import Ui from './Components/Ui'

function App() {

  return (
    <>
      <div className="ecommerce-cart">
      <div className="containerA">
      <img
      className="bootimg"
      src="https://i.etsystatic.com/isla/f762a4/44581820/isla_fullxfull.44581820_tejnnnl6.jpg?version=0"
      alt="Product"
      />
     <div className='price'>Starting <br /> From <span style={{color:'skyblue'}}>$250</span> 
     </div>
    </div>

    <div className='containerB'>
        <div className='bigtitle'>
        Exclusive <span style={{color:'skyblue'}}>Latest Collection</span>
        </div >
        <p>Explore all new latest collection & <br /> varities of outfits</p>

        <button className='button'>Add To My Cart</button>
    </div>
    </div>
    </>
  )
}

export default App
