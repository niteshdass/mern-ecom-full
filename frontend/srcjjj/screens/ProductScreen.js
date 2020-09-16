import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { detailsProduct } from '../actions/productActions';
function ProductScreen(props){
  let [qty,setQty] = useState(1);
  const productDetails = useSelector(state=>state.productDetails);
  const {product,loading,error} = productDetails;
  const dispatch = useDispatch();
 

    useEffect(() => {
       dispatch(detailsProduct(props.match.params.id));
      return () => {
         
      }
    }, []);

    const handleAddToCart = () =>{
      props.history.push("/cart/"+props.match.params.id + "?qty=" +qty)
    }

  

    return (
      
        <div>
      <div className="back-to-result">
    <Link to="/">Back to result </Link>
      </div>
      {
      loading?<div><h1>......Loading......</h1></div>:
      error?<div>{error}</div>:(

<div className="details">
            <div className="details-image">
              <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  <a href="#reviews">
                 
                      value={product.rating}
                      text={product.numReviews + ' reviews'}
                 
                  </a>
                </li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
                  <div>{product.description}</div>
                </li>
              </ul>
            </div>
            
            <div className="details-action">
              <ul>
                <li>Price: 87</li>
                <li>
                  Status:{product.countInStock>0?"Stock":"out Ofstock"}
                 
                </li>
                <li>
                  Qty:<select value={ qty } onChange={ (e)=> {setQty(e.target.value)}} >
                   
                 {[...Array(product.countInStock).keys()].map(x=>
                  <option value={x+1}>{x+1}</option>)}
                  
                  </select>

                 
                </li>
                <li>
                  {product.countInStock < 1 ?<div>Out of Stock</div>:
               <button
                onClick={handleAddToCart}
                 className="button primary"
               >
                 Add to Cart
               </button>
}
              
              
                   
                
                </li>
              </ul>
            </div>
          </div>
      )

    }
    
          
          <div className="content-margined">
            <h2>Reviews</h2>
            <div>There is no review</div>
            <ul className="review" id="reviews">
             
                <li  >
                  <div>hello</div>
                  <div>
                    5
                  </div>
                  <div>yuuyuyyu</div>
                  <div>jjdjjd</div>
                </li>
            
              <li>
                <h3>Write a customer review</h3>
              
                  <form >
                    <ul className="form-container">
                      <li>
                        <label htmlFor="rating">Rating</label>
                        <select
                          name="rating"
                          id="rating"
                          
                          
                        >
                          <option value="1">1- Poor</option>
                          <option value="2">2- Fair</option>
                          <option value="3">3- Good</option>
                          <option value="4">4- Very Good</option>
                          <option value="5">5- Excelent</option>
                        </select>
                      </li>
                      <li>
                        <label htmlFor="comment">Comment</label>
                        <textarea
                          name="comment"
                      
                          
                        ></textarea>
                      </li>
                      <li>
                        <button type="submit" className="button primary">
                          Submit
                        </button>
                      </li>
                    </ul>
                  </form>
               
                  <div>
                    Please <Link to="/signin">Sign-in</Link> to write a review.
                  </div>
            
              </li>
            </ul>
          </div>
     
      )
    </div>
    )
}
export default ProductScreen;