import React from 'react'
import ProductCard from '../../components/ProductCard';
import Layout from '../../layout/Layout';
import BreadCrumbs from '../../components/BreadCrumbs';

const Product = () => {
  return (
    <Layout>
      <div className='brd'>
      <BreadCrumbs/>
      </div>
      <div className='flex grid grid-cols-3  justify-center gap-4 mt-10 p-2'>
      <ProductCard 
       image='https://plus.unsplash.com/premium_photo-1669357657851-f15e1417ea08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBsYW50fGVufDB8fDB8fHww'
        title='Flower of the year'
        subTitle='Hey flower how are yout oft nk e nrgnknfklnkld kndfkgn'
        retailPrice='230'
        wholesalePrice='240'
        review={10}
        add='Add to cart'
        buy='Buy now'
      />
         <ProductCard 
       image='https://plus.unsplash.com/premium_photo-1669357657851-f15e1417ea08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBsYW50fGVufDB8fDB8fHww'
        title='Flower of the year'
        subTitle='Hey flower how are yout oft nk e nrgnknfklnkld kndfkgn'
        retailPrice='230'
        wholesalePrice='240'
        review={10}
        add='Add to cart'
        buy='Buy now'
      />
         <ProductCard 
       image='https://plus.unsplash.com/premium_photo-1669357657851-f15e1417ea08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBsYW50fGVufDB8fDB8fHww'
        title='Flower of the year'
        subTitle='Hey flower how are yout oft nk e nrgnknfklnkld kndfkgn'
        retailPrice='230'
        wholesalePrice='240'
        review={10}
        add='Add to cart'
        buy='Buy now'
      />
           <ProductCard 
       image='https://plus.unsplash.com/premium_photo-1669357657851-f15e1417ea08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBsYW50fGVufDB8fDB8fHww'
        title='Flower of the year'
        subTitle='Hey flower how are yout oft nk e nrgnknfklnkld kndfkgn'
        retailPrice='230'
        wholesalePrice='240'
        review={10}
        add='Add to cart'
        buy='Buy now'
      />
           <ProductCard 
       image='https://plus.unsplash.com/premium_photo-1669357657851-f15e1417ea08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBsYW50fGVufDB8fDB8fHww'
        title='Flower of the year'
        subTitle='Hey flower how are yout oft nk e nrgnknfklnkld kndfkgn'
        retailPrice='230'
        wholesalePrice='240'
        review={10}
        add='Add to cart'
        buy='Buy now'
      />
           <ProductCard 
       image='https://plus.unsplash.com/premium_photo-1669357657851-f15e1417ea08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBsYW50fGVufDB8fDB8fHww'
        title='Flower of the year'
        subTitle='Hey flower how are yout oft nk e nrgnknfklnkld kndfkgn'
        retailPrice='230'
        wholesalePrice='240'
        review={10}
        add='Add to cart'
        buy='Buy now'
      />
    </div>
   </Layout>
  )
}

export default Product;

// Image, title, subTitle, retailPrice, wholesalePrice, review,add, buy