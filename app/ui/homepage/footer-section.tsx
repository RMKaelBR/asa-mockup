export default function FooterSection () {

  return (
    <div className="font-light flex flex-col items-center py-8">
      <h2 className="text-3xl font-extrabold mb-8">NANAY, SA ASA, BOSS KA!</h2>
      <div className="flex justify-evenly">
        <section className="visitContainer w-1/3 max-w-sm">
          <div className="visitUsContainer">
            <h3 className="footer-subheading">VISIT US</h3>
            <ul className="footer-ul"><li><p className="infoLine">
                  15th Floor, Prestige Tower, F. Ortigas Jr. Rd. Ortigas Center, Pasig City 1605, Philippines</p></li></ul>
          </div>
          <div className="grievanceContainer max-w-sm">
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
        </section>
        <section className="getTouchContainer w-1/3 ">
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
        </section>
        <section className="infoContainer w-1/3">
          <div className="w-10/12">
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
      </div>
    </div>
  )
}