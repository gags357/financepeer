import React, { Component } from "react"
// import { Card, Button, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
// import { Link, useHistory } from "react-router-dom"
import axios from 'axios'

// export default function Dashboard() {
//   const [error, setError] = useState("")
//   const { currentUser, logout } = useAuth()
//   const history = useHistory()

// async function handleLogout() {
//     setError("")

//     try {
//       await logout()
//       history.push("/login")
//     } catch {
//       setError("Failed to log out")
//     }
//   }

class Upload extends Component{

    state={
        file : null
    }

    handleFile(e){
        let file = e.target.files[0]
        this.setState({file : file})
    }

    handleUpload(e){
        let file = this.state.file
        let formdata = new FormData()

        formdata.append('file',file)

        axios({
            url : '/some/api',
            method : "POST",
            headers : {
                authorization : 'token'
            },
            data : formdata
        }).then((res)=>{

        },(err)=>{

        })
    }

    render(){
        return(
            <div className="App">
                <h1>Upload File</h1>
                <form>
                    <div className="">
                        {/* <label>Select File</label><br /> */}
                        <input type="file" multiple name="file" onChange={(e)=>this.handleFile(e)} />
                    </div>
                    <br />
                    <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
                    {/* <div className="w-100 text-center mt-2">
                        <Button variant="link" onClick={handleLogout}>
                        Log Out
                        </Button>
                    </div> */}
                </form>
            </div>
        );
    }
}
export default Upload;
// import { Card, Button, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
// import { Link, useHistory } from "react-router-dom"

// export default function Dashboard() {
//   const [error, setError] = useState("")
//   const { currentUser, logout } = useAuth()
//   const history = useHistory()

//   async function handleLogout() {
//     setError("")

//     try {
//       await logout()
//       history.push("/login")
//     } catch {
//       setError("Failed to log out")
//     }
//   }

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Profile</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <strong>Email:</strong> {currentUser.email}
//           <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
//             Update Profile
//           </Link>
//         </Card.Body>
//       </Card>
    //   <div className="w-100 text-center mt-2">
    //     <Button variant="link" onClick={handleLogout}>
    //       Log Out
    //     </Button>
    //   </div>
//     </>
//   )
