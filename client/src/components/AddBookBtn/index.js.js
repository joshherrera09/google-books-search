import React from "react";
import Button from "../Button";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from "react-toastify";

class AddBookBtn extends React.Component{
    postToDB = (book) => {
        var dbBook = {
            title: book.title,
            authors: book.authors,
            sunopsis: book.synopsis,
            thumbnail: book.thumbnail,
            link: book.link
        }

        axios.post("/api/books", dbBook)
        .then(() => toast.success(`${book.title} was added to your saved books!`))
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={() => {this.postToDB(this.props)}}>Save Book</Button>
            </div>
        )
    }
}

export default AddBookBtn;