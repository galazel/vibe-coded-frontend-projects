import React, { useContext } from 'react'
import { AccountContext } from '../layouts/account-layout'
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label" 

export function Register() {
  const setIsRegistering = useContext(AccountContext);

  return (
    <div className="grid gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-balance text-muted-foreground">
          Enter your information to create an account
        </p>
      </div>
      
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Accept terms and conditions
            </Label>
        </div>

        <Button type="submit" className="w-full">
          Create an account
        </Button>
      </div>
      
      <div className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <span 
            onClick={() => setIsRegistering(false)} 
            className="underline cursor-pointer hover:text-blue-600 font-bold"
        >
          Sign in
        </span>
      </div>
    </div>
  )
}

export function Login() {
  const setIsRegistering = useContext(AccountContext);

  return (
    <div className="grid gap-4 animate-in fade-in slide-in-from-left-4 duration-300">
       <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto inline-block text-sm underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>

      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <span 
            onClick={() => setIsRegistering(true)} 
            className="underline cursor-pointer hover:text-blue-600 font-bold"
        >
          Sign up
        </span>
      </div>
    </div>
  )
}