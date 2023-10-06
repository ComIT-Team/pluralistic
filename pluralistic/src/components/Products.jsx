import React, { useEffect, useState } from 'react';
import { fetchApi } from '../fetchApi';
import { Link } from 'react-router-dom';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchApi()
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);

  const { id, title, price, description, category, image, rating } = data;

  return (
    <section className='py-4'>
      <div className='container mx-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
          {data.map((item) => (
            <div key={item.id} className='m-6'>
              <div className='border border-gray-400 h-[300px] mb-4 relative overflow-hidden group transition bg-zinc-50'>
                <div className='w-full h-full flex justify-center items-center'>
                  <div className='w-[200px] mx-auto flex justify-center items-center'>
                    <img
                      className='max-h-[160px] group-hover:scale-110 transition duration-300'
                      src={item.image}
                      alt=''
                    />
                  </div>
                </div>
                {/* add icons */}
                <div className='absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                  <button>
                    <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                      <AddRoundedIcon className='text-3xl' />
                    </div>
                  </button>
                  <Link
                    to={`/product/${id}`}
                    className='w-12 h-12  flex justify-center items-center text-primary  drop-shadow-xl'
                  >
                    <VisibilityRoundedIcon />
                  </Link>
                </div>
              </div>
              <div>
                <div className='text-sm capitalize text-gray-100 mb-1'>
                  {item.category}
                </div>
                <Link className='flex'>
                  <AddShoppingCartRoundedIcon className='text-red-600'/>
                </Link>
                <Link className='no-underline text-zinc-50' to={`/product/${id}`}>
                  <h2 className='text-base font-semibold mb-1'>{item.title}</h2>
                </Link>
                
                <h1 className='text-base font-semibold text-amber-100'>$ {item.price}</h1>
              </div>
              {/* <p>{item.category}</p>
              <p>{item.description}</p>
              <h2 className='text-base text-red-700'>$ {item.price}</h2> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
