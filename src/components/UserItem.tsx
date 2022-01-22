import {Button, ButtonGroup, ListGroup, Modal} from "react-bootstrap";
import React, {useState} from "react";
import {useActions} from "hooks/useActions";
import ItemModal from "./ItemModal";
import {User} from "types/user";

const Item = ({user}: {user: User}) => {

	const [removeModal, setRemoveModal] = useState(false);
	const [editModal, setEditModal] = useState(false);

	const {removeUser, editUser} = useActions()

	const handleRemove = async () => {
		await removeUser(user.id)
	}

	const handleEdit = async (name: string) => {
		await editUser({...user, name})
		setEditModal(false)
	}

	return <ListGroup.Item>
		<div className="d-flex align-items-center">
			{user.name}
			<ButtonGroup className={'ms-auto'} aria-label="Basic example">
				<Button onClick={() => setEditModal(true)} variant="info">Edit</Button>
				<Button onClick={() => setRemoveModal(true)} variant="danger">Remove</Button>
			</ButtonGroup>
		</div>

		<ItemModal
			show={editModal}
			setShow={setEditModal}
			title={'Edit user'}
			value={user.name}
			handleSave={handleEdit}
		/>

		<Modal show={removeModal} onHide={() => setRemoveModal(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Remove User</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<h3>Are you sure you want to remove {user.name}?</h3>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={() => setRemoveModal(false)}>Close</Button>
				<Button variant="primary" onClick={handleRemove}>Remove</Button>
			</Modal.Footer>
		</Modal>
	</ListGroup.Item>
}

export default React.memo(Item)
