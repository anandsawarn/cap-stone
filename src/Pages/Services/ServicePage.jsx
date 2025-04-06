import { useParams } from "react-router-dom";

const ServicePage = () => {
  const { serviceName } = useParams(); // Get service name from URL

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold capitalize">
        {serviceName.replace("-", " ")} Services
      </h1>
      <p>Welcome to the {serviceName.replace("-", " ")} service page.</p>

    </div>
  );
};

export default ServicePage;
