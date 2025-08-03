"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function RegistrationForm() {
  //  schemas

  const registerSchema = z.object({
    firstName: z.string().min(3, {
      message: "First Name should have a minimum of 3 characters ",
    }),
    lastName: z.string().min(3, {
      message: "Last Name should have a minimum of 3 characters ",
    }),
    email: z.email(),
    // type:z.enum(["general","support"],{
    // required_error:"Select one option from the above"
    // }),

    message: z.string().min(5, {
      message: "Message should have minimum of 5 characters ",
    }),
    consent: z.boolean(),
  });

  //  type
  type registerValues = z.infer<typeof registerSchema>;
  //  form

  const form = useForm<registerValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      consent: false,
    },
  });
  //  handle submit

  const handleSubmit =(values:registerValues)=>{
    console.log(values)
    //  logic to send data to the backend
  }
  return (
    <div className=" bg-card w-full max-w-3xl py-10 rounded-3xl ">
      <h1 className="font-bold text-2xl pl-5">Contact Us </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="p-5 grid gap-5">
          <div className=" grid  sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="user name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="last name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="user email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message </FormLabel>
                <FormControl>
                  <Textarea placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className=" flex items-center">
                                 
                <FormControl>

                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => {
                        return field.onChange(checked)
                    }}
                  />
                </FormControl>
                <p>I concent to being contacted by the team </p>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button>Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default RegistrationForm;
