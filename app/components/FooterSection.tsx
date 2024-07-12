const ContainerLeft = () => {
  return (
    <section className="visitContainer w-10/12 lg:w-1/3 lg:mx-2 max-w-xl flex justify-center">
      <div>
        <div className="visitUsContainer">
          <h3 className="footer-subheading">VISIT US</h3>
          <ul className="footer-ul"><li><p className="infoLine">
                15th Floor, Prestige Tower, F. Ortigas Jr. Rd. Ortigas Center, Pasig City 1605, Philippines</p></li></ul>
        </div>
        <div className="grievanceContainer">
          <h3 className="footer-subheading">GRIEVANCE / WHISTLEBLOWER</h3>
          <ul className="footer-ul">
            <li><p className="infoLine"><i className="fa-solid fa-phone" />
              +63-9178296100</p></li>
            <li><p className="infoLine"><i className="infoLine" />
              +63-9228977695</p></li>
            <li><p className="infoLine"><i className="fa-solid fa-envelope" />
              whistleblower@asaphil.org</p></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

const ContainerCenter = () => {
  return (
    <section className="getTouchContainer flex justify-center w-10/12 lg:w-1/3 lg:mx-2 max-w-xl ">
      <div>
        <h3 className="footer-subheading">GET IN TOUCH</h3>
        <ul className="footer-ul">
          <li><p className="infoLine">
            We would be happy to discuss your needs as well as answer any questions you may have. We can be reached at:</p></li>
          <li><p className="infoLine"><i className="fa-solid fa-phone" />
            +632-8687-7558</p></li>
          <li><p className="infoLine"><i className="fa-solid fa-phone" />
            +632-8631-1107</p></li>
          <li><p className="infoLine"><i className="fa-solid fa-envelope" />
            info@asaphil.org</p></li></ul>
      </div>
    </section>
  )
}

const ContainerRight = () => {
  return (
    <section className="infoContainer flex justify-center w-10/12 lg:w-1/3 lg:mx-2 max-w-xl">
      <div className="w-full">
        <h3 className="footer-subheading">INFORMATION</h3>
        <ul className="footer-ul">
          <li><p className="infoLine">FAQ</p></li>
          <li><p className="infoLine">MONTHLY AUDITED FS</p></li>
          <li><p className="infoLine">AUDITED REPORT</p></li>
          <li><p className="infoLine">JOIN US NOW!</p></li>
          <li><p className="infoLine">CONTACT US</p></li></ul>
        <div className="flex justify-start mt-4">
          <i className="fa-brands fa-facebook-f mx-2" />
          <i className="fa-brands fa-instagram mx-2" />
          <i className="fa-brands fa-square-twitter mx-2" />
        </div>
      </div>
    </section>
  )
}

function FooterBody () {
  return (
    <div className="font-light bg-gray-800 text-white flex flex-col items-center py-8 xl:w-full">
      <h2 className="text-3xl font-extrabold mb-8">NANAY, SA ASA, BOSS KA!</h2>
      <div className="flex flex-col items-center lg:flex-row">
        <ContainerLeft />
        <ContainerCenter />
        <ContainerRight />
      </div>
    </div>
  )
}

function CopyrightSection () {
  return (
    <div className="copyright-section w-full text-black flex justify-center bg-orange-400 py-2 font-bold">
      <div className="flex flex-wrap text-center justify-center">
        <p>
        © Respirium 9024 QUO Distulerunt Terrestres, Sit Saluto Converso. Charisma Quo Perpetuum Me Dominicae</p>
      </div>
    </div>
    
  )
}
export default function FooterSection() {
  return (
    <div className="w-full">
      <FooterBody />
      <CopyrightSection />
    </div>
    
  )
}