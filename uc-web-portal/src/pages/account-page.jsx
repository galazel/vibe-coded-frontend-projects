import React, { useContext } from "react";
import { AccountContext } from "../layouts/account-layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FileTextIcon, InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Register() {
  const setIsRegistering = useContext(AccountContext);

  return (
    <div className="flex flex-col h-full gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
      {/* 1. Header Section */}
      <div className="flex flex-col gap-2 text-center pb-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-blue-900">Registration</h1>
        <p className="text-sm text-muted-foreground text-balance">
          Welcome to{" "}
          <span className="font-semibold text-blue-700">
            University of Cebu Lapu-Lapu and Mandaue
          </span>{" "}
          online registration. Your first step to success.
        </p>
      </div>

      {/* 2. Instructions Section */}
      <div className="flex flex-col gap-4">
        {/* New Students Group */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-2">
          <p className="font-semibold text-sm text-gray-900 flex items-center gap-2">
            <FileTextIcon className="w-4 h-4 text-blue-600" /> New Admission
            (Freshmen & Transferees)
          </p>
          <p className="text-xs text-gray-600 text-justify leading-relaxed">
            Before you proceed with Admission, please check first the steps and
            requirements
            <a
              href="https://lmportal.uc.edu.ph/static/media/lm_info.5603eea6a34f28a02edd.jpg"
              target="blank"
              className="text-blue-600 underline ml-1 hover:text-blue-800"
            >
              here
            </a>
            {" "}so you can prepare the necessary information and documents.
          </p>
        </div>

        {/* Returnees Alert */}
        <Alert
          variant="default"
          className="bg-blue-50 border-blue-200 text-blue-900"
        >
          <InfoIcon className="h-4 w-4 text-blue-600" />
          <AlertTitle className="font-bold text-sm">Returnees</AlertTitle>
          <AlertDescription className="text-xs text-blue-800/90 text-justify mt-1">
            UCnians who stopped schooling and wish to continue do not need to
            register again. Please login using your old ID number or contact the
            EDP office.
          </AlertDescription>
        </Alert>
        
        <Alert
          variant="default"
          className="bg-green-50 border-green-200 text-green-900"
        >
          <InfoIcon className="h-4 w-4 text-green-600" />
          <AlertTitle className="font-bold text-sm">Enrollment Open</AlertTitle>
          <AlertDescription className="text-xs text-green-800/90 text-justify mt-1">
            You can now process an enrollment for the following term(s): 2nd Semester S.Y. 2025 - 2026.
          </AlertDescription>
        </Alert>
      </div>

      {/* 3. Footer / Action Section */}
      <div className="flex flex-col gap-3 mt-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 py-6 text-lg shadow-md"
            >
              Admission
            </Button>
          </DialogTrigger>
          
          {/* MODAL ADJUSTMENTS HERE: Max width 4XL, Max height 85% of screen, Scrollable */}
          <DialogContent className="sm:max-w-4xl max-h-[85vh] flex flex-col overflow-hidden">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-blue-900">
                DATA PRIVACY CONSENT FORM
              </DialogTitle>
            </DialogHeader>
            
            {/* Scrollable Text Area */}
            <div className="flex-1 overflow-y-auto pr-4 my-2 border p-4 rounded-md bg-slate-50 text-sm text-justify leading-relaxed text-gray-700">
              <DialogDescription className="text-gray-800">
                <p className="mb-4">
                  I, (student’s name), duly assisted by (parent’s/guardian’s name if student is minor), hereby authorize the University of Cebu to collect, record, organize, update, use, consolidate, or destruct my personal information. I agree that my personal information may be entered and stored within the University’s authorized information and communications system and will only accessed by the University and its authorized personnel.
                </p>
                <p className="mb-4">
                  I understand that the University has instituted appropriate organizational, technical, and physical security measures to protect my personal information. I am well aware that the University may collect, record, organize, update, use, consolidate; or destruct my personal information for the following purposes:
                </p>
                <ul className="list-disc ml-6 mb-4 space-y-1">
                    <li>Evaluating applications for admission to the University;</li>
                    <li>Establishing and maintaining student information systems;</li>
                    <li>Recording, generating, and maintaining student records for academics, co–curricular, and extra-curricular monitoring;</li>
                    <li>Sharing of grades between and among faculty members and others with legitimate official need for academic deliberations and evaluation of student performance;</li>
                    <li>Processing scholarship applications, grants and other forms of financial assistance;</li>
                    <li>Investigating incidents that relate to student discipline;</li>
                    <li>Compiling and generating reports for statistical and research purposes;</li>
                    <li>Providing student services;</li>
                    <li>Communicating official school announcements;</li>
                    <li>Sharing marketing and promotional materials regarding school-related functions, events, projects and activities; and</li>
                    <li>Sharing information with persons or institutions as required by law.</li>
                </ul>
                <p className="mb-4">
                  In so doing, I waive my and all privileges and rights of confidentiality which I would otherwise possess with respect thereto. I agree and understand that there must be a free flow of my personal information to and from the University to ensure the efficient delivery of student services and implementation of institutional mechanisms.
                </p>
                <p className="mb-4">
                  I have read the University’s Data Privacy Statement and express my full and unequivocal consent for the University to collect, record, organize, update, modify retrieve, consult, use, consolidate, block, erase, or destruct my personal data as part of my personal information. I hereby affirm my rights to be informed, to object to processing, to access and rectify, to suspend or withdraw my personal information, and to be indemnified for damages pursuant to Republic Act No 10173 or the Data Privacy Act of 2012 and its Implementing Rules and Regulations.
                </p>
                <div className="mt-6 border-t pt-4 text-xs text-gray-500">
                    <p><strong>For inquiries or complaints:</strong></p>
                    <p>University Data Privacy Officer: Atty. Nichol Jon Burt A. Ruaya</p>
                    <p>Email: ruaya.nichol.jba@gmail.com | Contact: 0905 210 8737</p>
                    <p>University of Cebu Main Campus Legal Office, Sanciangko St., Cebu City</p>
                </div>
              </DialogDescription>
            </div>

            <DialogFooter className="sm:justify-end gap-2">
              <DialogClose asChild>
                 <Button type="button" className="bg-blue-700 hover:bg-blue-800">
                I Agree & Continue
              </Button>
              </DialogClose>
            
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => setIsRegistering(false)}
            className="underline cursor-pointer text-blue-700 hover:text-blue-900 font-bold transition-colors"
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
}
export function Registration()
{
    
}

export function Login() {
  const setIsRegistering = useContext(AccountContext);

  return (
    <div className="flex flex-col justify-center h-full gap-6 animate-in fade-in slide-in-from-left-4 duration-300">
      <div className="flex flex-col gap-2 text-center pb-2">
        <h1 className="text-3xl font-bold text-blue-900">Login</h1>
        <p className="text-sm text-muted-foreground text-balance">
          Enter your email below to login to your account
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="h-10"
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto inline-block text-xs font-medium text-blue-600 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required className="h-10" />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 h-10 mt-2 shadow-sm"
        >
          Login
        </Button>
      </div>

      <div className="mt-2 text-center text-sm text-gray-500">
        Don&apos;t have an account?{" "}
        <span
          onClick={() => setIsRegistering(true)}
          className="underline cursor-pointer text-blue-700 hover:text-blue-900 font-bold transition-colors"
        >
          Sign up
        </span>
      </div>
    </div>
  );
}