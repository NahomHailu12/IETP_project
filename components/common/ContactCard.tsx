const ContactCard = () => {
  return (
    <div className="block w-full border text-center rounded-3xl text-white bg-gray-900  p-4">
      <h1 className="block font-bold text-4xl text-white text-center my-6">
        Contact us
      </h1>
      <p className="block text-lg  my-4">
        Have questions or need assistance? Our team is here to help you with all
        your machinery needs. Reach out to us through any of the following
        methods:
      </p>
      <div className="mt-6">
        <p className="text-white text-lg my-2">
          <span className="font-bold">Phone:</span> +251 - 936 - 56 - 0253
        </p>
        <p className="text-white text-lg my-2">
          <span className="font-bold">Email:</span> info@machinerycompany.com
        </p>
      </div>
      <hr className="my-6 border-gray-300" />
      <h1 className="block font-bold text-4xl text-white">
        Stay Connected, Follow Us
      </h1>
      {/* Twitter, Facebook, instagram Link to implement */}
    </div>
  );
};

export default ContactCard;
