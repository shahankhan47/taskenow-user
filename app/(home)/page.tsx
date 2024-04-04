import { BsStars } from "react-icons/bs";
import Header from "../_components/header";
import { db } from "../_lib/prisma";
import SearchSection from "../_sections/search-section";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../_components/ui/carousel";

import AboutSection from "../_sections/about-section";
import CategoriesItem from "./_components/categories-item";




const InfoCard = () => {
  return (
    <div className=" gap-2 grid grid-cols-12 grid-rows-2 p-10 bg-black m-10 rounded-3xl"> 
    <Card className="col-span-12 sm:col-span-4 h-[300px] rounded-2xl">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">What to watch</p>
        <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]  rounded-2xl">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Plant a tree</p>
        <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/117729/pexels-photo-117729.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </Card>
    <Card className="col-span-12 sm:col-span-4 h-[300px]  rounded-2xl">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Supercharged</p>
        <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/2225617/pexels-photo-2225617.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5  rounded-2xl">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">New</p>
        <h4 className="text-black font-medium text-2xl">Acme camera</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src="https://images.pexels.com/photos/4705603/pexels-photo-4705603.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">Available soon.</p>
          <p className="text-black text-tiny">Get notified.</p>
        </div>
        <Button className="text-tiny px-5 py-2" color="primary" radius="full" size="sm" >
          Notify Me
        </Button>
      </CardFooter>
    </Card>
    <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7  rounded-2xl">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
        <h4 className="text-white/90 font-medium text-xl">Your checklist for better sleep</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src="https://images.pexels.com/photos/4705603/pexels-photo-4705603.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
    </Card>
  </div>
  );
};

export default async function Home() {


  


  return (
    <main className="select-none">
      <div className="hidden md:block">
        <AboutSection />
      </div>

      <SearchSection />

      <div className="mt-6 flex select-none flex-col items-center justify-center gap-y-2 ">
        <h2 className="flex items-center gap-2 px-5 text-2xl font-semibold uppercase dark:text-white/70">
          Recomended <BsStars size={25} />
        </h2>

        <Carousel className="mx-auto w-full px-5 py-5 md:max-w-3xl lg:max-w-6xl">
          <CarouselContent>
            {sampleCategory.map((category) => (
              <CarouselItem
                key={category.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
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

      <div className="md:hidden">
        <AboutSection />
      </div>


            <InfoCard/>
        

      <div className="mt-6 flex select-none flex-col items-center justify-center gap-y-2">
        <h2 className="flex items-center gap-2 px-5 text-2xl font-semibold uppercase dark:text-white/70">
          Popular <BsStars size={25} />
        </h2>

        <Carousel className="mx-auto w-full px-5 py-5 md:max-w-3xl lg:max-w-6xl">
          <CarouselContent>
            {sampleCategory.map((category) => (
              <CarouselItem
                key={category.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4"
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
    </main>
  );
}



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


const cards = [
  {
    title: "Agendamento simplificado",
    description:
      "Aqui você tem acesso a um processo de agendamento simples e eficiente, permitindo que você reserve seu horário com facilidade.",
  },
  {
    title: "Barbearias de elite",
    description:
      "Explore uma seleção das melhores barbearias parceiras. Encontre ambientes profissionais e qualificados para cuidar do seu visual.",
  },
  {
    title: "Explorando estilos",
    description:
      "A QUICK BARBER oferece uma ampla gama de barbearias parceiras que você possa explorar e encontrar o estilo que mais combina com você.",
  },
];