'use client'
import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { FaStar } from "react-icons/fa6";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const CategoriesItem = ({ Category }:any) => {
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/categories/${Category.id}`) 
  }

  return (
    <Card className="relative w-full rounded-2xl">
      <CardContent className="p-1">
        <Image
          src={Category.imageUrl}
          alt={Category.name}
          sizes="100vw"
          height={50}
          width={50}
          className="h-40 w-full rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-y-4 p-2">
          <div>
            <h2 className="line-clamp-1 truncate font-bold">
              {Category.name}
            </h2>
           
          </div>
          <Button variant={theme === "dark" ? "outline" : "default"} className="w-full" onClick={handleBookingClick}>
            View Details
          </Button>
        </div>

        <Badge
          className="absolute left-4 top-4 z-10 flex items-center gap-1 bg-neutral-900 hover:bg-neutral-900 dark:bg-secondary/80 dark:text-white dark:hover:bg-secondary/80"
          variant={"default"}
        >
          <FaStar size={13} className="text-yellow-600" />
          {Category.rating.toString()}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default CategoriesItem;
