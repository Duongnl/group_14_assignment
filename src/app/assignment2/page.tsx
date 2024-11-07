import Link from 'next/link';

const Assignment2 = () => {
    return (
        <div>
      <h1>Welcome to Our Website</h1>
      <nav>
        <Link href="/assignment2/about">About Us</Link> | 
        <Link href="/assignment2/contact">Contact Us</Link>
      </nav>
    </div>
    )
}

export default Assignment2