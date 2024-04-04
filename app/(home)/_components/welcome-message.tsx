"use client";
import { format } from "date-fns";
import { enUS, ptBR } from "date-fns/locale";
import { useSession } from "next-auth/react";

const WelcomeMessage = () => {
  const { data, status } = useSession();

  return (
    <div className="flex flex-col text-white">
      {status === "authenticated" ? (
        <h2 className="text-xl">
          Welcome, <span className="font-bold">, {data?.user?.name}!</span>
        </h2>
      ) : (
        <h2 className="text-xl">
          Welcome <span className="font-bold">, You need to login first!</span>
        </h2>
      )}
      <p className="text-sm font-light text-white/70">
        {`Today is ${format(new Date(), "EEEE, MMMM dd", {
          locale: enUS,
        })}`}
        .
      </p>
    </div>
  );
};

export default WelcomeMessage;
