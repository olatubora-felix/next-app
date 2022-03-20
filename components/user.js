import Link from 'next/link';

const user = ({user}) => {
  return (
    <div>
      <Link href={`/users/${user.id}`}>
       <a>
         <h2>{user.name}</h2>
         <h4>{user.email}</h4>
       </a>
    </Link>
  </div>
  )
}

export default user