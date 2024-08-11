"use client";

import { Button } from "@/components/ui/button";
import { BiPlus } from "react-icons/bi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { getRandomValues } from "crypto";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  label: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  land: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  price: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

enum STEPS {
  INFO = 0,
  DESCRIPTION = 1,
  IMAGES = 2,
  TASTE = 3,
}

const AddNewWine = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [step, setStep] = useState(STEPS.INFO);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      label: "",
      land: "",
      price: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    if (step !== STEPS.TASTE) {
      return onNext();
    } else {
      toast({
        title: "Values:",
        description: `${values}`,
      });
      // router.refresh();
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-2">
            <BiPlus /> Nytt vin
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Nytt vin</DialogTitle>
            <DialogDescription>
              Lägg till nytt vin här. Klicka spara när du är klar.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* FIRST STEP */}
              {step === STEPS.INFO && (
                <>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Namn</FormLabel>
                        <FormControl>
                          <Input placeholder="Toscana" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="label"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Märke</FormLabel>
                        <FormControl>
                          <Input placeholder="Villa Puccini" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              {step === STEPS.DESCRIPTION && (
                <>
                  <div className="flex gap-4 w-full">
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Pris</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="99 kr"
                              className="w-full"
                              // type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="land"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Land</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Italien"
                              className="w-min"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </>
              )}
              {step === STEPS.IMAGES && <>Images</>}
              {step === STEPS.TASTE && <>Taste</>}

              {/* SECOND STEP */}
              {/* <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Namn</FormLabel>
                    <FormControl>
                      <Input placeholder="Toscana" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
              <DialogFooter className="grid grid-cols-2 gap-4">
                <Button
                  variant="secondary"
                  onClick={onBack}
                  disabled={step === STEPS.INFO ? true : false}
                >
                  Tillbaka
                </Button>
                <Button
                  // type={step === STEPS.TASTE ? "submit" : "button"}
                  type="submit"
                  // onClick={step === STEPS.TASTE ? onSubmit : onNext}
                  onClick={onNext}
                >
                  Nästa
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewWine;
