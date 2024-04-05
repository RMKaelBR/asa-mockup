import NavBar from "@/app/ui/navbar/navbar";
import CommunityCard from "@/app/ui/homepage/community-card";
import WhatsNewCard from "@/app/ui/homepage/whatsnewcard";
import CoverageSection from "./ui/homepage/coverage-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav>
        <NavBar />
        <button className="sign-in-button rounded-full py-2 px-10 bg-orange-400">SIGN IN</button>
      </nav>
      <section className="hero-section">
        <h1>A FOUNDATION DEDICATED TO BETTER THE LIVES OF THE POOR</h1>
        <p>ASA Philippines is a non-profit, non-stock corporation specializing in microfinance. The Foundation caters to more than 2 million clients who are called Micro Entrepreneurs.</p>
        <button className="sign-in-button rounded-full py-2 px-10 bg-blue-300">SIGN IN</button>
      </section>
      <section className="overview-section">
        <h2>As of March 31, 2024</h2>
        <h2>MANAGEMENT REPORTS</h2>
        <p>Explore ASA Philippines' Management Report section to stay updated on our latest financial and operational performance, including Annual Reports, Islamic Financing, Monthly Unaudited FS, and Audited Financial Statements.</p>
        <div className="swiper-content flex">
          <button>&lt;</button>
          <div className="mx-4">SWIPER CONTENT HERE</div>
          <button>&gt;</button>
        </div>
      </section>
      <section className="awards-section w-full flex justify-center">
        <div className="flex justify-between w-6/12">
          <div>
            <h3>GAWAD MFI 2016</h3>
            <ul>
              <li><i className="fa-regular fa-circle-check" />OUTSTANDING MICROFINANCE INSTITUTION</li>
              <li><i className="fa-regular fa-circle-check" />BEST MFI INTERMEDIARY</li>
              <li><i className="fa-regular fa-circle-check" />BEST MFI AVAILER</li>
            </ul>
          </div>
          
          <img src="/"></img>
        </div>
      </section>
      <section className="president-message-section w-full felx justify-center">
        <div className="flex justify-center">
          <figure className="mx-4 w-3/12">
            <img src="/"></img>
            <figcaption>
              <h3>MD KAMRUL HASAN TARAFDER</h3>
              <h4>President and CEO February 21, 2023</h4>
            </figcaption>
          </figure>
          <div className="mx-4">
            <h3>PRESIDENT'S MESSAGE</h3>
            <p>Dear colleagues,</p>
            <p>In the name of God, the most gracious and the most merciful!</p>
            <p>
              Before I write my message, I thought to send my gratitude to all our heroes, the MFOs, and the rest of the staff giving everything of their hearts, extraordinary dedication, and full-fledged commitment that resulted in an unprecedented performance in our history! ₱5.9 billion in net surplus is unbelievably amazing! Congratulations to everyone including our Board for their never-ending support and prayers. My heartfelt thanks to our clients, as they have given their trust and confidence to this great institution and allowed us to serve them. So, the success of ASA Philippines is the success of the clients. “Nanays, you are truly the owners of this company.”
            </p>
            <p>
              During the years 2020 and 2021, we struggled to recover our losses. By the end of 2021, ASA Philippines Foundation managed to turn around its financials.
            </p>
          </div>
        </div>
      </section>
      <section className="chairman-message-section">
      <div className="flex justify-center">
          <figure className="mx-4 w-3/12">
            <img src="/"></img>
            <figcaption>
              <h3>Howard Q. Dee</h3>
              <h4>Chairman Emeritus - 2023</h4>
            </figcaption>
          </figure>
          <div className="mx-4">
            <h3>CHAIRMAN EMERITUS'S MESSAGE</h3>
            <p className="my-4">
              2022 is another banner year for us and I am thrilled to share with you the remarkable achievements of ASA Philippines. We continue our strong recovery post-lockdown and our services have now reached well over two million households nationwide. Thanks to your tireless efforts, we achieved record loan disbursements and income all the while offering the most competitive interest rates and comprehensive benefits in the industry. My heartfelt congratulations to you all for collectively achieving these record milestones! Please allow me to dedicate these achievements to my predecessor, our late founding Chairman Eddie Go, whose exceptional 17-year tenure, together with that of our co-founder and President Kamrul Tarafder, built a legacy that is at the core of what ASA Philippines is today. I would also like to thank Victoria Aquino Dee, one of our original incorporators, who steps down from our Board after 18 years of dedicated service. Thank you Viel, for your long-standing meritorious service and for being an integral part of the ASA success story.</p>
            <p className="my-4">
            Replacing Viel in our Board of Trustees is Ambassador Joey Cuisia, the outstanding former Governor of the Central Bank of the Philippines. Amongst his many senior postings and high accomplishments in government, the private sector, and NGOs, he has served with highest distinction as Chairman or Chief Executive in some of our country’s largest financial institutions. Ambassador Joey, you are God-sent. In recent months, I have faced significant health challenges post COVID-19 and after much reflection, have decided to step down as Chairman of our beloved Foundation in favor of the eminently qualified Ambassador Joey, effective this coming September, 2023. Please join me in giving the heartiest of welcomes to our incoming Chairman Joey Cuisia. Congratulations Chair Joey for your unanimous appointment.</p>
            <p className="my-4">
            We look forward to ASA Philippines achieving even greater heights, especially for our clients, under your helm. It is my honor to continue to serve on our Board in order to plan and operationalize philanthropic initiatives that can further move the needle in addressing our clients’ and their communities’ ongoing socioeconomic challenges. Thank you fellow Board Trustees, President Kamrul, Finda, Shayn, Ferdy, Bambi, ASA Phil. Management, officers and staff for your unequivocal support and steadfast dedication to ASA’s noble mission and ideals for financial inclusivity and social development. Maraming maraming salamat at mabuhay kayong lahat!</p>
          </div>
        </div>
      </section>
      <section className="community-service-section">
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
      </section>
      <section className="whats-new-section flex">
        <WhatsNewCard imgUrl="/" 
        heading="Landbank and BDO unit collaborate to arrange P5B 'gender bonds' for ASA Philippines Foundation" 
        previewContent="Landbank of the Philippines (Landbank) and BDO Capital & Investment Corp. have collaborated to arrange the first-ever “gender bonds” in the country, with a value of P5 billion, for ASA Philippines.."
        />
        <WhatsNewCard imgUrl="/" 
        heading="Empowering Pinay microentrepreneurs" 
        previewContent="LAST month, the Securities and Exchange Commission (SEC), through SEC Memorandum Circular 9, Series of 2019, or the Guidelines on the Issuance of Social Bonds under the Asean Social Bonds Standards in the Philippines,"
        />
      </section>
      <section className="istorya-section flex flex-col w-full items-center">
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
              <img src="/" />
              <img src="/" />
            </div>
          </div>
        </div>
      </section>
      <section className="partners-section flex-col items-center">
        <h2>BENEFACTORS & PARTNERS</h2>
        <div className="swiper-content flex items-center">
          <div className="mx-4">SWIPER CONTENT HERE</div>
        </div>
      </section>
      <section className="coverage-section">
        <CoverageSection />
      </section>
      <footer className=""></footer>
      <section className="copyright-section"></section>
    </main>
  );
}
