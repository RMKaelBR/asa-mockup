import CommunityCard from "./community-card"; 

export default function CommunitySection () {
  return (
    <div>
      <h3>CLIENT COMMUNITY SERVICE PROGRAMS FOR THE POOR</h3>
      <div>
        <div className="flex">
          <CommunityCard imageUrl="/community1.jpg" paragraphContent="ENVIRONMENT" />
          <CommunityCard imageUrl="/community2.jpg" paragraphContent="HEALTH CARE" />
          <CommunityCard imageUrl="/community3.jpg" paragraphContent="HOUSING" />
        </div>
        <div className="flex">
          <CommunityCard imageUrl="/community4.jpg" paragraphContent="EDUCATION" />
          <CommunityCard imageUrl="/community5.jpg" paragraphContent="LIVELIHOOD" />
          <CommunityCard imageUrl="/community6.jpg" paragraphContent="DISASTER RELIEF" />
        </div>
      </div>
    </div>
  )
}