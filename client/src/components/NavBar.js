import React,{useState } from 'react';
import '../css/Main.css';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem, NavbarText} from 'reactstrap';
import { useAuth0 } from "@auth0/auth0-react";
// PDF pages //
import Pdf from '../pics/D&C_Defs.pdf';
import Pdf2 from '../pics/Imperatives_Defs.pdf';
// helpers to print PDF //
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default (props) => {
    const{handleShow14} = props;
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();


    // Generat PDF and save to user's computer //
    const printDocument = () => {
        const input = document.getElementById('divToPrint');
        if(window.innerWidth > 1800){
            console.log(window.innerWidth)
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const doc = new jsPDF("landscape", "mm", [500, 700]);
                                        // left margin // top margin // x-axis // y-axis //
                    doc.addImage(imgData, 'JPEG', 0, 10, 280, 145,'','FAST');
                    doc.setTextColor(100);
                    doc.text(15,130,"Notes:");
                    // if user is not logged in, apply watermark
                    // doc.setFontSize(80);
                    // doc.setTextColor(200);
                    // doc.text(40, 180, "WATERMARK", null, 50);
                    doc.save("AlignmentProject.pdf");
                });
        }
        else if(window.innerWidth >= 1350 && window.innerWidth < 1800){
            console.log(window.innerWidth)
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const doc = new jsPDF("landscape", "mm", [500, 700]);
                    doc.addImage(imgData, 'JPEG', -5, 10, 270, 140,'','FAST');
                    doc.setTextColor(100);
                    doc.text(15,135,"Notes:");
                    // if user is not logged in, apply watermark
                    // doc.setFontSize(80);
                    // doc.setTextColor(200);
                    // doc.text(40, 180, "WATERMARK", null, 50);
                    doc.save("AlignmentProject.pdf");
                });
            }
        else if(window.innerWidth >= 1110 && window.innerWidth < 1350){
            console.log(window.innerWidth)
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const doc = new jsPDF("landscape", "mm", [550, 700]);
                    doc.addImage(imgData, 'JPEG', -3, 10, 250, 145,'','FAST');
                    doc.setTextColor(100);
                    doc.text(15,130,"Notes:");
                    // if user is not logged in, apply watermark
                    // doc.setFontSize(80);
                    // doc.setTextColor(200);
                    // doc.text(40, 180, "WATERMARK", null, 50);
                    doc.save("AlignmentProject.pdf");
                });
            }
        else if(window.innerWidth >= 992 && window.innerWidth < 1110){
            console.log(window.innerWidth)
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const doc = new jsPDF("p", "mm", [650, 650]);
                    doc.addImage(imgData, 'JPEG', -5, 10, 240, 155,'','FAST');
                    doc.setTextColor(100);
                    doc.text(20,145,"Notes:");
                    // if user is not logged in, apply watermark
                    // doc.setFontSize(80);
                    // doc.setTextColor(200);
                    // doc.text(40, 180, "WATERMARK", null, 50);
                    doc.save("AlignmentProject.pdf");
                });
            }
        else{ // width less than 995 //
            console.log(window.innerWidth)
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const doc = new jsPDF("p", "mm", [400, 480]);
                    doc.addImage(imgData, 'JPEG', -5, 5, 130, 140,'','FAST');
                    doc.setTextColor(100);
                    doc.text(15,130,"Notes:");
                    // if user is not logged in, apply watermark
                    // doc.setFontSize(80);
                    // doc.setTextColor(200);
                    // doc.text(40, 180, "WATERMARK", null, 50);
                    doc.save("AlignmentProject.pdf");
                });
            }
    };

    return(
        <Navbar light expand="md" className='NavBar'>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>
                        <li className="nav-link"> </li>
                        <NavItem>
                            <NavLink href="#" onClick={handleShow14}>Demo Video</NavLink>
                        </NavItem>
                        <li className="nav-link"> </li>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                State Standards
                            </DropdownToggle>
                            <DropdownMenu left='true' style={{background:'lightgrey'}}>
                                <DropdownItem>
                                    <a href="http://www.corestandards.org/standards-in-your-state/" target = "_blank" rel="noopener noreferrer" style={{color:'black'}}>Common Core Site</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <li className="nav-link"> </li>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Icon Definitions
                            </DropdownToggle>
                            <DropdownMenu left='true' style={{background:'lightgrey'}}>
                                <DropdownItem>
                                <a href = {Pdf} target = "_blank" rel="noopener noreferrer" style={{color:'black'}}>Depth & Complexity Icon Cheat Sheet</a>
                                </DropdownItem>
                                <DropdownItem>
                                    <a href = {Pdf2} target = "_blank" rel="noopener noreferrer" style={{color:'black'}}>Content Imperative Icon Cheat Sheet</a>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <li className="nav-link"> </li>
                        {isAuthenticated
                            ?<NavItem> <NavLink href="#" onClick={printDocument}>Save as PDF</NavLink> </NavItem>
                            :<NavItem></NavItem>
                        }
                    </Nav>
                    {isAuthenticated
                        ?<><NavbarText><a href='#'><button className='btn btn-outline-danger' onClick={() => logout()}>Logout</button></a></NavbarText></>
                        :<><NavbarText><a href='#'><button className='btn btn-outline-info' onClick={() => loginWithRedirect()}>Login</button></a></NavbarText></>
                    }
                </Collapse>
            </Navbar>
    );
}