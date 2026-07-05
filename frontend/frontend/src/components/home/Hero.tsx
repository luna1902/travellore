//import heroImage from '../../assets/images/hero.jpeg' ;

const Hero=() => {
    return (
       <section className="relative w-full">
           {/* <img
           src={heroImage}
           alt="Hero"
           className=' h-1/2 object-cover'
           /> */}

           <div className='flex absolute inset-0 items-center'>
             <div className=' text-white'>
                          <h1 className=' text-3xl'>Explore Beyond</h1>
                          <h1 className=' text-3xl text-purple-400'>Boundaries</h1>
             </div>
             <div className=' text-white'>
                <p>Discover breathtaking destinations,plan perfect trips</p>
                <p>connect with travellers and get personalised</p>
                <p>recommendations</p>
             </div>
           </div>
       </section>
    )
}

export default Hero;