import Image from 'next/image';

const SwiperContent = () => {
  return (
    <section className="istorya-swiper w-80 h-full flex flex-col items-center mx-10 bg-white rounded-xl shadow-lg py-2 lg:mr-20">
      <div className="flex justify-center items-center bg-white relative">
        <button className="rounded-full p-1 px-3 bg-blue-400 text-white absolute -bottom-2 left-0">&lt;</button>
        <div className="the-swiper">
          <Image src="/istoryapic.jpg" height={280} width={280} alt="Istorya Photo" className="rounded-xl shadow-lg"/>
        </div>
        <button className="rounded-full p-1 px-3 bg-blue-400 text-white absolute -bottom-2 right-0">&gt;</button>
      </div>
      
      <div className="text-left p-2">
        <p className="story-title text-lg font-bold my-4">Quotes from Istorya ni Nanay Video on Facebook</p>
        <h3 className="text-2xl font-extrabold">Name Here</h3>
        <h4 className="text-md font-bold">{`ASA Philippines' Client`}</h4>
      </div>
    </section>
  )
}

const Message = () => {
  return (
    <div>
      <p className="font-medium text-gray-900 text-center text-xl sm:text-2xl lg:text-left md:text-3xl xl:text-4xl mt-8 lg:mt-0 xl:pr-16">
        <span className="text-blue-400 font-extrabold">Our 2.2 million clients</span> trust our services, consistently experiencing the value and excellence we provide.
      </p>
      <p className="text-lg font-semibold mt-10 text-center lg:text-left">Featured In</p>
    </div>
    
  )
}

const FeaturedIn = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row">
      <div>
        <Image src="/doggothin.jpg" width={200} height={40} alt="Placeholder Doggo" className="my-2"/>
        <Image src="/doggothin.jpg" width={200} height={40} alt="Placeholder Doggo" className="my-2"/>
      </div>
      <Image src="/doggosmall.jpg" width={120} height={90} alt="Placeholder Doggo" className="mx-2 my-2"/>
    </div>
  )
}

export default function IstoryaSection () {
  return (
    <div className="text-center flex flex-col items-center justify-center min-h-full py-12 lg:py-32">
      <h2 className="font-extrabold text-3xl text-gray-700 mb-20">
        ISTORYA NI NANAY</h2>
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-center lg:w-10/12">
        <SwiperContent />
        <section className="text-left w-10/12 lg:w-1/2">
          <Message />
          <FeaturedIn />
        </section>
      </div>
    </div>
  )
}