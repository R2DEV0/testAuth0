import React,{useState} from 'react';
import '../css/Main.css';
import { register } from '../components/UserFunctions';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,NavLink} from 'reactstrap';
// Add-ons //
import Fade from 'react-reveal/Fade';
// components //
import Footer from '../components/Footer';



export default () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
            password: password
        }
            register(newUser).then(res => {
            this.props.history.push(`/`)
            })
    };

    return(
        <div>
            <Navbar light expand="md" className='NavBar'>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">J Taylor Education</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <div className='container'>
                <div className='col-sm-12 text-center mt-4' data-html2canvas-ignore="true">
                    <Fade left><h1 className='MainTitle'> Depth & Complexity </h1></Fade>
                    <Fade right><h4 className='SecTitle'>Alignment Project</h4></Fade>
                </div>

                <div>
                    <form onSubmit={onSubmit} className='col-sm-6 offset-3 mt-5 form' style={{backgroundColor:'lightgray', padding:'20px', borderRadius:'5px'}}>
                        <div className='form-group'>
                            <input type="text" className='form-control' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <input type="text" className='form-control' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className='form-group'>
                            <input type="password" className='form-control' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className='col-sm-6 offset-3 btn btn-primary'>Login</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}