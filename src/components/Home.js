import React from 'react';
import "./home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img 
                  className="home-image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                  alt="amazon-banner"
                />
              
              <div className="home-row">
                 <Product id="12321341" 
                          title="The lean Startup: The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                          price={29.99}
                          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
                          rating={5}
                />
                 <Product id="49538094"
                          title="Kenwood k
                          mix Stand Mixer for Baking, Stylish Kitchen Mixer With K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                          price={239.0}
                          rating={4}
                          image="https://images-na.ssl-images-amazon.com/images/I/61FJtVQh9bL._SL1200_.jpg"
                />
              </div>

              <div className="home-row">
              <Product id="4903850"
                       title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                       price={199.99}
                       rating={4}
                       image="https://www.noelleeming.co.nz/shop/content/images/products/181/181613.jpg" 
              />
              <Product id="23445930"
                       title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                       price={98.99}
                       image="https://www.pcrichard.com/images/product/large/Z_B07NFTVP7P.jpg"
                       rating={4}
                    />
              <Product id="325435489"
                       title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                       price={598.99}
                       rating={5}
                       image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX522_.jpg"
                    />
              </div>
                 
              <div className="home-row">
              <Product id="908292332"
                       title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                       price={1094.98}
                       rating={4}
                       image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"
                    />
              </div>   
            </div>
        </div>
    )
}

export default Home
