
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
function SideNav( {title, one, two}) {
  return (
    <div className="py-3 border-b-[1px] border-b-gray-300">
    <h3 className='text-lg font-titleFont font-semibold mb-1 px-6'>{title}</h3>
    <ul className='text-sm'>
      <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
        {one}
        <span><KeyboardArrowRightRoundedIcon/></span>
      </li>
      <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
       {two}
        <span><KeyboardArrowRightRoundedIcon/></span>
      </li>
      {/* <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
        Cloths{""}
        <span><KeyboardArrowRightRoundedIcon/></span>
      </li> */}
    </ul>
  </div>
  )
}

export default SideNav