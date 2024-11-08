'use client'
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import user_css from '@/styles/user.module.css';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

const Assignment5 = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Hàm fetch API để lấy danh sách người dùng
        const fetchData = async () => {
            const response = await fetch('https://reqres.in/api/users?page=2'); // Lấy tất cả user từ trang 2
            const data = await response.json();
            setUsers(data.data); // Lưu danh sách user vào state
        };

        fetchData();
    }, []);

    if (!users) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <h4 className={user_css.title}>
                Get API User
            </h4>
            <div className={user_css.cardContainer}>

                {users.map((user) => (
                    <Card key={user.id} className={user_css.userCard}>
                        <Card.Img variant="top" src={user.avatar} className={user_css.cardImage} />
                        <Card.Body>
                            <Card.Title className={user_css.cardTitle}>ID: {user.id}</Card.Title>
                            <Card.Text className={user_css.cardText}>Full name: {user.first_name} {user.last_name}</Card.Text>
                            <Card.Text className={user_css.cardText}>Email: {user.email}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}

            </div>
        </>


    );
}

export default Assignment5