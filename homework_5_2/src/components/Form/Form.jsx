import { Button } from "../Button";
import { Input } from "../Input";

export function Form(todoList,setData){
  const handleSumbit = (evt) => {
    evt.preventDefault();
    let { userName, userAddress } = evt.target.elements;

    let newObj = {
      id: userData.length + 1,
      name: userName.value,
      address: userAddress.value,
    };
    setData([newObj, ...userData]);
    userName.value = null;
    userAddress.value = null;
  };
    return(
  <>
       <form >
        <Input type={"text"} placeholder={"Ismingizni kiriting..."} />
        <Input type={"text"} placeholder={"Addresingizni kiriting..."} />
        <Input type={"email"} placeholder={"Emailingizni kiriting..."} />
        <Input type={"tel"} placeholder={"Nomeringizni kiriting..."} />
        <Button type={"submit"}>Submit</Button>
       </form> 
  </>
    )
}