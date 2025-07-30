import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
function ShadcnForm() {
  const loginSchema = z.object({
    name: z.string().min(3, {
      message: "Name should be atlest 3 characters",
    }),
    email: z.email({message:"Invalid email address custom "}),
    password: z.string().min(8, {
      message: "Password Should be At least 8 characters",
    }),
  });
  type loginValue = z.infer<typeof loginSchema>;

  //  form

  const form = useForm<loginValue>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const handleSubmit =(values:loginValue)=>{
    console.log(values)
    //  submit the form 
  }
  return (
    <div>
      <h1 className="font-bold text-center text-2xl py-5">Shadcn Form</h1>

      <Form {...form}>
        <form
          className="max-w-3xl p-5 mx-auto grid  gap-4 mt-5 border bg-background"
 
    onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Your Name </FormLabel>
                <FormControl>
                  <Input placeholder="user name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Your Email </FormLabel>
                <FormControl>
                  <Input placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Your Password </FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default ShadcnForm;
