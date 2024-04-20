"use client";
import { EmptyOrg } from "@/components/emptyOrg";
import { useOrganization } from "@clerk/nextjs";
import { BoardList } from "./_components/boardList";

interface DashBoardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}

const Dashboard = ({ searchParams }: DashBoardPageProps) => {
  const { organization } = useOrganization();
  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <EmptyOrg></EmptyOrg>
      ) : (
        <BoardList orgId={organization.id} query={searchParams}></BoardList>
      )}
    </div>
  );
};

export default Dashboard;
