import ContactCard from "@/components/common/ContactCard";
import ButtonWidget from "@/components/UI/Home UI/Button";
import ImageCard from "@/components/UI/Home UI/ImageCard";
import HomeProduct from "@/components/UI/Home UI/product";
import Testimony from "@/components/UI/Home UI/testimony";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-0 items-center justify-center bg-zinc-50">
      <ImageCard />
      <div className="w-full">
        <p className="p-4 lg:mx-20 text-5xl font-bold text-black text-center mb-16 leading-[5.8rem]">
          Our Machinery and Services
        </p>
        <br />
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {[
              "Flexible",
              "Modern",
              "Reliable",
              "Multi-purpose",
              "Durable",
              "Efficient",
              "Powerful",
            ].map((item, i) => {
              return <ButtonWidget key={i} child={item} />;
            })}
          </div>
        </div>

        <div className="grid px-8 mx-8 grid-cols-1 gap-6 md:grid-cols-3">
          <HomeProduct
            imageUrl="url('/product1.jpg')"
            title="Excavator ZX350LC-6"
            power="257 HP"
            price="$120,000"
          />
          <HomeProduct
            imageUrl="url('/product1.jpg')"
            title="Tractor ZX350LC-6"
            power="679 HP"
            price="$500,000"
          />
          <HomeProduct
            imageUrl="url('/product1.jpg')"
            title="EXcavator ZX350LC-6"
            power="1200 HP"
            price="$670,000"
          />
        </div>
        <p className="p-4 lg:mx-20 text-amber-500 text-5xl font-bold text-center mb-16 leading-[5.8rem]">
          What Our Clients Say
        </p>
        <div className="flex justify-center mb-12">
          <button className="bg-white text-amber-500 text-2xl rounded-full font-bold px-6 py-3 hover:bg-amber-500 hover:text-white transition">
            <Link href="/Contact">Contact Us</Link>
          </button>
        </div>
        <div className="grid px-20 grid-cols-1 gap-12 md:grid-cols-3 mb-20 text-amber-300">
          <Testimony
            imageUrl="/user1.jpg"
            username="John Doe"
            userrole="Construction Manager"
            stars={5}
            testimony="The machinery provided by this company has significantly improved our project efficiency. Highly recommended!"
          />
          <Testimony
            imageUrl="/user2.jpg"
            stars={5}
            username="Jane Smith"
            userrole="Site Supervisor"
            testimony=" Excellent customer service and reliable equipment. Our team is very satisfied with the performance."
          />
          <Testimony
            imageUrl="/user3.jpg"
            stars={3}
            username="Mike Johnson"
            userrole="Project Engineer"
            testimony="The durability and power of their machinery have exceeded our expectations. A great investment for our projects."
          />
          <Testimony
            imageUrl="/user4.jpg"
            stars={4}
            username="Emily Davis"
            userrole="Operations Director"
            testimony="Working with this company has been a game-changer for our operations. Their equipment is top-notch and their support is outstanding."
          />
          <Testimony
            imageUrl="/user5.jpg"
            stars={5}
            username="David Wilson"
            userrole="Logistics Coordinator"
            testimony="The efficiency and reliability of their machinery have streamlined our workflow. We couldn't be happier with our choice."
          />
          <Testimony
            imageUrl="/user6.jpg"
            username="Sarah Brown"
            stars={5}
            userrole="Field Technician"
            testimony="Their modern and multi-purpose equipment has made our tasks much easier. The team is always ready to assist us whenever needed."
          />
        </div>
        <div className="w-1/ mx-auto my-20">
          <ContactCard />
        </div>
      </div>
    </div>
  );
}
