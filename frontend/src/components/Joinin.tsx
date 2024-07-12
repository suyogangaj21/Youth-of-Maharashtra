import { TbPointFilled } from "react-icons/tb";

interface JoininProps{
    sentence:string;
}

const Joinin:React.FC<JoininProps> = ({
    sentence
}) => {
  return (
    <div className="flex  items-start text-neutral-500 ">
        <TbPointFilled className="mt-1" /> 
        <p>{sentence}</p>
      
    </div>
  )
}

export default Joinin
