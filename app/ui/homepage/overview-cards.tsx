interface OverviewCardProps {
  iconClassname: string;
  stat: string;
  data: string;
}

function OverviewCard ({ iconClassname, stat, data } : OverviewCardProps) {
  // const styledIconClassname = "text-blue-400 " + {iconClassname}
  return (
    <div className="flex flex-col rounded-xl shadow w-80 h-52 bg-white relative -inset-y-24 mx-4 text-center justify-center text-5xl">
      <p className="text-blue-400"><i className={iconClassname} /></p>
      <p className="text-2xl font-extrabold text-gray-700 my-2">{stat}</p>
      <p className="text-xl font-bold">{data}</p>
    </div>
  )
}
export default function OverviewCards () {
  return (
    <div className="overview-container flex justify-center w-full">
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