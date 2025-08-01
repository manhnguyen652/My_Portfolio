// src/components/RightNavbar/RightNavbar.js
import React, { useState } from "react";
import { Nav, Button, Offcanvas } from "react-bootstrap";
import {
  IoHomeOutline,
  IoStatsChart,
  IoDocumentTextOutline,
  IoPersonOutline,
  IoChatbubbleEllipsesOutline,
  IoMailOutline,
  IoGridOutline,
} from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";

const RightNavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // --- NỘI DUNG CHO DESKTOP (CHỈ ICON) ---
  const desktopNavContent = (
    <Nav defaultActiveKey="#grid" className="flex-column">
      <Nav.Link href="#grid" className="nav-icon-custom">
        <IoGridOutline />
      </Nav.Link>
      <Nav.Link href="#home" className="nav-icon-custom">
        <IoHomeOutline />
      </Nav.Link>
      <Nav.Link href="#stats" className="nav-icon-custom">
        <IoStatsChart />
      </Nav.Link>
      <Nav.Link href="#docs" className="nav-icon-custom">
        <IoDocumentTextOutline />
      </Nav.Link>
      <Nav.Link href="#person" className="nav-icon-custom">
        <IoPersonOutline />
      </Nav.Link>
      <Nav.Link href="#chat" className="nav-icon-custom">
        <IoChatbubbleEllipsesOutline />
      </Nav.Link>
      <Nav.Link href="#mail" className="nav-icon-custom">
        <IoMailOutline />
      </Nav.Link>
    </Nav>
  );

  // --- NỘI DUNG CHO OFFCANVAS (ICON + TÊN) ---
  const mobileNavContent = (
    <Nav defaultActiveKey="#grid" className="flex-column">
      <Nav.Link
        href="#grid"
        className="nav-item-offcanvas"
        onClick={handleClose}
      >
        <IoGridOutline /> <span>Dashboard</span>
      </Nav.Link>
      <Nav.Link
        href="#home"
        className="nav-item-offcanvas"
        onClick={handleClose}
      >
        <IoHomeOutline /> <span>Home</span>
      </Nav.Link>
      <Nav.Link
        href="#stats"
        className="nav-item-offcanvas"
        onClick={handleClose}
      >
        <IoStatsChart /> <span>Analytics</span>
      </Nav.Link>
      <Nav.Link
        href="#docs"
        className="nav-item-offcanvas"
        onClick={handleClose}
      >
        <IoDocumentTextOutline /> <span>Projects</span>
      </Nav.Link>
      <Nav.Link
        href="#person"
        className="nav-item-offcanvas"
        onClick={handleClose}
      >
        <IoPersonOutline /> <span>About</span>
      </Nav.Link>
      <Nav.Link
        href="#chat"
        className="nav-item-offcanvas"
        onClick={handleClose}
      >
        <IoChatbubbleEllipsesOutline /> <span>Testimonials</span>
      </Nav.Link>
      <Nav.Link
        href="#mail"
        className="nav-item-offcanvas"
        onClick={handleClose}
      >
        <IoMailOutline /> <span>Contact</span>
      </Nav.Link>
    </Nav>
  );

  return (
    <>
      {/* Giao diện Desktop */}
      <div className="d-none d-lg-block right-navbar-custom">
        {desktopNavContent}
      </div>

      {/* Nút bấm trên Mobile */}
      {!show && (
        <div className="d-lg-none text-center">
          <Button onClick={handleShow} className="menu-button-custom">
            <RiMenu3Fill />
          </Button>
        </div>
      )}
      {/* Panel Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="offcanvas-custom"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{mobileNavContent}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default RightNavbar;
