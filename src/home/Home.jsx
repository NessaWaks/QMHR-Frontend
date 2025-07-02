import React from 'react'
import './Home.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'animate.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-content'>
                <h1 className="animate__animated animate__fadeInDown">Welcome to QMHR</h1>
                <h4 className="animate__animated animate__fadeInUp">FOUNDED IN FAITH, JOINED IN LOVE, RECONCILED IN GOD</h4>
            </div>
            <div className='home-cards'>
                <div>
                    <Card className='announce' style={{ width: '19rem' }}>
                        <div className='card-img'>
                            <img src="https://www.vancopayments.com/hs-fs/hubfs/Person%20speaking%20in%20loudspeaker%20concept.jpeg?width=1000&name=Person%20speaking%20in%20loudspeaker%20concept.jpeg" alt="" />
                        </div>
                        <Card.Body>
                            <Card.Title>Announcement</Card.Title>
                            <Card.Text>
                                Latest Parish Announcements
                                Stay up-to-date with Mass schedules, church events, feast days, and community notices.
                            </Card.Text>
                            <Button variant="primary"><Link className = 'Link' to = '/announcement' as = {Link}>Announcement</Link></Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <div className='card-img'>
                            <img src="https://hoffmeister.de/wp-content/uploads/2022/11/Frauenfriedenskirche_Frankfurt-am-Main.jpg" alt="" />
                        </div>
                        <Card.Body>
                            <Card.Title>Profile</Card.Title>
                            <Card.Text>
                                Your Profile
                                View or update your personal details. This helps us serve you better and keep you connected.
                            </Card.Text>
                            <Button variant="primary"><Link className = 'Link' to = '/profile' as ={Link}>Profile</Link></Button>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '18rem' }}>
                        <div className='card-img'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5jkWMrkfHNmwCyfn5OF8SusVj6eL7VYMhA&s" alt="" />
                        </div>
                        <Card.Body>
                            <Card.Title>Registration</Card.Title>
                            <Card.Text>
                                Register Now
                                Join our parish and become part of our growing Catholic family. Whether you're new or returning, we’d love to have you.
                            </Card.Text>
                            <Button variant="primary"><Link className = 'Link' to = '/registration' as ={Link}>Register</Link></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Home