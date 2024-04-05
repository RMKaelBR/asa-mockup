import CommunityCard from "./community-card"; 

export default function CommunitySection () {
  return (
    <div>
      <h3>CLIENT COMMUNITY SERVICE PROGRAMS FOR THE POOR</h3>
      <div>
        <div className="flex">
          <CommunityCard imageUrl="/" paragraphContent="ENVIRONMENT" />
          <CommunityCard imageUrl="/" paragraphContent="HEALTH CARE" />
          <CommunityCard imageUrl="/" paragraphContent="HOUSING" />
        </div>
        <div className="flex">
          <CommunityCard imageUrl="/" paragraphContent="EDUCATION" />
          <CommunityCard imageUrl="/" paragraphContent="LIVELIHOOD" />
          <CommunityCard imageUrl="/" paragraphContent="DISASTER RELIEF" />
        </div>
      </div>
    </div>
  )
}