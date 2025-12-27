import Image from "next/image";
import StarIcon from "./starIcon";
interface TesitimonyInterface {
  username: string;
  userrole: string;
  testimony: string;
  imageUrl: string;
  stars: number;
}
const Testimony: React.FC<TesitimonyInterface> = ({
  username,
  userrole,
  testimony,
  imageUrl,
  stars,
}) => {
  return (
    <div className="p-4 border bg-blue-50 min-h-50 border-gray-100 rounded-3xl flex flex-col">
      <div className="">
        {Array.from({ length: stars }).map((_, i) => (
          <StarIcon
            key={`star-filled-${i}`}
            size={30}
            rotate={90}
            className="inline border-0 border-yellow-500 m-2 h-20 text-yellow-400"
          />
        ))}
        {Array.from({ length: Math.max(0, 5 - stars) }).map((_, i) => (
          <StarIcon
            size={30}
            color="#d1d5db"
            key={`star-empty-${i}`}
            className="inline m-2"
            rotate={90}
          />
        ))}
        <hr className="my-4 border-gray-300" />
      </div>
      <div className="text-left text-green-500 text-lg  font-semibold py-2 my-4">
        {testimony}
      </div>
      <div className="">
        <Image
          src={imageUrl}
          alt={"PP"}
          width={50}
          height={50}
          className="rounded-full inline mx-4"
        />
        <p className="inline text-left text-yellow-700 font-bold text-xl mt-2">
          {username}
        </p>
        <p className="block text-left text-gray-600 font-semibold text-lg">
          {userrole}
        </p>
      </div>
    </div>
  );
};
export default Testimony;
