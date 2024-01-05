
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

import { useLoaderData } from "react-router-dom";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Men', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Women', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'women', label: 'Women', checked: true },
      { value: 'men', label: 'Men', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
      { value: 'kids', label: 'Kids', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2xl', label: '2XL', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 's', label: 'S', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
];
 const singleFilter =[
  {
    id:"price",
    name:"Price",
    options:[
      {value:"5-20", label:"$5 To $20"},
      {value:"21-60", label:"$21 To $60"},
      {value:"61-200", label:"$61 To $200"},
      {value:"201-1000", label:"$201 To $1000"},
    ],
  },
  {
    id:"stock",
    name:"Availability",
    options:[
      {value:"in_stock", label:"In Stock"},
      {value:"out_of_stock", label:"Out Of Stock"},
    ]
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Products() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const dispatch = useDispatch();
  const data = useLoaderData()
  const productData = data.data

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5 -ml-20">
              {/* Filters */}
              <div>
              <div className='flex justify-between  text-black opacity-60 '>
                <h2 className='text-lg font-bold'>Filters</h2>
                <FilterAltOutlinedIcon/>
              </div>
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
                {singleFilter.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                     <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">

                            {/* <span className="font-medium text-gray-900"></span> */}
                            <FormLabel className="text-black" id="demo-radio-buttons-group-label">{section.name}</FormLabel>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4 text-gray-900">
                          <FormControl>
                          <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
                            {section.options.map((option, optionIdx) => (
                              
  
  <>
    <FormControlLabel value={option.id} control={<Radio />} label={option.label} />
    
    </>

                            ))}
                            </RadioGroup>
                        </FormControl>
                          </div>
                        </Disclosure.Panel>
                        </>
                    )}
                  </Disclosure>
                ))}
              </form>
              </div>

              {/* Product grid */}
              <div className="lg:col-span-4">
              <div className="max-w-screen-2xl mx-auto ml-20  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-4 py-6">{productData.map((item) => (
      <div key ={item.index} className="bg-white h-auto w-full border-[1px] border-gray-300 py-6  hover:border-transparent shadow-none hover:shadow-textShadow duration-200 relative rounded-lg group overflow-hidden">
<div className="w-full h-auto flex items-center justify-center relative">
  <img className="w-52 h-64 object-contain scale-90 hover:scale-100 transition-transform duration-300" src={item.image}  alt ="productImage"/>
  <span className='text-xm capitalize italic absolute -top-2 right-2 text-gray-600'>{item.category}</span>
  <div className='text-black  w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300'>
  <span className=" w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-indigo-300 cursor-pointer duration-300">
  <ShoppingCartIcon />
</span>
<span className=" w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-indigo-300 cursor-pointer duration-300 ">
  <FavoriteTwoToneIcon/>
</span>
  </div>
</div>

<hr/>
<div className="text-black px-4  py-3 flex flex-col gap-1">
  <h2 className=" font-medium ">{item.title.substring(0,20)}</h2>
  <p className="font-semibold ">${item.price}</p>
</div>
<div>
  <p className=" text-xs text-gray-600 text-justify px-2">{item.description.substring(0,80)}...</p>
  <button className="h-10  w-[12rem] mx-12 xl:w-[10rem] lg:mx-8 mt-2  sml:w-[22rem] md:w-[18rem]  lgl:w-[28rem] font-medium bg-indigo-600 text-white items-center justify-center rounded-md hover:bg-purple-700 duration-300"
  onClick={()=>dispatch(addToCart({
    id:item.id,
    title:item.title,
    description: item.description,
    price:item.price,
    category:item.category,
    image:item.image,
    quantity:1,
  }))}>Add to cart</button>
</div>

      </div>
    ))}
    </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}




  
 

  // const [data, setData] = useState([]);
  // const [results, setResults] = useState([]);

  // useEffect(() => {
  //   fetchApi()
  //     .then((data) => {
  //       setData(data);
  //     })
  //     .catch((err) => {
  //       console.log("Error:", err);
  //     });
  // }, []);

  // const { id, title, price, description, category, image, rating } = data;
  // // filter functions
  // // const [items, setItems] = useState(data)
  // const filterType = (cat) => {
  //   setData(
  //     data.filter((item) => {
  //       return item.category === cat;
  //     })
  //   );
  // };

  // const priceType = (amount) => {
  //   setData(
  //     data.filter((item) => {
  //       return item.price === amount;
  //     })
  //   );
  // };

  // return (
  //   <section className="py-4">
  //     {/* filter data */}
  //     <div className="max-w-[1640px] m-auto px-4">
  //       {/* <h1 className='font-bold text-4xl text-center'>Items</h1> */}
  //       <div className="flex flex-col lg:flex-row justify-between">
  //         <div className="">
  //           {/* filter by category */}
  //           <p className="font-bold text-white">Category:</p>
  //           <div className="flex justify-between flex-wrap">
  //             <button
  //               onClick={() => setData()}
  //               className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  //             >
  //               All
  //             </button>
  //             <button
  //               onClick={() => filterType("men's clothing")}
  //               className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  //             >
  //               Men's Clothing
  //             </button>
  //             <button
  //               onClick={() => filterType("women's clothing")}
  //               className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  //             >
  //               Women's Clothing
  //             </button>
  //             <button
  //               onClick={() => filterType("jewelery")}
  //               className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  //             >
  //               Jewellery
  //             </button>
  //             <button
  //               onClick={() => filterType("electronics")}
  //               className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
  //             >
  //               Electronics
  //             </button>
  //           </div>
  //         </div>
  //         <div className="">
  //           {/* filter by price */}
  //           <p className="font-bold text-white">By Price:</p>
  //           <div className="flex justify-between flex-wrap">
  //             <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
  //               Under $25
  //             </button>
  //             <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
  //               $25 to $50
  //             </button>
  //             <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
  //               $50 to $100
  //             </button>
  //             <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
  //               $100 to $200
  //             </button>
  //             <button className="rounded-xl m-1 bg-white/60 p-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
  //               $200 & above
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Actual data */}
  //     <div className="pt-[20vh] w-[40%] m-auto flex flex-col items-center min-w-[200px]">
  //       <Search setResults={setResults} />
  //     </div>
  //     <div className="">
  //       <Results results={results} />
  //     </div>
  //   </section>
  // );



