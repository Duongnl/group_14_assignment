'use client'

import { Card } from "react-bootstrap";
import member_css from '@/styles/member.module.css';
const Assignment3 = () => {
    return (
        <>
            <h4 className={member_css.title}>
               ABOUT US
            </h4>
            <div className={member_css.cardContainer}>
                <Card className={member_css.userCard}>
                    <Card.Img variant="top" src="/images/member8.gif" className={member_css.cardImage} />
                    <Card.Body className={member_css.cardBody}>
                        <Card.Title className={member_css.cardTitle}>Lê Ngọc Dương</Card.Title>
                        <Card.Text className={member_css.cardText}>
                            Contact
                        </Card.Text>
                        <Card.Link href={"#email"}><Card.Img variant="top" src="/images/gmail.png" className={member_css.cardImageIcon} /></Card.Link>
                            <Card.Link href={"#facebook"}><Card.Img variant="top" src="/images/facebook.png" className={member_css.cardImageIcon} /></Card.Link>
                    </Card.Body>
                </Card>
                <Card className={member_css.userCard}>
                    <Card.Img variant="top" src="/images/member5.gif" className={member_css.cardImage} />
                    <Card.Body className={member_css.cardBody}>
                        <Card.Title className={member_css.cardTitle}>Trần Quang Linh</Card.Title>
                        <Card.Text className={member_css.cardText}>
                            Contact
                        </Card.Text>
                        <Card.Link href={"#email"}><Card.Img variant="top" src="/images/gmail.png" className={member_css.cardImageIcon} /></Card.Link>
                            <Card.Link href={"#facebook"}><Card.Img variant="top" src="/images/facebook.png" className={member_css.cardImageIcon} /></Card.Link>
                    </Card.Body>
                </Card>
                <Card className={member_css.userCard}>
                    <Card.Img variant="top" src="/images/member7.gif" className={member_css.cardImage}/>
                    <Card.Body className={member_css.cardBody}>
                        <Card.Title className={member_css.cardTitle}>Hoàng Bảo Lộc</Card.Title>
                        <Card.Text className={member_css.cardText}>
                            Contact
                            
                        </Card.Text>
                        <Card.Link href={"#email"}><Card.Img variant="top" src="/images/gmail.png" className={member_css.cardImageIcon} /></Card.Link>
                            <Card.Link href={"#facebook"}><Card.Img variant="top" src="/images/facebook.png" className={member_css.cardImageIcon} /></Card.Link>
                    </Card.Body>
                </Card>
                <Card className={member_css.userCard}>
                    <Card.Img variant="top" src="/images/member6.gif" className={member_css.cardImage} />
                    <Card.Body className={member_css.cardBody}>
                        <Card.Title className={member_css.cardTitle}>Trần Đức Cường</Card.Title>
                        <Card.Text className={member_css.cardText}>
                            Contact
                        </Card.Text>
                        <Card.Link href={"#email"}><Card.Img variant="top" src="/images/gmail.png" className={member_css.cardImageIcon} /></Card.Link>
                        <Card.Link href={"#facebook"}><Card.Img variant="top" src="/images/facebook.png" className={member_css.cardImageIcon} /></Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Assignment3;