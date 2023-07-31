import { useRouter } from "next/router";

const CatagoryDetailsPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Category details page : {router.query.categoryId}</h1>
    </div>
  );
};

export default CatagoryDetailsPage;
