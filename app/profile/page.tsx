import { auth0 } from '../../lib/auth0';
import Image from 'next/image';

export default async function Profile() {
  const session = await auth0.getSession();
  const user = session?.user;

  return (
    user && (
      <div>
        {user.picture && user.name && <Image src={user.picture} alt={user.name} width={100} height={100} />}
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
}
