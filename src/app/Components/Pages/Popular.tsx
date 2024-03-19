// Popular.tsx
import React from 'react';
import data_product from '../Assets/data';
import { StaticImageData } from 'next/image';

interface ProductItem {
  id: number;
  name: string;
  image: StaticImageData; // Adjusted the type to accept StaticImageData
  new_price: number;
  old_price: number;
}

const Popular: React.FC = () => {
  return (
    <div className='popular flex flex-col items-center gap-10 h-90vh'>
      <h1 className='text-4xl font-semibold text-gray-900'>POPULAR IN WOMEN</h1>
      <hr className='w-44 h-1 bg-gray-900 rounded-full' />
      <div className='popular-item mt-10 flex gap-10'>
        {data_product.map((item: ProductItem, i: number) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Popular;

interface ItemProps {
  id: number;
  name: string;
  image: StaticImageData; // Adjusted the type to accept StaticImageData
  new_price: number;
  old_price: number;
}

const Item: React.FC<ItemProps> = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className='item'>
      <img src={image.src} alt={name} /> {/* Access the src property of StaticImageData */}
      <p>{name}</p>
      <div className='item-prices flex gap-2'>
        <div className='item-price-new text-gray-900 text-lg font-semibold'>
          ${new_price}
        </div>
        <div className='item-price-old text-gray-600 text-lg line-through'>
          ${old_price}
        </div>
      </div>
    </div>
  );
};
