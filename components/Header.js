import Link from "next/link";

export default () => {
    return (
    <div>
        <div>
            <Link href="/" passHref>
                Home Page
            </Link>
        </div>
        <div>
            <Link href="/about" passHref>
                About
            </Link>
        </div>
    </div>
    )
}