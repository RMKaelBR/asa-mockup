import Image from 'next/image';
export default function IstoryaSection () {
  return (
    <div>
      <h2>ISTORYA NI NANAY</h2>
      <div className="flex">
        <div className="swiper-content flex items-center mx-10">
          <button>&lt;</button>
          <div className="mx-4">SWIPER CONTENT HERE</div>
          <button>&gt;</button>
        </div>
        <div>
          <p>
            <span className="text-blue-400">Our 2.2 million clients</span> trust our services, consistently experiencing the value and excellence we provide.
          </p>
          <p>Featured In</p>
          <div className="flex">
            <Image src="/placeholder.jpg" width={200} height={300} alt="Placeholder Doggo"/>
            <Image src="/placeholder.jpg" width={200} height={300} alt="Placeholder Doggo"/>
          </div>
        </div>
      </div>
    </div>
  )
}