import React from "react";
import Button from "../Button";

function RemoveBookBtn(props) {
    return (
        <Button type="danger" className="delete-btn" {...props} role="button" tableIndex="0">
            Delete Book
        </Button>
    )
}

export default RemoveBookBtn;