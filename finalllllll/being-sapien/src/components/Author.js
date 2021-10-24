import React from "react";

function Author() {

    const click = ()=>{
        document.getElementById('name').value = ""
        document.getElementById('email').value = ""
        document.getElementById('ss').value = ""
        document.getElementById('text').value = ""
        alert("Thank you for your feedback :)")
    }

  return (
    <div style={{marginTop: "20vh"}}>
      <h1 className="text-center my-5 text-success bg-light py-3">Hi<br/>Please provide your feedback</h1>
      <div className="container bg-success py-5 px-5">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Name
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="your name"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="name"
          />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon2">
            Email
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="your email"
            aria-label="Recipient's username"
            id="email"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append"></div>
        </div>

        <label for="basic-url" className="text-light">
          If you have a found a bug
          <br />
          Send the snapshot of the bug
        </label>
        <div class="input-group mb-3 my-1">
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="ss"
            />
          </div>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">How was your experience on my website?</span>
          </div>
          <textarea class="form-control " aria-label="With textarea" id="text"></textarea>
        </div>
      <button className="btn btn-light" onClick={click}>Submit</button>
      </div>
    </div>
  );
}

export default Author;
