import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"><AiFillCheckCircle /> {feature}</p>
        </div>
    );
};

export default Feature;