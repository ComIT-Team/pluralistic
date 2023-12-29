import { middleList } from "./FooterList"
import FooterMiddleList from "./FooterMiddleList"


const FooterMiddle = () => {
  return (
    <div  className="w-full bg-amazon-light text-white bg-white bg-opacity-10">
    <div className="w-full border-b-[1px] border-pink-500 p-10">
        <div className="max-w-5xl mx-auto text-gray-300 bg-gray-500 bg-opacity-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-6 md:place-items-center md:items-start">
          {
            middleList.map((item)=>(
                <FooterMiddleList 
                key={item._id}
                title={item.title}
                listItem={item.listItem}
                 />
            ))
          }
        </div>
        </div>
    </div>
    <div className='w-full flex items-center justify-center bg-amazon_blue bg-opacity-25 text-white '>
    <div>

<p className="w-full py-6 ">@Copyright</p>
    </div>
    </div>
    </div>
  )
}

export default FooterMiddle