//import jsonP from "./product.json";
import jsonP from "./product"
import Name from "./components/Name"
import Price from "./components/Price"
import Description from "./components/Description"
import Image from "./components/Image"
import { Card, Badge,Button} from 'react-bootstrap';
import ReviewStar from './ReviewStar'


function App() {
  return (
    <div className="App">
    

  
     <Card className = "mt-5 bglight.bg-body-tertiary d-flex justify-content-center mx-auto" style={{ width: '25rem' }} >
           
          <span class="position-absolute top-0 start-0 "><Badge bg="dark"><Price p={jsonP}/></Badge></span>
          {/* <span class="position-relative  top-10 start-10"><Badge bg="dark"><Price p={jsonP}/></Badge></span> */}
           
           <Image p={jsonP}/>  
          <Card.Body>
            <Card.Title> <Name p={jsonP} /></Card.Title>
            <Card.Text className= "text-body-secondary">
             <Description p={jsonP}/>
            </Card.Text>

            {/* Reviews */}
            <div>
               <ReviewStar/><ReviewStar/><ReviewStar/><ReviewStar/> <span style={{fontSize:'14px'}}> (186 reviews)</span>
              {/* Buutton */}
            
            <button style={{backgroundColor:'rgba(44, 212, 64)'}} class=' ms-4 btn rounded'> <img style={{width:'24px',height:'24px'}} src="./cart.png" alt="cart" /> </button>
            
            </div>
            
          </Card.Body>
          
        </Card> 
     
     

      
     {/* <div>
      <Image product={jsonP}/>
      <Name product={jsonP}/>
      <Price product={jsonP}/>
      <Description product={jsonP}/>
    </div> */}
    </div>
  );
}

export default App;
