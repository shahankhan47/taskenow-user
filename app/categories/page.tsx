
import { redirect } from "next/navigation";
import CategoriesItem from "../(home)/_components/categories-item";

interface CategoryPageProps {
  searchParams: {
    search?: string;
  };
}

const CategoryPage = async ({ searchParams }: CategoryPageProps) => {
  if (!searchParams.search) {
    return redirect("/");
  }



  return (
    <div className="mx-auto w-full max-w-7xl p-5">
      <h1 className="flex items-center gap-2 text-xl font-semibold dark:text-white">
        Exibindo resultados de pesquisa para &quot;{searchParams.search}&quot;
      </h1>

      {sampleCategory.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {sampleCategory.map((Category: any) => (
            <CategoriesItem key={Category.id} Category={Category} />
          ))}
        </div>
      ) : (
        <div className="mt-5">
          <p className="text-sm font-light">Oops! Não foi possível encontrar algo com o termo pesquisado.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;



const sampleCategory = [
  {
    "id": "c1",
    "name": "Classic Cuts",
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
    "name": "Classic Cuts",
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
    "name": "Classic Cuts",
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
    "name": "Classic Cuts",
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
    "name": "Classic Cuts",
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
    "name": "Classic Cuts",
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