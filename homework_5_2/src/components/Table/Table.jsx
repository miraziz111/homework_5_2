import { TableBody } from "../TableBody"
import { TableHead } from "../TableHead"
import "./Table.css"
export function Table({ todoList,removeUser }) {
	return (
	<div className="container">
			<table >
			<TableHead/>
			<TableBody todoList={todoList} removeUser={removeUser}/>
			</table>
					</div>
		
	)
}


