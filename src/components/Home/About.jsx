import React from 'react'

function About() {
  return (
    <section id="about">
        <div className="row bg-first-color py-4 ps-0">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
                <div className="bg-second-color ps-4 pt-4 pb-2 overflow-hidden">
                    <img
                        className="border border-light border-bottom-0 border-end-0 border-4"
                        src="https://t3.ftcdn.net/jpg/01/26/99/36/240_F_126993611_x8qqvGxRMMZJKaNhZGi0CUUKxNj5oVOb.jpg" 
                        loading="lazy"
                        alt="about_my"
                    />
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mt-5">
                <div className="bg-second-color text-light border border-light border-top-0 border-start-0 border-4 py-2"
                    style={{letterSpacing:"0.15rem",lineHeight:"1.5rem"}}>
                    <div className="title xl-fs mt-4 mb-4">Quien soy?</div>
                    <div className="text md-fs mb-4 p-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About