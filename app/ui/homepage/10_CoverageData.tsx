export default function CoverageData() {
  const totalStyle = `font-semibold text-orange-500`
  return (
    <section className="flex min-w-max self-center bg-white shadow-md p-4 sm:p-8">
      <div className="text-md sm:text-lg">
        <div>
          <p>Barangays: 26,887 (64%)</p>
          <p>Municipalities: 1,313 (88%)</p>
          <p>Cities: 148 (100%)</p>
          <h4 className={totalStyle}>Total City/Muni: 1,429</h4>
          <h4 className={totalStyle}>All Provinces: 82 (100%)</h4>
        </div>
        <div className="my-8">
          <p># of Branches: 1,701</p>
          <h4 className={totalStyle}>Total Service Points: 1,701</h4>
        </div>
        <div className="my-8">
          <p>% Geographical Coverage (as of January 31, 2024):</p>
          <h4 className={totalStyle}>LUZON: 861 (51%)</h4>
          <h4 className={totalStyle}>VISAYAS: 434 (25%)</h4>
          <h4 className={totalStyle}>MINDANAO: 406 (24%)</h4>
        </div>
        <h3 className="text-xl font-extrabold text-gray-800">TOTAL: 1,701 - 100%</h3>
      </div>
    </section>
  )
}