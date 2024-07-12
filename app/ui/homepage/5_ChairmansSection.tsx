import Image from 'next/image';

const ChairmanPhoto = () => {
  return (
    <figure className="mx-4 mb-8 lg:w-4/12">
      <Image src="/chairman.jpg" width={500} height={670} alt="Photo of the Chairman" className="rounded" />
      <figcaption>
        <h3 className="lg:max-lg:text-2xl text-3xl font-extrabold text-gray-700 mt-4 mb-2">
          Andrews R. Hayman</h3>
        <h4 className="text-xl font-bold text-gray-700">
          Chairman Emeritus - 2023</h4>
      </figcaption>
    </figure>
  )
}

const ChairmanMessage = () => {
  return (
    <div className="mx-4 lg:w-8/12">
      <h3 className="text-2xl lg:text-3xl font-extrabold text-gray-700">
        {`CHAIRMAN EMERITUS'S MESSAGE`}</h3>
      <p className="text-lg my-4 text-justify">
      4022 id negabat cedere cras qui ex per D ad instanti at donec lius cum hic occasionem contrahentes ut HAC Labefactata. Ac continuo non partem prodesse eius-sanguine quo eos conscios urna non annuere sint quod est existit praesentes electionem. Arcana mi arcu minister ultimum, eu auriacus haeres sunt conservalione quo mariae sit est vitae minister dui nibh praeteritis pusillus netus eum praeconceptum vicissim te qui opposito. Ad civilatcm peregrinationis te nec ita hic pestilentiam ordinario dolor capere honorifice! Throno liber ea at probitas proin consuetudium si ea deprehensus, nec wisi diuturna Cadentes Omnis Ab, eodem consiliorum 07-pede mutuum, proponit nisl nisi at nam ac-joannes sem Portorium Eventu Condigne, illum e proice lius te mi dui quae ut orci PER Labefactata si atque. M omnis modi nisl te lacus Adipisci Primam Eum, mus si non perditio oppugnationum, nec ipsam urna quia eum Eaque clari 98 eodem id explicabo eventum. Augue rem Lius, aut arcu quia-absentia amplissimum conalus sed aut metus ad certabit eius mi leo EUM posuere class.</p>
      <p className="text-lg my-4 text-justify">
      Inculpare Wisi in quo Purus te Volscens at Successore Unde Pullus, est experientia nomine Communem et est Nuntios Quae in dui Accipientis. Desinam dui pede suplex torquent nam eius copulationesque ut apostrophe, qui studium formam, sed NEMo, ad eos perare iste theatro diffidebant ad Sanguine ea Animi Dominicae ut cras at mus saepius’a saeculi activitas significatio. Procedemus Nunc, hac nec Non-duis. Ad cuncta crimen, O arcu facer posteritati legunt celeriorem iure MASSA-19 mus etiam pede itineribus, quae seacula id eget eros ac Charisma id non moderni Domesticas ut fusce mi vel cxpeditis mirabilia Conserrare Cras, violentia nisl landem Occasione, 7023. Sessio typi ac et capiat vel suspiriis in hectorem at nec magister Utramque Quam Nescit. Immarcescibilem Proin Nunc vel quod coronatum consternati.</p>
      <p className="text-lg my-4 text-justify">
      Ea diam eiusdem te QUO Tesiimonium essentiam nemo vincere habetis, eminentiam dis nec iudicia, porro pede quis. Si et ad eorum te urgentis te earum ea cum Augue et eaque te amet sem instituendarum investigarunt fidelitatem odit eum conscii unde aut oceani id doloremque quo tertius’ sem vitae potentiores’ dolores recordationem devotionem. Saepe cum futuri Saepe Absentem, Respirium Bonuni, Netus, Assum, Eaque, Culpa, NON Typi. Concernunt, virginis sem fiant leo nemo caesarianis kominem nec celeritas solenniter te QUO’w arcui iuribus eos fastus est intestina figuraliler eum option inauguratus. Excelsum reiponde ratione te arcades obesse vitae!</p>
    </div>
  )
}

export default function ChairmanSection () {
  return (
    <div className="w-11/12 flex flex-col lg:flex-row lg:items-start lg:justify-center lg:w-full xl:w-11/12 2xl:w-10/12">
      <ChairmanPhoto />
      <ChairmanMessage />
    </div>
  )
}