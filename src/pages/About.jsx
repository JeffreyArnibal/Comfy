const About = () => {
   return (
      <>
         <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center">
            <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
               We love
            </h1>
            <div className="stats bg-primary shadow">
               <div className="stat">
                  <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
                     comfy
                  </div>
               </div>
            </div>
         </div>
         <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
            We are dedicated to providing you with an exceptional online shopping experience, offering a wide range of high-quality products at competitive prices. Whether you're looking for the latest fashion trends, cutting-edge electronics, home essentials, or unique gifts, we have something for everyone.
         </p>
      </>
   )
}

export default About
