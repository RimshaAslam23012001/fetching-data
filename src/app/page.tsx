import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const url = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await url.json();
  console.log(res);

  return (
    <div className="bg-blue-300 px-4 py-10">
      <h1 className="text-3xl bg-blue-500 text-slate-900 font-extrabold font-serif hover:text-lime-500 transition transform hover:scale-105 hover:shadow-lg shadow-blue-800 text-center mb-8">
        USERS
      </h1>

      {/* grid setting*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center">
        {/* user details*/}
        {res.map((userdata: any, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center bg-stone-400 p-5 rounded-3xl w-full max-w-xs mx-auto shadow-lg transition transform hover:scale-105 hover:shadow-xl"
            >
              {/* User Image */}
              <Image
                src="/user.png"
                alt="user"
                width={200}
                height={150}
                className="rounded-lg mb-4 w-full h-auto object-cover"
              />

              {/* User Name */}
              <Link
                href={`/${userdata.id}`}
                className="text-lg font-extrabold text-white bg-lime-700 w-full text-center py-2 rounded-full transition hover:bg-yellow-800 hover:shadow-md hover:shadow-yellow-950"
              >
                {userdata.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
