import React from "react";


export default function Form() {
  return (
    <div>
      <div className="Auth-form-container">
        <form className="profile-form">
          <div className="profile-form-content">
            <h3 className="">Profile</h3>
            <div className="form-group">
              <label className="text">Full Name:</label>
              <input
                pattern="/^[a-z ,.'-]+$/i"
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="text">Day of Birth:</label>
              <input
                required
                className="form-control"
                pattern="/^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/"
              />
            </div>
            <div className="form-group">
              <label className="text">Email:</label>
              <input required type="email" a className="form-control" />
            </div>
            <div className="form-group">
              <label className="text">Phone:</label>
              <input
                pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
                required
                className="form-control"
              />
            </div>
            <div className="profile-button">
              <button type="submit" className="update-button">
                Update
              </button>
              <button type="submit" className="cancel-button">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
