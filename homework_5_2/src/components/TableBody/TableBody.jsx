import { Button } from "../Button"

export function TableBody ({todoList,removeUser}){
  return(
    <tbody>
					{
						todoList.map((todo, index) => {
							return (
								<tr key={index}>
									<td><input type="checkbox"/></td>
									<td>{todo.name}</td>
									<td>{todo.address}</td>
									<td>{todo.email}</td>
									<td>{todo.tel}</td>
                  <td>
                    <Button index={index} removeUser={removeUser} children={"Delete"}/>
                  </td>
								</tr>
							)
						})
					}
				</tbody>
  )
}