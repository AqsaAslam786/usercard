interface CardProps {
  name: string;
  image: string;
  age: number;
  email: string;
}

const Card = ({ name, image, age, email }: CardProps) => {
  return (
    <div className="bg-white w-80 h-110 shadow-2xl flex flex-col gap-5 rounded-2xl">
      <h1>{name}</h1>
      <img className="rounded-full size-" src={image} alt={name} />
      <p>My Age: {age}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Card;