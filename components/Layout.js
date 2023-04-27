import Header from './Header'

export default  ({children}) => {
    return (
    <div>
        <Header />
        <div style={{ padding: "20px", margin: "20px", backgroundColor:"tomato"}}>{children}</div>
        <footer>
            First Next.js App
        </footer>
    </div>
    )
}
