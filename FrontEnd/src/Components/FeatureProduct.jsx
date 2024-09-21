import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetFeaturedProduct } from "../Redux/productSlice.js";


const FeatureProduct = () => {
    const dispatch = useDispatch();
    const { allFeaturedProduct } = useSelector(
      (state) => state.product
    );

    useEffect(() => {
        dispatch(GetFeaturedProduct());
      }, []);


      return (
       
        
         
        <div>


            
        <div className="pb-16"> 
            <div className="bg-gray-100 flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
                <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                    <div>
                        <p className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">Best Seller Products</p>
                    </div>
                    <div>
                        <p className="text-base leading-normal sm:leading-none text-center text-gray-600">Explore products that are bought most frequently by people</p>
                    </div>
                </div>
            </div>
      </div>
      
      
         <section class="text-gray-600 body-font">
          
         <div class="container px-5 py-24 mx-auto"> {allFeaturedProduct?.map((e) => (  
          
          
           <div class="flex flex-wrap -m-1">
             <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
               <a class="block relative h-48 rounded overflow-hidden">
                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={e.image}/>
               </a>
               <div class="mt-4">
                 <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{e.name}</h3>
                 <h2 class="text-gray-900 title-font text-lg font-medium">{e.description}</h2>
                 <p class="mt-1">{e.price}</p>
               </div>
             </div>
             <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
               <a class="block relative h-48 rounded overflow-hidden">
                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={e.image}/>
               </a>
               <div class="mt-4">
                 <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{e.name}</h3>
                 <h2 class="text-gray-900 title-font text-lg font-medium">{e.description}</h2>
                 <p class="mt-1">{e.price}</p>
               </div>
             </div>
             <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
               <a class="block relative h-48 rounded overflow-hidden">
                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={e.image}/>
               </a>
               <div class="mt-4">
                 <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{e.name}</h3>
                 <h2 class="text-gray-900 title-font text-lg font-medium">{e.description}</h2>
                 <p class="mt-1">{e.price}</p>
               </div>
             </div>
             <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
               <a class="block relative h-48 rounded overflow-hidden">
                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={e.image}/>
               </a>
               <div class="mt-4">
                 <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{e.name}</h3>
                 <h2 class="text-gray-900 title-font text-lg font-medium">{e.description}</h2>
                 <p class="mt-1">{e.price}</p>
               </div>
             </div>
             <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
               <a class="block relative h-48 rounded overflow-hidden">
                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={e.image} />
               </a>
               <div class="mt-4">
                 <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{e.name}</h3>
                 <h2 class="text-gray-900 title-font text-lg font-medium">{e.description}</h2>
                 <p class="mt-1">{e.price}</p>
               </div>
             </div>
             <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
               <a class="block relative h-48 rounded overflow-hidden">
                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={e.image}/>
               </a>
               <div class="mt-4">
                 <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{e.name}</h3>
                 <h2 class="text-gray-900 title-font text-lg font-medium">{e.description}</h2>
                 <p class="mt-1">{e.price} </p>
               </div>
             </div>
             <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
               <a class="block relative h-48 rounded overflow-hidden">
                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={e.image}/>
               </a>
               <div class="mt-4">
                 <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{e.name}</h3>
                 <h2 class="text-gray-900 title-font text-lg font-medium">{e.description}</h2>
                 <p class="mt-1">{e.price}</p>
               </div>
             </div>
             <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
               <a class="block relative h-48 rounded overflow-hidden">
                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={e.image}/>
               </a>
               <div class="mt-4">
                 <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{e.name}</h3>
                 <h2 class="text-gray-900 title-font text-lg font-medium">{e.description}</h2>
                 <p class="mt-1">{e.price}</p>
               </div>
             </div>
           </div>
            ))
      }
           </div>

       
       </section>
            </div>
           ) 
        }
 
      
    
 export default FeatureProduct;
    