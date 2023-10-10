import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/G/01/kindle/journeys/SVdxSFtFsFMWeBMB/NTI3YmI2Y2Et"
          alt=""
        />
        <div className="home_row">
          <Product
            id="12321341"
            title="Introducing Echo Hub"
            price={179.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/YmEwMjA5MmQt-w758._SY608_CB578526052_.jpg"
          />
          <Product
            id="272023"
            title="Standard Size Designed for All Types of Riding Kids Adults | Free Skate Tool"
            price={79.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81sbm1AfSRL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            id="252023"
            title="All-New Echo Show 8 (3rd Gen, 2023 release)"
            price={149.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/NTllZjc4Mjkt-w758._SY608_CB578522888_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="12325641"
            title="Price and other details may vary based on product size and color."
            price={179.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/PTBYB/AUG/NEW_ARRIVALS/GW/CATEGORY_CARDS/CatCard_2x_d_PTBYB_Tops_2x._SY608_CB596926536_.jpg"
          />
          <Product
            id="279123"
            title="Amazon Basics Neoprene Workout Dumbbell"
            price={59.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71mdnhhH+7L._SS100_.jpg"
          />
          <Product
            id="252023"
            title="Amazon Basics 100-Pack AA Alkaline High-Performance Batteries, 1.5 Volt, 10-Year Shelf Life"
            price={149.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/817yPxPd99L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="262003"
            title="Queen Size 4 Piece Bedding Sheet Set - Breathable & Cooling Bed Sheets - Hotel Luxury Bed Sheets for Women, Men, Kids & Teens"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61nY9nYn30L._AC_SY400_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="1232777"
            title="Select Club DB Soccer Ball"
            price={179.99}
            rating={5}
            image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/bea0e39d-96c5-4a4e-ba7c-6dae416756cc._CR0,457,4032,2110_SX810_QL70_.JPG"
          />
          <Product
            id="2793333"
            title="VanAcc Sofa, Comfy Sofa Couch with Extra Deep Seats, Modern Sofa- Loveseat, Couch for Living Room Apartment Lounge, Offwhite Bouclé"
            price={299.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/813K2qRZbnL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            id="288083"
            title="Sceptre Curved 24-inch Gaming Monitor 1080p R1500 98% sRGB HDMI x2 VGA Build-in Speakers, VESA Wall Mount Machine Black"
            price={229.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71P0M7tKjYL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="1321199"
            title="Introducing Amazon Fire TV Soundbar"
            price={119.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/MDIwMmRmM2Ut-w758._SY608_CB578522559_.jpg"
          />
          <Product
            id="182023"
            title="All-new Amazon Fire HD 10 tablet, built for relaxation"
            price={139.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/YWJhNDUwZmYt-w758._SY608_CB578532832_.jpg"
          />
          <Product
            id="292023"
            title="All-new Amazon Fire HD 10 Kids tablet — ages 3-7 | Parental controls, 2-year worry-free guarantee"
            price={189.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/ZjY1ZTNhMWIt-w758._SY608_CB578355892_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="21312341"
            title="Introducing Amazon eero Max 7 tri-band mesh wifi router | Up to 9.4 Gbps | Connect 200+ devices"
            price={599.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/sAsKYtno5J2qog0B/NzRjNzQyMzAt-w400._CB578478413_.jpg"
          />
          <Product
            id="28292112"
            title="Amazon Basics Outdoor 4 Burner Gas Griddle with 36-Inch Matte Enamel Coated Griddle Top and Side Shelfs"
            price={339.52}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Sb15S5eML._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

// banner image 'https://m.media-amazon.com/images/I/715+OUxNoFL._SX3000_.jpg'

// "https://m.media-amazon.com/images/I/71jTTOiYMrL._SX3000_.jpg";
