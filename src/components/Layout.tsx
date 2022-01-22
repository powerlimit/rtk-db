import React, {FC} from "react";
import Menu from "./Menu";
import {Container} from "react-bootstrap";

const Layout: FC = ({children}) => {

	return (
		<div>
			<Menu/>
			<Container className={'pt-5'}>
				{children}
			</Container>
		</div>
	)
}

export default Layout
