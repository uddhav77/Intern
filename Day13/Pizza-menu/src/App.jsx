import './App.css'
import Menucards from './Components/Menucards'
import Image1 from './assets/images/pizza2.jpg'
import Image3 from './assets/images/pizza4.jpeg'
import Image4 from './assets/images/pizza5.jpeg'

function App() {

  return (
    <>  
        <div className="main">
          <div className="container">

          <Menucards
            image = {Image1}
            description = 'Italian pizza with tomatos topping and leaves'
            suggestion = 'BEST FOR ALL'
            plus = '+'
            price = '$25.14'
          /> <hr />

          <Menucards
            image = {Image4}
            description = 'Napiletana spicy pizza with mashroom and leaves'
            suggestion = 'TOP CHOICE'
            plus = '+'
            price = '$55.00'
          />  <hr />

          <Menucards
            image = {Image3}
            description = 'Calofonia pizza with leaves and olives'
            suggestion = 'FOR KIDS'
            plus = '+'
            price = '$40.00'
          /> <hr />

          <Menucards
            image = {Image1}
            description = 'Italian pizza with tomatos topping and leaves'
            suggestion = 'BEST IN VEGAN'
            plus = '+'
            price = '$25.14'
          /> 

        </div>
      </div>
    </>
  )
}

export default App
