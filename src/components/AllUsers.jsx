import { Table, TableBody, TableCell, TableHead, TableRow ,styled,Button} from "@mui/material";
import { useEffect,useState} from "react";
import { Link } from "react-router-dom";

import { getUsers } from "../service/api";
import { deleteUser } from "../service/api";

const NewTable = styled(Table)`
  width : 70%;
  margin : 50px auto 0 auto;
`

const Thead = styled(TableRow)`
  background : #000;
  & > th {
    color : #fff;
    font-size : 20px;
  }
  `

  const Tbody = styled(TableRow)`
  & > td {
    font-size : 16px;
  }
  `

const AllUsers = () => {
  const [users,setUsers ] = useState([]);
 
  useEffect(()=>{
    getUserDetails();
  },[])

  const getUserDetails = async () => {
    let result = await getUsers();
    setUsers(result.data)
  }

  const deleteUserData = async(id)=>{
    await deleteUser(id);
    getUserDetails();
  }

  return (
    <NewTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>NAME</TableCell>
          <TableCell>USERNAME</TableCell>
          <TableCell>EMAIL</TableCell>
          <TableCell>PHONE</TableCell>
          <TableCell></TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {
          users.map(user =>(
            <Tbody>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                <Button variant="contained" color="secondary" onClick={() => deleteUserData(user.id)}>Delete</Button>
              </TableCell>
            </Tbody>
          ))
        }
      </TableBody>
    </NewTable>
  )
}

export default AllUsers;