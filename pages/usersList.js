
import User from '../components/user';

const usersList = ({users}) => {
  return (
   <>
     <h1>User List</h1>
     {
       users.map((user, index) => (
        <User user={user} key={index}/>
       ))
     }
   </>

  )
}

export default usersList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props:{
      users:data
    }
  }
}