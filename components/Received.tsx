import React from 'react';
import { ReceivedData } from '@/components/Data';

const Received: React.FC = () => {

  const shouldScroll = ReceivedData.length > 6;

  return (
    <div className="min-h-80 bg-custom-bg2 text-gray-900">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        {
            ReceivedData.length !== 0?
           
             <div className='mt-4'>
             <div className='flex justify-center'>
             <h1 className='font-bold'>RECEIVED</h1>
             </div>
               <div className="mt-2 flex flex-col">
               <div className={`-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8 pb-10 ${shouldScroll? 'h-[calc(20em+2rem)]' : ''}`}>
                   <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                     <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg overflow-auto">
                       <table className="min-w-full divide-y">
                         <thead className="bg-gray-50">
                           <tr>
                             <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>ID</th>
                             <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Date</th>
                             <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Amount</th>
                             <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Reference</th>
                           </tr>
                         </thead>
                         <tbody className="bg-white divide-y divide-gray-200">
                           {
                             ReceivedData.map((item, index) => {
                               return (
                                 <tr key={index}>
                                   <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                   <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
                                   <td className="px-6 py-4 whitespace-nowrap text-green-400">+{item.amount}</td>
                                   <td className="px-6 py-4 whitespace-nowrap">{item.reference}</td>
                                 </tr>
                               );
                             })
                           }
                         </tbody>
                       </table>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             :
             <div className='flex justify-center h-150 items-center p-10'>
             <h1 className='font-bold'>MONEY RECEIVED WILL BE RECORDED HERE</h1>
             </div>


        }
       
      </main>
    </div>
  );
};

export default Received;
