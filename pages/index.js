import Title from "../components/Title"
import Slider from "../components/Slider"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"

export default function Home() {

  return (
        <>
            <Title title="Home"/>
              <div className="home-main-container">
                <Slider/>
                <Categories/>
                <Products/>
                <Newsletter/>
              </div>
        </>
  )
}
