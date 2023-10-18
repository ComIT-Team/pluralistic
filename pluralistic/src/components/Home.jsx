
import Hero from './Hero';
import Cards from './Cards';
import Banner from './about/Banner'
const Home = () => {
  return (
    <>

    <div className='home'>
      <Banner/>
        <Hero />
        <Cards />
    </div>
    </>
  )
}

export default Home