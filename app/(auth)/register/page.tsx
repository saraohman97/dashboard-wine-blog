import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function Register() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="relative bg-slate-800 max-lg:hidden">
        <h1 className="font-bold text-xl absolute top-4 left-4 text-white">Food & Drink co.</h1>
        <p className="absolute bottom-4 left-4 text-lg text-slate-100 lg:w-2/3">Food & Drink Co. was taking its stand in the early 1800s. More accumulated experience and pride has never been invested in a company before. <br /> <span className="text-gray-400 text-sm">Sofia Makemoney</span></p>
      </div>

      <div className="p-4 lg:p-10 flex flex-col h-full">
        <Link href='/login' className="text-end self-end w-fit font-bold text-sm cursor-pointer">Logga in</Link>
        <div className="text-center font-light text-gray-500 text-sm flex items-center flex-col justify-center h-full max-w-96 mx-auto gap-2">
          <h1 className="text-black dark:text-white font-bold text-2xl">Skapa ett konto</h1>
          <p className="mb-4">Ange din e-postadress nedan för att skapa ditt konto</p>
          <Input placeholder="testmail@mail.com" />
          <Button className="w-full">Logga in med E-postadress</Button>
          <div className="my-4">OR CONTINUE WITH</div>
          <Button className="w-full flex gap-2" variant='outline'><BsGithub /> GitHub</Button>
          <p className="m-4">By clicking continue, you agree to our <Link href='/wines' className="underline underline-offset-4 cursor-pointer hover:text-black dark:hover:dark:text-white">Terms of service</Link> and <span className="underline underline-offset-4 cursor-pointer hover:text-black dark:hover:dark:text-white">Privacy Policy</span></p>
        </div>
      </div>
    </div>
  );
}
