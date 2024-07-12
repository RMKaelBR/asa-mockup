interface OverviewCardProps {
  iconClassname: string;
  stat: string;
  data: string;
}

function OverviewCard ({ iconClassname, stat, data } : OverviewCardProps) {
  // const styledIconClassname = "text-blue-400 " + {iconClassname}
  return (
    <div className="flex flex-col bg-white rounded-xl shadow relative -inset-y-24 text-center justify-center
      w-48 h-32 m-2 sm:w-60 sm:h-40 md:h-44 md:m-2 xl:w-72 xl:m-4 2xl:w-80 2xl:h-52 2xl:m-4">
      <p className="text-blue-400 text-2xl sm:text-3xl md:text-5xl lg:text-5xl"><i className={iconClassname} /></p>
      <p className="sm:text-2xl font-extrabold text-gray-700 my-2">{stat}</p>
      <p className="sm:text-lg md:text-xl font-bold">{data}</p>
    </div>
  )
}

export default function OverviewCards () {
  return (
    <div className="overview-container flex justify-center md:w-10/12 flex-wrap lg:w-full lg:flex-nowrap">
      <OverviewCard iconClassname="fa-solid fa-hand-holding-heart" 
        stat="2,232,963" data="Borrowers" />
      <OverviewCard iconClassname="fa-solid fa-briefcase" 
        stat="43,699,286,800" data="Loan Portfolio"/>
      <OverviewCard iconClassname="fa-solid fa-location-dot" 
        stat="1,730" data="Branches"/>
      <OverviewCard iconClassname="fa-solid fa-people-group" 
        stat="12,165" data="Staff"/>
    </div>
  )
}