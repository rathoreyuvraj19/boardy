"use client";

import { useQuery } from "convex/react";
import { EmptyBoard } from "./emptyBoard";
import { EmptyFavorites } from "./emptyFavorites";
import { EmptySearch } from "./emptySearch";
import { api } from "@/convex/_generated/api";
import { BoardCard } from "./boardCard";
import { NewBoardButton } from "./newBoardButton";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId });

  if (data === undefined) {
    //data === undefined
    return (
      <div>
        <h2 className="text-3xl">
          {query.favorites ? "Favorite Boards" : "Team Boards"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewBoardButton orgId={orgId} disabled></NewBoardButton>
          <BoardCard.Skeleton></BoardCard.Skeleton>
          <BoardCard.Skeleton></BoardCard.Skeleton>
          <BoardCard.Skeleton></BoardCard.Skeleton>
          <BoardCard.Skeleton></BoardCard.Skeleton>
          <BoardCard.Skeleton></BoardCard.Skeleton>
        </div>
      </div>
    );
  }
  if (!data.length && query.search) {
    //user searched for something that doesnt exists
    return <EmptySearch></EmptySearch>;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorites></EmptyFavorites>;
  }

  if (!data.length) {
    return <EmptyBoard></EmptyBoard>;
  }
  return (
    <div>
      <h2 className="text-3xl">
        {query.favorites ? "Favorite Boards" : "Team Boards"}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewBoardButton orgId={orgId} disabled={false}></NewBoardButton>
        {data.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.autherName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavorite={true}
          ></BoardCard>
        ))}
      </div>
    </div>
  );
};
