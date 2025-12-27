import ContactCard from "@/components/common/ContactCard";
import AboutImageCard from "@/components/UI/about/aboutFrontImage";
import Testimony from "@/components/UI/Home UI/testimony";
import { Ear } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full bg-white pb-4">
      <AboutImageCard />
      <div className="w-full flex flex-col items-center bg-white text-black px-12">
        <p className="text-5xl w-3/5 font-bold text-amber-500 text-center my-16">
          Reliable and Customizable Solutions for agricultural problems
        </p>
        <p className="w-3/5 text-xl font-semibold text-left my-16">
          At FarmEquip, we are dedicated to providing innovative and reliable
          agricultural equipment tailored to meet the unique needs of farmers
          worldwide. Our team of experts works closely with local communities to
          design solutions that enhance productivity, sustainability, and
          efficiency in agriculture.
        </p>
        {/* <Image
          src="/product1.jpg"
          alt="About Us Image"
          width={800}
          height={500}
          className="my-8 mx-auto rounded-3xl border border-gray-100"
        /> */}
      </div>
      <div className="my-20 text-center text-amber-500">
        <Ear className="inline text-center mx-2 " size={60} />
        <h1 className="inline text-5xl text-center">Hear From Our Customers</h1>
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
      <div className="grid grid-cols-1 p-6 my-12 md:grid-cols-2 gap-6 items-center">
        <div className="flex flex-col items-center border border-gray-100 py-4 px-6 rounded-3xl mx-6">
          <div className="flex">
            <Image
              src="/product1.jpg"
              alt="About Us Image"
              className="my-8 mx-6 rounded-2xl p-6 border border-gray-200"
              width={400}
              height={200}
            />
            <Image
              src="/product1.jpg"
              alt="About Us Image"
              className="my-8 mx-6 rounded-2xl p-6 border border-gray-200"
              width={400}
              height={200}
            />
          </div>
          <Image
            src="/product1.jpg"
            width={400}
            height={200}
            alt="About Us Image"
            className="my-8 mx-6 rounded-2xl p-6 border border-gray-200"
          />
        </div>
        <div className="border border-gray-100 py-12 px-6 rounded-3xl bg-gray-900 mx-6">
          <h2 className="block my-3 leading-8 text-left text-amber-500 text-5xl">
            Our Vision and Mission
          </h2>
          <h2 className="block my-3 leading-8 text-left text-amber-500 text-2xl">
            Mission
          </h2>
          <p className="block my-3 leading-8 text-left text-gray-300 text-lg">
            Our mission is empowering local agricultural communities through
            innovative equipment and sustainable practices. We are committed to
            fostering growth and sustainability in agriculture.
          </p>
          <h2 className="block my-3 leading-8 text-left text-amber-500 text-2xl">
            Vision
          </h2>
          <p className="block my-3 leading-8 text-left text-gray-300 text-lg">
            Our vision is to become a global leader in agricultural innovation,
            driving progress and sustainability worldwide and become center of
            local innovation to create solution for Africa.
          </p>
        </div>
      </div>
      <ContactCard />
    </div>
  );
};

export default About;
