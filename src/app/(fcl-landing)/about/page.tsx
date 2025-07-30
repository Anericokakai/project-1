"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, FormEventHandler, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { z } from "zod";
import { Terminal } from "lucide-react";
import ShadcnForm from "./shadnc-form";

const aboutPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | undefined>(undefined);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //  validate the inputs
    if (!name || name.length < 3) {
      setError("name should not be  blank or less than 3 characters ");
      return
    }

    //  console log the resutl of the form

    console.log(name, email, password);
  };

  //  handle change
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl p-5 mx-auto grid  gap-4 mt-5 border bg-background"
        action="
        "
      >
        <input name="name" onChange={handleFormChange} placeholder="name" />
        <input name="email" onChange={handleFormChange} placeholder="email" />
        <input
          name="password"
          onChange={handleFormChange}
          placeholder="password"
        />

        {error && (
          <Alert variant="destructive">
            <Terminal />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Button type="submit">Submit</Button>
      </form>


      <ShadcnForm/>
    </main>
  );
};

export default aboutPage;
