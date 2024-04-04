import Search from "../(home)/_components/search";
import BookingItem from "../_components/booking-item";
import { MdOutlineBookmarkAdded } from "react-icons/md";

import { db } from "../_lib/prisma";
import { BsStars } from "react-icons/bs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../_components/ui/carousel";
import WelcomeMessage from "../(home)/_components/welcome-message";
import { getServerSession } from "next-auth";

import { Card, CardContent } from "../_components/ui/card";
import { authOptions } from "../_lib/auth";
import CategoriesItem from "../(home)/_components/categories-item";
import { Separator } from "../_components/ui/separator";


const SearchSection = async () => {
  const session = await getServerSession(authOptions);

  const [categories, bookings] = await Promise.all([
    Promise.resolve(sampleCategory),
    session?.user
      ? Promise.resolve(sampleBookings)
      : Promise.resolve([]),
  ]);

  return (
    <section className=" bg-[url('https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg')] bg-cover bg-center bg-no-repeat px-5 py-10 m-10 rounded-3xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-around gap-5">
        <div className="flex w-full max-w-sm flex-col gap-y-5">
          <WelcomeMessage />

          {/* <Search /> This will be done later on */}

          {session?.user && (
            <div className="flex flex-col items-center justify-center">
              <h2 className="flex items-center gap-2 text-sm font-semibold uppercase text-white dark:text-white/70">
                Your Appointments <MdOutlineBookmarkAdded size={25} />
              </h2>

              {bookings.length > 0 ? (
                <Carousel className="mx-auto w-full max-w-2xl px-5 py-5">
                  <CarouselContent>
                    {bookings.map((booking: any) => (
                      <CarouselItem key={booking.id}>
                        <BookingItem key={booking.id} booking={booking} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden xl:block">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              ) : (
                <Card className="mt-5">
                  <CardContent className="p-5">
                    <h4 className="text-xs">
                      You have no bookings yet.
                    </h4>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
        <div className="mt-6 hidden select-none flex-col items-center justify-center gap-y-2 lg:flex">
          <h2 className="flex items-center gap-2 px-5 text-sm font-semibold uppercase text-neutral-300">
            Most Booked Categories <BsStars size={25} />
          </h2>

          <Carousel className="mx-auto w-full max-w-2xl px-5 py-5">
            <CarouselContent>
              {categories.map((category: any) => (
                <CarouselItem
                  key={category.id}
                  className="basis-1/2 md:basis-1/3"
                >
                  <CategoriesItem Category={category} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden xl:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;




// Sample Data for the Database 

const sampleBookings = [
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
]



const sampleCategory = [
  {
    "id": "c1",
    "name": "Computer Repair",
    "address": "123 Main St, City",
    "imageUrl": "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
    "phone": ["123-456-7890"],
    "recommended": true,
    "rating": 4.5,
    "ratingQTD": 100,
    "description": "A classic barbershop providing top-notch haircuts.",
    "bonusItems": ["Free beverage", "Wifi available"],
    "openings": ["Mon-Fri: 9am-6pm", "Sat: 9am-5pm", "Sun: Closed"]
  },
  {
    "id": "c2",
    "name": "Software Fixing",
    "address": "123 Main St, City",
    "imageUrl": "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
    "phone": ["123-456-7890"],
    "recommended": true,
    "rating": 4.5,
    "ratingQTD": 100,
    "description": "A classic barbershop providing top-notch haircuts.",
    "bonusItems": ["Free beverage", "Wifi available"],
    "openings": ["Mon-Fri: 9am-6pm", "Sat: 9am-5pm", "Sun: Closed"]
  },
  {
    "id": "c1",
    "name": "Plumbing",
    "address": "123 Main St, City",
    "imageUrl": "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
    "phone": ["123-456-7890"],
    "recommended": true,
    "rating": 4.5,
    "ratingQTD": 100,
    "description": "A classic barbershop providing top-notch haircuts.",
    "bonusItems": ["Free beverage", "Wifi available"],
    "openings": ["Mon-Fri: 9am-6pm", "Sat: 9am-5pm", "Sun: Closed"]
  },
  {
    "id": "c3",
    "name": "Mobile Repair",
    "address": "123 Main St, City",
    "imageUrl": "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
    "phone": ["123-456-7890"],
    "recommended": true,
    "rating": 4.5,
    "ratingQTD": 100,
    "description": "A classic barbershop providing top-notch haircuts.",
    "bonusItems": ["Free beverage", "Wifi available"],
    "openings": ["Mon-Fri: 9am-6pm", "Sat: 9am-5pm", "Sun: Closed"]
  },
  {
    "id": "c4",
    "name": "Point of Sale",
    "address": "123 Main St, City",
    "imageUrl": "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
    "phone": ["123-456-7890"],
    "recommended": true,
    "rating": 4.5,
    "ratingQTD": 100,
    "description": "A classic barbershop providing top-notch haircuts.",
    "bonusItems": ["Free beverage", "Wifi available"],
    "openings": ["Mon-Fri: 9am-6pm", "Sat: 9am-5pm", "Sun: Closed"]
  },
  {
    "id": "c5",
    "name": "Electrical Repair",
    "address": "123 Main St, City",
    "imageUrl": "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=600",
    "phone": ["123-456-7890"],
    "recommended": true,
    "rating": 4.5,
    "ratingQTD": 100,
    "description": "A classic barbershop providing top-notch haircuts.",
    "bonusItems": ["Free beverage", "Wifi available"],
    "openings": ["Mon-Fri: 9am-6pm", "Sat: 9am-5pm", "Sun: Closed"]
  }
]