import ListItem from "./ListItem";

const Content = () => {

    const chores = ["Item 1", "Item 2", "Item 3", "Item 4"]

    return (
        <div className="container">
            <ul>
                {
                    // chores.forEach(chore => <li>{chore}</li>)
                    // forEach cannot return anything 
                    chores.map(chore => <ListItem />)
                }

            </ul>



        </div>
    );
}

export default Content;