type Prop = {
  name: string;
};

const Card = ({ name }: Prop) => {
  return (
    <div className="border flex justify-center rounded-lg px-2 sm:px-4 py-2">
      <h1 className="md:text-base text-xs">{name}</h1>
    </div>
  );
};

export default Card;
