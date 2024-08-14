"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Login() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof formSchema>) {
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false
    }).then((callback: any) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/");
        router.refresh();
        toast({
          title: "Succe",
          description: "Du är nu inloggad.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Något gick fel",
          description: callback.error,
        });
      }
    });
  }

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

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 lg:p-10 flex flex-col h-full"
        >
          <Link
            href="/register"
            className="text-end self-end w-fit font-bold text-sm cursor-pointer"
          >
            Skapa konto
          </Link>
          <div className="text-center font-light text-gray-500 text-sm flex items-center flex-col justify-center h-full max-w-96 mx-auto gap-2">
            <h1 className="text-black dark:text-white font-bold text-2xl">
              Logga in
            </h1>
            <p className="mb-4">
              Ange din e-postadress nedan för att logga in på ditt konto
            </p>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full text-start space-y-1 mb-4">
                  <FormLabel className="text-black dark:text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="testmail@mail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full text-start space-y-1 mb-4">
                  <FormLabel className="text-black dark:text-white">
                    Lösenord
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              Logga in med E-postadress
            </Button>

            <p className="m-4">
              Här är inloggning till CMS och Dashboard för flera hemsidor gjorda
              av{" "}
              <Link
                href="/wines"
                className="underline underline-offset-4 cursor-pointer hover:text-black dark:hover:dark:text-white"
              >
                Sara Öhman
              </Link>
              . Endast behöriga kan skaffa ett konto.
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
