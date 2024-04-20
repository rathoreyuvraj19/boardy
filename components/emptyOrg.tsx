import Image from "next/image";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";

export const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/elements.svg"} height={200} width={200} alt="Empty"></Image>
      <h2 className="text-2xl font-semibold mt-6">Welcome to Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger>
            <Button>Create an organization to get started</Button>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none p-0 ">
            <CreateOrganization></CreateOrganization>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
