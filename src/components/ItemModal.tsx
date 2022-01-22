import React, {SetStateAction, Dispatch, useState} from "react";
import {Button, Modal} from "react-bootstrap";

interface IProps {
	show: boolean
	setShow: Dispatch<SetStateAction<boolean>>
	title: string
	handleSave: (_: string) => void
	value?: string
	isLoading?: boolean
}

const ItemModal = ({show, setShow, title, handleSave, value, isLoading}: IProps) => {

	const [val, setVal] = useState(value || '')

	return (
		<Modal show={show} onHide={() => setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<input
					value={val}
					onChange={(e: React.FormEvent<HTMLInputElement>) => setVal(e.currentTarget.value)}
					type="text"
					placeholder={title}
					className="form-control"
				/>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
				<Button disabled={isLoading} variant="primary" onClick={() => {
					handleSave(val)
					setShow(false)
					setVal('')
				}}>Save changes</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default ItemModal