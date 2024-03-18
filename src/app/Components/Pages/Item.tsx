// Item.tsx
import React from 'react';

interface ItemProps {
  image: string;
  name: string;
  new_price: number;
  old_price: number;
}

const Item: React.FC<ItemProps> = ({ image, name, new_price, old_price }) => {
  return (
    <div style={{ width: '350px' }} className='item'>
      <img src={image} alt="" />
      <p style={{ margin: '6px 0px' }}>{name}</p>
      <div style={{ display: 'flex', gap: '20px' }} className='item-prices'>
        <div style={{ color: '#374151', fontSize: '18px', fontWeight: 600 }} className='item-price-new'>
          ${new_price}
        </div>
        <div style={{ color: '#8c8c8c', fontSize: '18px', fontWeight: 500, textDecoration: 'line-through' }} className='item-price-old'>
          ${old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
