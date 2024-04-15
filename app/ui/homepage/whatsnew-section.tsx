// import WhatsNewCard from "./whatsnewcard";
import Image from 'next/image';
interface WhatsNewCardProps {
  imgUrl: string;
  heading: string;
  previewContent: string;
}

function WhatsNewCard({ imgUrl, heading, previewContent }: WhatsNewCardProps) {
  return (
    <div className="whatsnew-card m-4 max-w-3xl border-1 rounded-lg shadow-lg">
      <Image src={imgUrl} width={500} height={300} alt="Title Photo" />
      <div className="p-8">
        <p className="font-extrabold text-2xl text-gray-700">{heading}</p>
        <p>{previewContent}</p>
        <button className="rounded-full py-2 px-4 bg-blue-400 mt-8">LEARN MORE</button>
      </div>
    </div>
  )
}

export default function WhatsNewSection () {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h2 className="text-2xl font-extrabold text-gray-700">WHAT{`'`}S NEW?</h2>
      <div className="flex text-left w-8/12 space-evenly">
        <div className="max-w-3xl">
          <WhatsNewCard imgUrl="/whatsnew1.jpg"
            heading={`Landbank and BDO unit collaborate to arrange P5B 'gender bonds'&apos' for ASA Philippines Foundation`} 
            previewContent="Landbank of the Philippines (Landbank) and BDO Capital & Investment Corp. have collaborated to arrange the first-ever “gender bonds” in the country, with a value of P5 billion, for ASA Philippines.."
            />
        </div>
          
        <div className="max-w-3xl">
          <WhatsNewCard imgUrl="/whatsnew2.jpg" 
              heading="Empowering Pinay microentrepreneurs" 
              previewContent="LAST month, the Securities and Exchange Commission (SEC), through SEC Memorandum Circular 9, Series of 2019, or the Guidelines on the Issuance of Social Bonds under the Asean Social Bonds Standards in the Philippines,"
              />
        </div>
      </div>
      
    </div>
    
  )
}