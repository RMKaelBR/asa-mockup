import AuthGuard from "@/app/components/AuthGuard";
import FooterSection from "@/app/components/FooterSection";
import NavBar from "@/app/ui/navbar/navbar";
import Image from "next/image";

interface WhoWeAreCardProps {
  imageUrl: string;
  title: string;
  caption: string;
}

function WhoWeAreCard({imageUrl, title, caption}:WhoWeAreCardProps) {
  return (
    <article className="w-full pb-20 h-auto text-center rounded-xl border-2 border-gray-300 shadow-lg m-4 min-h-full">
      <Image src={imageUrl} width={430} height={250} alt={title} className="rounded-t-xl"/>
      <h2 className="text-2xl font-bold text-blue-400 my-4">{title}</h2>
      <p className="text-sm text-center mx-6">{caption}</p>
    </article>
  )
  
}

export default function Page() {
  return (
    <AuthGuard>
      <div>
        <nav className="z-50">
          <NavBar /></nav>
        <h1 className="font-semibold bg-blue-400 mt-20 p-20 text-gray-100 text-center">
          <span className="text-4xl top-16">WHO WE ARE</span></h1>
        <section className="flex flex-col items-center w-full">
          <div className="w-7/12">
            <h2 className="text-3xl font-bold my-4">Sparsim ut NEC Auctoritate Subsistere</h2>
            <p className="my-3">CUM Profligatur id w per-floret, nam-uidem praesentiam perspiciatis te exdivisionem. Cum facit arenam nisi est vestibulum indolem odit quo at Miscere, Laborans in Vestra 4004, per eu id risus vel offecerunt non ordines maecenas sit simulacrum innocentia. Non bellicosum mariae ut usus ipsa 1 existit inibunt per rem vestri ac QUO ad Mirum Praeconceptum.</p>
          </div>
        </section>
        <section className="flex justify-center w-full h-min mb-10">
          <div className="flex min-h-full w-10/12">
            <WhoWeAreCard imageUrl="/whoweare (1).jpg" 
              title="History" 
              caption={`NAM Auctoritate Promotione eos conspirationes ab Ea. Regula Imponere. Ad. Narratus indigne unde at vel pellentesque facundla typi REM Occasionem.`} />
            <WhoWeAreCard imageUrl="/whoweare (2).jpg" 
              title="Vision and Mission" 
              caption={`NAM Gallicismum Necessitas nam unde tot societatem id uidem urgebat. Hac nihil si e effecerunt mi est modestissime eros daniae qui morbi est Rulpeculae ullam.`} />
            <WhoWeAreCard imageUrl="/whoweare (3).jpg" 
              title="Primary Services" 
              caption={`Ea minim dolor mirum methodo desertor et vel modestissime nemo at enim inibit nulla invehere caelestis.`} />
            <WhoWeAreCard imageUrl="/whoweare (4).jpg" 
              title="Microfinance Program and Objectives" 
              caption={`Unde d angeum activitas accussat incarcerata, septentrione contra et leo supplices in contestationibus.`} />
          </div>
        </section>
        <FooterSection />
      </div>
    </AuthGuard>
  );
}
  