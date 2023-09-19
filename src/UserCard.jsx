// Ändra filnamn till .tsx

// interface IUserCard {
//   user: {
//     name: string,
//     email: string,
//     phone: string,
//   }
// }

function UserCard({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserCard;
