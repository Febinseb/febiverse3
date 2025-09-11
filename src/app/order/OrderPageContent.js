'use client';

import { useForm } from '@formspree/react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { TiTick } from 'react-icons/ti';
import { services } from '@/lib/services';

const OrderPageContent = () => {
  const [state, handleSubmit] = useForm('your_services_form_id'); // Make sure to use your correct Formspree ID
  const searchParams = useSearchParams();

  const serviceId = searchParams.get('service');
  const selectedService = services.find((s) => s.id === parseInt(serviceId));

  if (state.succeeded) {
    return (
      <main className='min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center'>
        <TiTick className='text-green-400 w-24 h-24 mb-6 animate-bounce' />
        <p className='text-3xl font-bold mb-4'>Order Sent!</p>
        <p className='text-lg text-gray-400 mb-8'>Thanks for placing your order. We&apos;ll be in touch soon.</p>
        <Link
          href='/'
          className='px-6 py-3 border-2 border-white text-white font-bold text-lg hover:bg-green-400 hover:text-black transition-colors duration-300'
        >
          Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className='min-h-screen bg-black text-white flex items-center justify-center pt-20'>
      <div className='w-full max-w-lg p-8 rounded-lg'>
        <h1 className='text-4xl font-extrabold mb-8 text-center dual-tone-heading'>Order for {selectedService ? selectedService.name : 'Service'}</h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <input
            type='hidden'
            name='service'
            value={selectedService ? selectedService.name : 'Unknown Service'}
          />
          <input
            type='text'
            name='name'
            placeholder='Your Name'
            required
            className='w-full p-4 bg-gray-900 bg-opacity-70 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:border-green-400'
          />
          <input
            type='email'
            name='email'
            placeholder='Your Email Address'
            required
            className='w-full p-4 bg-gray-900 bg-opacity-70 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:border-green-400'
          />
          <textarea
            name='details'
            placeholder='Describe your project details...'
            rows='5'
            required
            className='w-full p-4 bg-gray-900 bg-opacity-70 border border-gray-700 rounded-md placeholder-gray-400 focus:outline-none focus:border-green-400'
          />
          <button
            type='submit'
            disabled={state.submitting}
            className='w-full py-4 bg-green-400 text-black font-bold text-lg rounded-md hover:bg-green-500 transition-colors duration-200 disabled:opacity-50'
          >
            Submit Order
          </button>
        </form>
      </div>
    </main>
  );
};

export default OrderPageContent;