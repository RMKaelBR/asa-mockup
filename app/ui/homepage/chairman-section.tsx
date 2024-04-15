import Image from 'next/image';

export default function ChairmanSection () {
  return (
    <div className="flex justify-center w-10/12">
      <figure className="mx-4 w-4/12">
        <Image src="/chairman.jpg" width="500" height="700" alt="Photo of the Chairman" className="rounded-xl"/>
        <figcaption>
          <h3 className="text-3xl font-extrabold text-gray-700 mt-4 mb-2">Howard Q. Dee</h3>
          <h4 className="text-xl font-bold text-gray-700">Chairman Emeritus - 2023</h4>
        </figcaption>
      </figure>
      <div className="mx-4 w-8/12">
        <h3 className="text-3xl font-extrabold text-gray-700">{`CHAIRMAN EMERITUS'S MESSAGE`}</h3>
        <p className="text-lg my-4">
          2022 is another banner year for us and I am thrilled to share with you the remarkable achievements of ASA Philippines. We continue our strong recovery post-lockdown and our services have now reached well over two million households nationwide. Thanks to your tireless efforts, we achieved record loan disbursements and income all the while offering the most competitive interest rates and comprehensive benefits in the industry. My heartfelt congratulations to you all for collectively achieving these record milestones! Please allow me to dedicate these achievements to my predecessor, our late founding Chairman Eddie Go, whose exceptional 17-year tenure, together with that of our co-founder and President Kamrul Tarafder, built a legacy that is at the core of what ASA Philippines is today. I would also like to thank Victoria Aquino Dee, one of our original incorporators, who steps down from our Board after 18 years of dedicated service. Thank you Viel, for your long-standing meritorious service and for being an integral part of the ASA success story.</p>
        <p className="text-lg my-4">
        Replacing Viel in our Board of Trustees is Ambassador Joey Cuisia, the outstanding former Governor of the Central Bank of the Philippines. Amongst his many senior postings and high accomplishments in government, the private sector, and NGOs, he has served with highest distinction as Chairman or Chief Executive in some of our country’s largest financial institutions. Ambassador Joey, you are God-sent. In recent months, I have faced significant health challenges post COVID-19 and after much reflection, have decided to step down as Chairman of our beloved Foundation in favor of the eminently qualified Ambassador Joey, effective this coming September, 2023. Please join me in giving the heartiest of welcomes to our incoming Chairman Joey Cuisia. Congratulations Chair Joey for your unanimous appointment.</p>
        <p className="text-lg my-4">
        We look forward to ASA Philippines achieving even greater heights, especially for our clients, under your helm. It is my honor to continue to serve on our Board in order to plan and operationalize philanthropic initiatives that can further move the needle in addressing our clients’ and their communities’ ongoing socioeconomic challenges. Thank you fellow Board Trustees, President Kamrul, Finda, Shayn, Ferdy, Bambi, ASA Phil. Management, officers and staff for your unequivocal support and steadfast dedication to ASA’s noble mission and ideals for financial inclusivity and social development. Maraming maraming salamat at mabuhay kayong lahat!</p>
      </div>
    </div>
  )
}