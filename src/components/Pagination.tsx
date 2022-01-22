import {Pagination} from "react-bootstrap";
import React from "react";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const PaginationComponent = () => {

	const {setPage} = useActions()
	const {page} = useTypedSelector(state => state.user)

	return (
		<Pagination className={'mt-3'}>{
			[...Array(2)].map((i, n) => {
				return (
					<Pagination.Item onClick={() => setPage(n + 1)} key={n} active={(n + 1) === page}>
						{n + 1}
					</Pagination.Item>
				)
			})
		}</Pagination>
	)
}

export default PaginationComponent
