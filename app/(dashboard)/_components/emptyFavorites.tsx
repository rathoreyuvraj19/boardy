import Image from "next/image";

export const EmptyFavorites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src={"/empty-favorites.svg"}
        alt="Empty"
        height={140}
        width={140}
      ></Image>
      <h2 className="text-2xl font-semibold mt-6">No favorite found!</h2>
      <p className="text-muted-foreground text-sm mt-2">Try adding favorites</p>
    </div>
  );
};
