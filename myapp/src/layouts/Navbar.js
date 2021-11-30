

// const Navbar = ({ }) => {
const Navbar = ({ setcurrentComp }) => {
    return (
        <nav>
            {/* <a onClick={() => { console.log('Clicked Calculator') }} href="#">Calculator</a>
            <a onClick={() => { console.log('Clicked Timer') }} href="#">Timer</a>
            <a onClick={() => { console.log('Clicked Tap') }} href="#">Tap</a> */}
            <a onClick={() => { setcurrentComp('calculator') }} href="#">Calculator</a>
            <a onClick={() => { setcurrentComp('timer') }} href="#">Timer</a>
            <a onClick={() => { setcurrentComp('tap') }} href="#">Tap</a>
        </nav>
    );
}

export default Navbar;