import WhatsNewCard from "./whatsnewcard";

export default function WhatsNewSection () {
  return (
    <div>
      <h2 className="text-3xl">WHAT'S NEW?</h2>
      <WhatsNewCard imgUrl="/" 
        heading="Landbank and BDO unit collaborate to arrange P5B 'gender bonds' for ASA Philippines Foundation" 
        previewContent="Landbank of the Philippines (Landbank) and BDO Capital & Investment Corp. have collaborated to arrange the first-ever “gender bonds” in the country, with a value of P5 billion, for ASA Philippines.."
        />
      <WhatsNewCard imgUrl="/" 
        heading="Empowering Pinay microentrepreneurs" 
        previewContent="LAST month, the Securities and Exchange Commission (SEC), through SEC Memorandum Circular 9, Series of 2019, or the Guidelines on the Issuance of Social Bonds under the Asean Social Bonds Standards in the Philippines,"
        />
    </div>
    
  )
}