import React from 'react'
import "./APP.css"
import surat1 from "./assets/home1.png"
import surat2 from "./assets/home2.png"
import surat3 from "./assets/home3.png"
import surat4 from "./assets/img1.png"
import surat5 from "./assets/img2.png"
import surat6 from "./assets/img3.png"
import surat7 from "./assets/section5img1.png"
import surat8 from "./assets/section5img2.png"
import surat9 from "./assets/section5img3.png"
import surat10 from "./assets/Ellipse 1 (1).png"
import surat11 from "./assets/instagram-logo.png"
import surat12 from "./assets/twitter.png"
import surat13 from "./assets/facebook.png"
const App = () => {
  return (
    <div>
      <header>
        <nav>
          <h2 className='cotelsh2'>Cootels</h2>
          <ul>
            <li>Rooms</li>
            <li>Reservation</li>
            <li>Contacts</li>
          </ul>
          <button className='buttonstarted'>Get Started </button>
        </nav>
      </header>
      <main>
        <section className="section1">
          <aside className='tarafichap'>
            <div>
              <h2 className='oneha'>Nature, Warmth, and Beauty in One Space</h2>
              <p className='oneParagraph'> One place to release all the stress, bring back happines, and get back to nature. We provide the best room and nature for you. Come visit us anytime you want.</p>
              <button className='buttonstarted1'>Reservation </button>
            </div>
          </aside>
          <aside className='tarafirost'>
            <div className='imgtarafirost'>
              <img src={surat1} className='imgsurat1' />
              <img src={surat2} alt="" className='imgsurat2' />
              <img src={surat3} alt="" />
            </div>
          </aside>
        </section>
        <section className='section2'>
          <aside>
            <img src={surat4} className="surat4" alt="" />
          </aside>
          <aside className='txt1'>
            <div className='text1'>
              <h2 className='oneha1'>Cozy and Down to Earth Cootage Hotel in Norway.</h2>
              <p className='oneParagraph1'> Our Cootage Hotel is an intimate hideway concieved for dicerning travelers. It faces directly the unique and spectacular panorama of the Hallerbos Jungle.<span className='spancootels'>Cootels extends along a private, quiet, and beautiful nature. Stay away from crowd and enjoy the cozy and beauty with us.</span></p>
              <button className='buttonstarted1'>Learn More </button>
            </div>
          </aside>
        </section>
        <section className='section3'>

          <aside className='txt1'>
            <div className='text1'>
              <h2 className='oneha1'>Cabin Activities</h2>
              <p className='oneParagraph1'> Don’t worry to get bored easily in our cabin. We have so many cabin activities for you to do it alone or with group. Maybe this is the best chance for you to make new friends or even a lover.</p>
            </div>
          </aside>
          <aside>
            <img src={surat5} className="surat5" alt="" />
          </aside>
        </section>
        <section className='section4'>

          <aside>
            <img src={surat6} className="surat6" alt="" />
          </aside>
          <aside className='txt1'>
            <div className='text1'>
              <h2 className='oneha1'>100% Organic Food</h2>
              <p className='oneParagraph1'> We served 100% organic, low process and delicious food. We allow our guest to have breakfast or dinner request.What ever made your taste buds happy.</p>
            </div>
          </aside>

        </section>
        <section className='section5'>
          <div className='divrooms'>
            <h2 className='choosename'>  Many Rooms to Choose</h2>
            <p className='individualsrooms'>There is a room for every needs. We have room for individuals until family size, we also have a cabin for more private experience</p>
            <button className='exploremore'>explore more</button>
          </div>
          <div className='obsharticle'>
            <article className='article1'>
              <img src={surat7} alt="" className='surat7' />
              <div>
                <h2>Single Room</h2>
                <p className='article1p'>Best for a brave lone wolf who need comfort and quiet quality time, but you still have a chance to meet others.</p>
                <div className='learnmorediv'>
                  <p className='learnmorep'>Learn more</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>

                </div>
              </div>
            </article>
            <article className='article1'>
              <img src={surat8} alt="" className='surat7' />
              <div>
                <h2>Double Room</h2>
                <p className='article1p'>Best for couple, seek happiness in intimacy without worry of being disturbed. Feel the whole world just for you two</p>
                <div className='learnmorediv'>
                  <p className='learnmorep'>Learn more</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>

                </div>
              </div>
            </article>
            <article className='article1'>
              <img src={surat9} alt="" className='surat7' />
              <div>
                <h2>Cootage</h2>
                <p className='article1p'>Best for family or group. One cootage can fit up to 5 people. Made stronger bond with your family or friends</p>
                <div className='learnmorediv'>
                  <p className='learnmorep'>Learn more</p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>

                </div>
              </div>
            </article>
          </div>

        </section>
        <section className='section6'>
          <aside>
            <p className='journeysize'>Start your journey!</p>
            <h2 className='myroomh'>How to Get My Room?</h2>

            <p className='contactp'>You can contact us by phone or email us. Easily tap the contact button below and it will take you to our contact point</p>
            <div className='buutoncontact'>
              <button className='contactus'>Contact us</button>
              <p className='explore'>Explore more room</p>
            </div>


          </aside>
          <aside className='articlbapesh'>
            <article className='articll11'>
              <p className='articlp3'>1.Choose a room and date</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </article>
            <article className='articll12'>
              <div className='divarticll12'>
                <p className='articlp3'>2. Check for room availability</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </div>

              <p className='email'>Contact us via phone or email, ask for availability of you choice of room. We might offer you something exciting.</p>

            </article>
            <article className='articll13'>
              <p className='articlp3'>3. Enjoy your room</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>

            </article>
          </aside>
        </section>
        <section className='section8'>
          <div className='sectin8'>
            <h2 className='customer'>Hear From Our Happy Customers</h2>
            <img src={surat10} className='surat10' alt="" />
            <p className='great'>“Great service, great food, great people. The scenery is also beautiful, you can do so much activity even with your famility. Worth every penny! you should come and see for your self.  5 out of 5! the waffle is great!”</p>
            <p className='nomunasab'>Kirana Dunham</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

          </div>
        </section>
      </main>

      <footer>
        <section className='allfooter'>
          <div className='allcootelsfooter'>
            <article>
              <h2>Cootels</h2>
              <p>Your Best Private Hideway From Crowd. Back to Nature.</p>
  <div className='icondiv'>
    <img src={surat11} alt="" />
    <img src={surat12} alt="" />
    <img src={surat13} alt="" />
  </div>
            </article>

            <div className='treediv'>
              <article>
                <h1>Rooms</h1>
                <p>Single Room</p>
                <p>Double Room</p>
                <p>Cabin</p>
                <p>Custom Room</p>
              </article>
              <article>
                <h1>Reservation</h1>
                <p>See the Steps</p>
                <p>Best Time</p>
              </article>
              <article>
                <h1>Contact</h1>
                <p>Our Number</p>
                <p>Our Email</p>
                <p>Our Location</p>
              </article>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default App