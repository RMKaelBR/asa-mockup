// import WhatsNewCard from "./whatsnewcard";
import Image from 'next/image';
interface WhatsNewCardProps {
  imgUrl: string;
  heading: string;
  previewContent: string;
}

function WhatsNewCard({ imgUrl, heading, previewContent }: WhatsNewCardProps) {
  return (
    <div className="whatsnew-card m-4 pb-8 h-full max-w-4xl xl:max-w-3xl border-1 rounded-xl shadow-lg">
      <div className="flex flex-col">
        <Image src={imgUrl} width={500} height={300} alt="Title Photo" className="rounded-t-xl shadow-lg"/>
        <div className="p-4">
          <p className="font-extrabold text-xl xl:text-2xl text-gray-700 text-red-400 sm:text-orange-400 md:text-yellow-400 lg:text-green-400 xl:text-blue-400 2xl:text-violet-400">
            {heading}</p>
          <p className="mt-4 text-lg lg:text-md">{previewContent}</p>
          <button className="rounded-full py-2 px-4 bg-blue-400 mt-8 text-white font-medium">
            LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}

export default function WhatsNewSection () {
  return (
    <div className="flex flex-col items-center justify-center py-8 pb-12 lg:pb-16 xl:pb-16 2xl:pb-24">
      <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-700">
        {`WHAT'S NEW?`}</h2>
        
      <div className="text-left w-10/12 sm:w-8/12 md:flex md:w-11/12 lg:w-10/12 xl:w-8/12 space-evenly">
        <div className="max-w-3xl">
          <WhatsNewCard imgUrl="/whatsnew1.jpg"
            heading={`Landbank and BDO unit collaborate to arrange P5B 'gender bonds' for ASA Philippines Foundation`} 
            previewContent="Landbank of the Philippines (Landbank) and BDO Capital & Investment Corp. have collaborated to arrange the first-ever “gender bonds” in the country, with a value of P5 billion, for ASA Philippines.." />
        </div>
        <div className="max-w-3xl">
          <WhatsNewCard imgUrl="/whatsnew2.jpg" 
            heading="Empowering Pinay microentrepreneurs"
            previewContent="LAST month, the Securities and Exchange Commission (SEC), through SEC Memorandum Circular 9, Series of 2019, or the Guidelines on the Issuance of Social Bonds under the Asean Social Bonds Standards in the Philippines," />
        </div>
      </div>
    </div>
    
  )
}