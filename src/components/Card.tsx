interface CardProps{
    name:string;
    image:string;
    age:number;
    email:string;
}

const Card = ({name, image, age, email}:CardProps) => {
  return 
  <div>
    <h1>{name}</h1>
    <img src={image} alt="" />
    <p>My Age:{age}</p>
    <p>Email:{email}</p>

  </div>
};

export default Card
