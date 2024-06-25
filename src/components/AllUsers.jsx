import { Table, TableBody, TableCell, TableHead, TableRow ,styled} from "@mui/material";
import { useEffect,useState} from "react";
import { getUsers } from "../service/api";

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
    font-size : 20px;
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



  return (
    <NewTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>NAME</TableCell>
          <TableCell>USERNAME</TableCell>
          <TableCell>EMAIL</TableCell>
          <TableCell>PHONE</TableCell>
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
            </Tbody>
          ))
        }
      </TableBody>
    </NewTable>
  )
}

export default AllUsers;