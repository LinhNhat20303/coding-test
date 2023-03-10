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
              <input required type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label className="text">Day of Birth:</label>
              <input required type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label className="text">Email:</label>
              <input required type="email" className="form-control" />
            </div>
            <div className="form-group">
              <label className="text">Phone:</label>
              <input required type="email" className="form-control" />
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
