import React from "react";

function CenteredButton({ user_input }) {
  return (
    <div className="d-flex justify-content-center" style={{ marginTop: '240px', marginBottom: '60px' }}>
      <button className="btn btn-primary custom-button" type="submit">
        {user_input}
      </button>
    </div>
  );
}

export default CenteredButton;
