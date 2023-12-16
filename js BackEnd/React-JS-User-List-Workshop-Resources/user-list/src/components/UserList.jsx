import Search from "./Search";
import UserListTable from "./UserListTable";

const UserList = () => {
    return (
        // < !--Section component-- >
        <section className="card users-container">
            <Search />

            <UserListTable />


           

        </section>
    );
}

export default UserList