import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import { IoCalendarOutline } from "react-icons/io5";
import BookingItem from "../_components/booking-item";
import { Separator } from "../_components/ui/separator";
import { IoCheckmarkDone, IoCheckmark } from "react-icons/io5";
import { Card, CardContent } from "../_components/ui/card";
import { authOptions } from "../_lib/auth";

// Sample data
const confirmedBookings =  [
  {
    "id": "booking1",
    "categoryId": "c1",
    "category": {
      "id": "c1",
      "name": "Computer Repair",
      "address": "123 Main St, City",
      "imageUrl": "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
      "description": "Computer Reapir with XZ Viruses",
    
    },
    "serviceId": "service1",
    "service":{
      "id": "service1",
      "categoryId": "catrgory1",
      "name": "Screen Repair",
      "description": "Screen Repair",
      "price": 25.00,
      "imageUrl": "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "userId": "user1",
    "date": "2024-03-22T10:00:00Z"
  },
  {
    "id": "booking2",
    "categoryId": "c1",
    "category": {
      "id": "c1",
      "name": "Software Update",
      "address": "123 Main St, City",
      "imageUrl": "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
      "description": "Software Reparing things.",
    },
    "serviceId": "service1",
    "service":{
      "id": "Service 2",
      "categoryId": "category2",
      "name": "Installation Software",
      "description": "Correpted Software Updates",
      "price": 25.00,
      "imageUrl": "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    "userId": "user1",
    "date": "2024-03-22T10:00:00Z"
  }
];

const finishedBookings = [
  {
    id: 3,
    date: new Date("2024-03-29T09:00:00Z"),
    category: { name: "Software Installation" },
    service: { name: "Service 3", price: 70 },
  },
];

const BookingsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/");
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 p-5">
      <h1 className="flex items-center gap-2 text-xl font-semibold uppercase dark:text-white">
        Bookings <IoCalendarOutline size={25} />
      </h1>

      <div className="flex flex-col gap-y-2 py-2">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase dark:text-muted-foreground">
          Confirmed <IoCheckmark size={25} />
        </h2>
        {confirmedBookings.length > 0 ? (
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {confirmedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        ) : (
          <Card className="mt-5 w-fit">
            <CardContent className="p-5">
              <h4 className="text-xs">
                You dont have any confirmed bookings yet
              </h4>
            </CardContent>
          </Card>
        )}
      </div>

      <Separator />

      <div className="flex flex-col gap-y-2 py-2">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase dark:text-muted-foreground">
          Finished <IoCheckmarkDone size={25} />
        </h2>
        {finishedBookings.length > 0 ? (
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            {finishedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        ) : (
          <Card className="mt-5 w-fit">
            <CardContent className="p-5">
              <h4 className="text-xs">
                You dont have any finished bookings yet
              </h4>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;
