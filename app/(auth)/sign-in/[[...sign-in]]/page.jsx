import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      <div className="flex justify-center items-center">
        <Image src="/login.png" alt="login" width={500} height={500} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex justify-center items-center">
        <SignIn />
      </div>
    </div>
  );
}
