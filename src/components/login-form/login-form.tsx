import { GalleryVerticalEnd } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as React from "react";

export function LoginForm({
  mobile,
  password,
  setMobile,
  setPassword,
  onSubmit,
  className,
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-sm border border-black-600 p-10 shadow-2xl shadow-black flex flex-col gap-6"
      >
        <div className="flex flex-col items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-6" />
          </div>
          <h1 className="text-xl font-bold">Welcome to Cue Wellness</h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid gap-3 font-semibold">
            <Label htmlFor="mobile">MOBILE</Label>
            <Input
              id="mobile"
              type="text"
              placeholder="+91 1234567890"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-3  font-semibold">
            <Label htmlFor="password">PASSWORD</Label>
            <Input
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
