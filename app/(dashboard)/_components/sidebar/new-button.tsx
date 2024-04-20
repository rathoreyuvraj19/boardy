"use client";

import { Hint } from "@/components/hint";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";

import { Plus } from "lucide-react";

export const NewButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label="Create Oraganization"
            side="right"
            align="start"
            sideOffset={18}
          >
            <button className="bg-white/25 h-full  w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition">
              <Plus className="text-white"></Plus>
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent sm:max-w-[425px] border-none max-w-[480px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CreateOrganization></CreateOrganization>
      </DialogContent>
    </Dialog>
  );
};
