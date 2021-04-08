import React from "react";
import PropTypes from "prop-types";

const NewItem = ({ newValue, id, deleteClick }) => {
  return (
    <section className="d_flex justify__between new_item">
      <p>{newValue}</p>
      <button onClick={() => deleteClick(id)} className="btn btn-primary">
        DELETE
      </button>
    </section>
  );
};

NewItem.propTypes = {
  newValue: PropTypes.string,
  deleteClick: PropTypes.func,
};

NewItem.defaultProps = {
  newValue: "",
  deleteClick: () => {},
};

export default NewItem;
