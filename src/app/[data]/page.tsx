const DynamicUser = async (props: any) => {

  const url = await fetch(
    `https://jsonplaceholder.typicode.com/users/${props.params.data}`
  );
  const user = await url.json();

  console.log("Single User", user);

  return (
    <div className="grid items-center justify-center bg-blue-600 mx-4 sm:mx-16 md:mx-32 lg:mx-64 xl:mx-96 my-16 px-6 py-8 sm:py-12 md:py-16 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] gap-4">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-stone-950 hover:text-yellow-500 text-center">
        User Details
      </h1>

      <p className="text-lg sm:text-2xl md:text-3xl font-serif font-medium text-white">
      <strong>Id:</strong> {user.id}
        <br />
        <br />

        <strong>Name:</strong> {user.name}
        <br />
        <br />

        <strong>Username:</strong> {user.username}
        <br />
        <br />

        <strong>Email:</strong> {user.email}
        <br />
        <br />

        <strong>Address:</strong>
        {user.address?.street} ,{user.address?.suite} ,
        {user.address?.city} ,{user.address?.zipcode}
        <br />
        <br />

        <strong>Phone #:</strong> {user.phone}
        <br />
        <br />

        <strong>Website:</strong> {user.website}
        <br />
        <br />

        <strong>Company:</strong>
        {user.company?.name},{user.company?.catchPhrase},
        {user.company?.bs}
        <br />
      </p>
    </div>
  );
};
export default DynamicUser;
