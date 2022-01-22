import React, {useEffect, useState} from "react";
import {Button, ListGroup} from "react-bootstrap";
import {useTypedSelector} from "hooks/useTypedSelector";
import {useActions} from "hooks/useActions";
import Layout from "components/Layout";
import ItemModal from "components/ItemModal";
import UserItem from "components/UserItem";
import PaginationComponent from "components/Pagination";

const Users = () => {

	const [showModal, setShowModal] = useState(false);
	const {error, loading, users, page} = useTypedSelector(state => state.user)
	const {fetchUsers, addUser} = useActions()

	useEffect(() => {
		fetchUsers(page)
	}, [page]);

	return (
		<Layout>
			<h1 className="h1 mb-4">Users</h1>
			<Button variant="primary" onClick={() => setShowModal(true)}>Add user</Button>
			{
				loading ? <div>Loading...</div> :
					error ? <div>{error}</div> :
					<ListGroup className={'mt-4'}>
						{users.map(user => <UserItem key={user.name} user={user}/>)}
					</ListGroup>
			}
			<PaginationComponent />
			<ItemModal
				show={showModal}
				setShow={setShowModal}
				title={'Add user'}
				handleSave={addUser}
			/>
		</Layout>
	)
}

export default Users
