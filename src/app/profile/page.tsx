import { getServerSession } from "next-auth";
import { authConfig } from "../../../configs/auth";
import Image from "next/image";



export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <><div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <Image src={session.user.image} width={200} height={200} alt="alt" />}
    </div></>
  );
}
