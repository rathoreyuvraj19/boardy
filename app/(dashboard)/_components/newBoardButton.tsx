"use client";

import { toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { useApiMuation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { useMutation } from "convex/react";
import { Plus } from "lucide-react";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMuation(api.board.create);

  const handleClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created");
        //TODO: redirect to board
      })
      .catch((error) => toast.error("Failed to create board"));
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={handleClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (pending || disabled) &&
          "hover:bg-blue-600 cursor-not-allowed opacity-75"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-small text-white font-light">New Board</p>
    </button>
  );
};
