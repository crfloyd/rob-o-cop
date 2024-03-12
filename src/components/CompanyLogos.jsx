import { companyLogos } from "../constants";
import { Tooltip } from "react-tooltip";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Uniting communities in the fight against digital disorder using tools
        such as
      </h5>
      <ul className="flex">
        {companyLogos.map((data, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <div className="flex flex-col items-center">
              <img src={data.image} width={124} height={25} alt={data.name} />
              <p className="text-n-1/30 text-sm">{data.name}</p>
              <Tooltip />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
