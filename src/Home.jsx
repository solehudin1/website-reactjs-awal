import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { homeSection } from './data/HomeSection';
import { CoursesSection } from './data/CoursesSection';
import { TutorsSection, TutorsList } from './data/TutorsSection';
import { partnersSection, partnersList } from './data/PartnersSection';
import { ContactSection } from './data/ContactSection';
import Tutors from './components/Tutors';
import Partners from './components/Partners';
import Contact from './components/Contact';
import parse from 'html-react-parser';

function Home() {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        {/* Home Section */}
        <section id="home">
          <img src={homeSection.Image} alt="Home Section" />
          <div className="kolom">
            {parse(homeSection.content)}
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses">
          <div className="kolom">
            {parse(CoursesSection.content)}
          </div>
          <img src={CoursesSection.image} alt="Courses Section" />
        </section>

        {/* Tutors Section */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">
              {parse(TutorsSection.content)}
            </div>
            <Tutors TutorsList={TutorsList} />
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">
              {parse(partnersSection.content)}
            </div>
            <Partners partnersList={partnersList} />
          </div>
        </section>

        {/* Contact */}
      <Contact ContactSection={ContactSection}/>
      </div>

      <Footer />
    </>
  );
}

export default Home;
