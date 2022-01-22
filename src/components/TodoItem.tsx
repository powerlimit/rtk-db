import {Button, ButtonGroup, ListGroup, Modal} from "react-bootstrap";
import React, {useState} from "react";
import ItemModal from "./ItemModal";
import {Todo} from "types/todo";
import {useEditTodosMutation, useRemoveTodosMutation} from "../services/todoAPI";

const Item = ({todo}: {todo: Todo}) => {

	const [removeModal, setRemoveModal] = useState(false);
	const [editModal, setEditModal] = useState(false);

	const [removeTodo] = useRemoveTodosMutation()
	const [editTodo] = useEditTodosMutation()

	const handleRemove = async () => {
		await removeTodo(todo.id)
	}

	const handleComplete = async () => {
		await editTodo({...todo, completed: !todo.completed})
	}

	const handleEdit = async (title: string) => {
		await editTodo({...todo, title})
		setEditModal(false)
	}

	return <ListGroup.Item variant={todo.completed ? 'success' : undefined}>
		<div className="d-flex align-items-center">
			{todo.title}
			<ButtonGroup className={'ms-auto'} aria-label="Basic example">
				<Button onClick={() => setEditModal(true)} variant="info">Edit</Button>
				<Button onClick={() => handleComplete()} variant="secondary">Complete</Button>
				<Button onClick={() => setRemoveModal(true)} variant="danger">Remove</Button>
			</ButtonGroup>
		</div>

		<ItemModal
			show={editModal}
			setShow={setEditModal}
			title={'Edit todo'}
			value={todo.title}
			handleSave={handleEdit}
		/>

		<Modal show={removeModal} onHide={() => setRemoveModal(false)}>
			<Modal.Header closeButton>
				<Modal.Title>Remove Todo</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<h3>Are you sure you want to remove {todo.title}?</h3>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={() => setRemoveModal(false)}>Close</Button>
				<Button variant="primary" onClick={handleRemove}>Remove</Button>
			</Modal.Footer>
		</Modal>
	</ListGroup.Item>
}

export default React.memo(Item)
