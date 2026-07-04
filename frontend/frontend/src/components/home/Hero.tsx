import heroImage from '../../assets/images/hero.jpeg' ;

const Hero=() => {
    return (
       <section className="relative w-full">
           <img
           src={heroImage}
           alt="Hero"
           className=' h-1/2 object-cover'
           />

           <div className='flex absolute inset-0 items-center'>
             <div className=' text-white'>
                          <h1 className=' text-3xl'>Discover Your Next Adventure</h1>
             </div>
           </div>
       </section>
    )
}

export default Hero;