import ErrorImg from "@/assets/images/404-error.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={ErrorImg}
        width={1000}
        alt="error_image"
        style={{ display: "flex", margin: "50px auto" }}
      />

      <Link href="/">
        <button class="btn btn-info">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
