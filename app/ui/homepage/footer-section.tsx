export default function FooterSection () {
  return (
    <div>
      <h2 className="text-3xl">NANAY, SA ASA, BOSS KA!</h2>
      <div className="flex">
        <div className="visitContainer max-w-sm">
          <div className="visitUsContainer">
            <h3>VISIT US</h3>
            <ul><li><p className="infoLine">
                  15th Floor, Prestige Tower, F. Ortigas Jr. Rd. Ortigas Center, Pasig City 1605, Philippines</p></li></ul>
          </div>
          <div className="grievanceContainer max-w-sm">
            <h3>GRIEVANCE/WHISTLEBLOWER</h3>
            <ul>
              <li><p className="infoLine"><i className="fa-solid fa-phone" />
                +63-9178296100</p></li>
              <li><p className="infoLine"><i className="infoLine" />
                +63-9228977695</p></li>
              <li><p className="infoLine"><i className="fa-regular fa-envelope" />
                whistleblower@asaphil.org</p></li>
            </ul>
          </div>
        </div>
        <div className="getTouchContainer">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li><p className="infoLine">
                We would be happy to discuss your needs as well as answer any questions you may have. We can be reached at:</p></li>
            <li><p className="infoLine"><i className="fa-solid fa-phone" />
              +632-8687-7558</p></li>
            <li><p className="infoLine"><i className="fa-solid fa-phone" />
              +632-8631-1107</p></li>
            <li><p className="infoLine"><i className="fa-regular fa-envelope" />
              info@asaphil.org</p></li></ul>
        </div>
        <div className="infoContainer">
          <h3>INFORMATION</h3>
          <ul>
            <li><p className="infoLine">FAQ</p></li>
            <li><p className="infoLine">MONTHLY AUDITED FS</p></li>
            <li><p className="infoLine">AUDITED REPORT</p></li>
            <li><p className="infoLine">JOIN US NOW!</p></li>
            <li><p className="infoLine">CONTACT US</p></li></ul>
          <div className="flex justify-between">
            <i className="fa-brands fa-facebook-f" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-square-twitter" />
          </div>
        </div>
      </div>
    </div>
  )
}