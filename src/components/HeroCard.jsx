const HeroCard = ({ img, heading }) => {
  return (
    <div className="flex flex-col w-[220px] [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] items-center h-[300px] cursor-pointer hover:scale-105">
      <div className="w-full h-[140px] ">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <div className=" p-6 flex flex-col gap-[15px]">
        <h3 className="font-[500] text-[14px]">{heading}</h3>
        <p>Hi to all welocome to India.</p>
      </div>
    </div>
  )
}
export default HeroCard
