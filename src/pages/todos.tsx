import React, {useState} from "react";
import {Button} from "react-bootstrap";
import Layout from "components/Layout";
import ItemModal from "../components/ItemModal";
import {Todo} from "../types/todo";
import TodoList from '../components/TotoList'
import {useAddTodosMutation} from "../services/todoAPI";

const Index = () => {

	const [addTodo, {isLoading, error}] = useAddTodosMutation()
	const [showModal, setShowModal] = useState(false);

	const handleAdd = async (title: string) => {
		const newTodo = {
			title,
			completed: false,
		} as Todo

		await addTodo(newTodo)
		setShowModal(false)
	}
	return (
		<Layout>
			<h1 className="h1 mb-4">Todos</h1>
			{error && <div>Error occurred</div>}
			<Button variant="primary" onClick={() => setShowModal(true)}>Add Todo</Button>
			<div className="row">
				<div className="col-6"><TodoList /></div>
				<div className="col-6"><TodoList /></div>
			</div>
			<ItemModal
				show={showModal}
				setShow={setShowModal}
				title={'Add Todo'}
				isLoading={isLoading}
				handleSave={handleAdd}
			/>
		</Layout>
	)
}

export default Index
