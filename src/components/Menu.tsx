import React, {useEffect} from "react";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const Menu = () => {
	return (
		<Nav
			activeKey="/home"
			onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
		>
			<Nav.Item>
				<Link className="nav-link" to="/">Users</Link>
			</Nav.Item>
			<Nav.Item>
				<Link className="nav-link" to="/todos">Todos</Link>
			</Nav.Item>
		</Nav>
	)
}

export default Menu
