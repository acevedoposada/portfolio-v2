'use client';

import { useRouter } from 'next/navigation';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleClose = () => router.back();

  return (
    <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white p-10'>
      <button onClick={handleClose}>Close modal</button>
      {children}
    </div>
  );
}
