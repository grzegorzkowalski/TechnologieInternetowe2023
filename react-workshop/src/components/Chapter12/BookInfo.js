import {useState, useEffect} from "react";
const BookInfo = ({isbn}) => {
    const [book, setBook] = useState(false);

    useEffect(() => {
       fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
           .then(res => res.json())
           .then(data => console.log(data))
           .catch(err => console.warn(err))
    }, []);

    if (book) {
        return (
            <div>
                <h1>Test</h1>
            </div>
        );
    }
    else {
        return null;
    }
};

export default BookInfo;
