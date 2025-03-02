/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
export default function Books () {
    return  <div className="Books">
        <h1>Books Available</h1>
    </div>
}
const books = [
    {
    title: 'The Maze Runner',
    rating:4.7,
    year:2009,
    Publisher: 'DelacrotePress',
    },

    {
        title: 'The Hunger Games',
        rating:4.7,
        year:2008,
        Publisher: 'Scholastic',
    },

    {
        title: 'The Giver',
        rating:4.2,
        year:1993,
        Publisher: 'HoughtonMifflin',
    },

    {
        title: 'Harry Potter',
        rating:4.5,
        year:1997,
        Publisher:'Scholastic',
    },

    ];
    function App() {
        return(
            <>
            <NavBar />
            <div className="main">Library</div>
            </>
        )
    }