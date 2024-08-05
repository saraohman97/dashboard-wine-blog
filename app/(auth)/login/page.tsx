import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function Login() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="relative bg-slate-800 max-lg:hidden">
        <h1 className="font-bold text-xl absolute top-4 left-4 text-white">
          Food & Drink co.
        </h1>
        <p className="absolute bottom-4 left-4 text-lg text-slate-100 lg:w-2/3">
          Food & Drink Co. was taking its stand in the early 1800s. More
          accumulated experience and pride has never been invested in a company
          before. <br />{" "}
          <span className="text-gray-400 text-sm">Sofia Makemoney</span>
        </p>
      </div>

      <div className="p-4 lg:p-10 flex flex-col h-full">
        <Link href='/register' className="text-end self-end w-fit font-bold text-sm cursor-pointer">
          Skapa konto
        </Link>
        <div className="text-center font-light text-gray-500 text-sm flex items-center flex-col justify-center h-full max-w-96 mx-auto gap-2">
          <h1 className="text-black dark:text-white font-bold text-2xl">Logga in</h1>
          <p className="mb-4">
            Ange din e-postadress nedan för att logga in på ditt konto
          </p>
          <div className="w-full text-start space-y-1 mb-4">
            <Label className="text-black dark:text-white">Email</Label>
            <Input placeholder="testmail@mail.com" />
          </div>
          <div className="w-full text-start space-y-1 mb-4">
            <Label className="text-black dark:text-white">Lösenord</Label>
            <Input placeholder="******" />
          </div>
          <Button className="w-full">Logga in med E-postadress</Button>


          <p className="m-4">
            Här är inloggning till CMS och Dashboard för flera hemsidor gjorda av {" "}
            <Link href='/wines' className="underline underline-offset-4 cursor-pointer hover:text-black dark:hover:dark:text-white">
              Sara Öhman
            </Link>. Endast behöriga kan skaffa ett konto. 
          </p>
        </div>
      </div>
    </div>
  );
}
