import { React, useState } from "react";
import { db } from "../firebase"
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";


function Data(props) {

    const [report, setreport] = useState({animal:"", name:"", info:"", location:"", email: props.email})

    const onChange = (e)=>{
        setreport({...report, [e.target.name]: e.target.value})
    }
  
    const click = async (e)=>{
      e.preventDefault()
      const animal = document.getElementById('name').value
      await addDoc(collection(db, "reports"), {...report})
      console.log(report)
      document.getElementById('name').value = ''
      document.getElementById('info').value = ''
      document.getElementById('animal').value = ''
      document.getElementById('location').value = ''
    }

  return (
    <div
      style={{
        marginTop: "15vh",
        display: 'flex',
        flexDirection: "column"
      }}
    >

      <button
        type="button"
        class="btn btn-success text-light text-center my-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{
          width: "30%",
          margin: "auto"
        }}
      >
        Report animal
      </button>

      <h1 className="search__badge text-center">
            <span
          className="badge bg-light my-3"
          style={{
            color: "rgb(4, 204, 4)", 
          }}
        >
            or help any of these animals
        </span>
      </h1>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Fill this form
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "rgb(4, 204, 2)",
                      color: "white",
                    }}
                  >
                    Full Name
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter your name"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    id="name"
                    name="name"
                    onChange={onChange}
                  />
                </div>
                <div className="input-group mb-3">
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="basic-addon2"
                    style={{
                      backgroundColor: "rgb(4, 204, 2)",
                      color: "white",
                    }}
                  >
                    Type of animal
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="dog/cat/cow etc..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    id="animal"
                    name="animal"
                    onChange={onChange}
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "rgb(4, 204, 2)",
                      color: "white",
                    }}
                  >
                    Location
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    placeholder="enter location of animal"
                    name="location"
                    id="location"
                    onChange={onChange}
                  />
                </div>
                <div className="input-group">
                  <span
                    className="input-group-text"
                    style={{
                      backgroundColor: "rgb(4, 204, 2)",
                      color: "white",
                    }}
                  >
                    Aid needed and info
                  </span>
                  <textarea
                    className="form-control"
                    placeholder="identification on animal if any or any specific item required"
                    aria-label="With textarea"
                    name="info"
                    id="info"
                    onChange={onChange}
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer">
                <h6 style={{
                    marginRight: '4vw'
                }}>
                    {props.email}
                </h6>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" data-bs-dismiss="modal" class="btn btn-success text-light" onClick={click}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
