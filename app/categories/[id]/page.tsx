import CategoriesInfo from "./_components/categories-info";

interface CategoryDetails {
  params: {
    id?: string;
  };
}

const BarbershopDetails = async ({ params }: CategoryDetails) => {

  if (!params.id) {
    return null;
  }

  return (
    <div>
      <CategoriesInfo Category={sampleCategory} />
    </div>
  );
};

export default BarbershopDetails;



const sampleCategory = {
  name: "Computer Repair",
  imageUrl: "https://images.pexels.com/photos/872732/pexels-photo-872732.jpeg",
  address: "123 Sample St, Sample City",
  phone: "123-456-7890",
  rating: 4.5,
  ratingQTD: 100,
  description: "This is a sample category description.",
  bonusItems: ["Covers Computer", "Other Electrical Items"],
  services: [
    {
      id: "service1",
      name: "Sample Service 1",
      description: "This is a sample service description.",
      price: 25.00,
      imageUrl: "https://images.pexels.com/photos/872732/pexels-photo-872732.jpeg"
    },
    {
      id: "service2",
      name: "Sample Service 2",
      description: "This is another sample service description.",
      price: 30.00,
      imageUrl: "https://images.pexels.com/photos/872732/pexels-photo-872732.jpeg"
    }
    // Add more sample services as needed
  ]
};