const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com"
        }
    }
};

const extractData = ({ data }) => {
    const { title, author } = data;
    const { name: authorName, email: authorEmail } = author;

    console.log("Tieu de: " + title);
    console.log("Tac gia: " + author);
    console.log("Ten tac gia: " + authorName);
    console.log("Email tac gia: " + authorEmail);
};

extractData(response);
