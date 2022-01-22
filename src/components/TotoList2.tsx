import React, {useState} from "react";
import {ListGroup, Pagination} from "react-bootstrap";
import TodoItem from "./TodoItem";
import {useFetchTodosQuery} from "../services/todoAPI";

const TotoList2 = () => {
	const [page, setPage] = useState(1)

	const {data: todos, error, isLoading} = useFetchTodosQuery({
		_page: 1,
		_limit: 10
	})


	if (error) {
		return <div>Error occurred</div>
	}

	if (isLoading) {
		return <div>Loading...</div>
	}
	return (
		<>
			<ListGroup className={'mt-4'}>
				{
					todos && todos.map(todo => {
						return (
							<TodoItem todo={todo} key={todo.id} />
						)
					})
				}

			</ListGroup>
			<Pagination className={'mt-3'}>{
				[...Array(2)].map((i, n) => {
					return (
						<Pagination.Item onClick={() => setPage(n + 1)} key={n} active={(n + 1) === page}>
							{n + 1}
						</Pagination.Item>
					)
				})
			}</Pagination>
		</>
	)
}

export default TotoList2
