const HeroCard = ({ img, heading }) => {
  return (
    <div className="flex flex-col w-[220px] [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] items-center h-[300px] cursor-pointer hover:scale-105">
      <div className="w-full h-[140px] ">
        <img src={img} alt="" className="w-full h-full" />
      </div>

      const Hero=[
        {
          id:1,
          imgUrl:"https://media.istockphoto.com/id/1499046027/photo/big-data-chart-on-city-backdrop-trade-technology-and-investment-analysis-business-development.jpg?s=612x612&w=0&k=20&c=HKDPv_ibUH24gOH7FS1OLLhtXFBnOTAtgMTOGf-s7qM=",
          heading:"State of Markets",
          description:"The market capitalisation of Indian stocks crossed US$4.5 trillion in january."
        },
        {
          id:2,
          imgUrl:"https://ibb.co/CQ7vWt8",
          heading:"The Central Capex Surge",
          description:'The last few years have seen very substantial steup in capital'
        }
        ]
        
    </div>
  )
}
export default HeroCard
