import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div className="flex justify-center items-center">
      <img src="/images/404-error.jpg" alt="" width={"65%"} />
    </div>
  );
};

export default NotFoundPage;
