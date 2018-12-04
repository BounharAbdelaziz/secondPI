import React, { Component } from 'react';
import { Grid, Cell, Footer, FooterSection, FooterLinkList, FooterDropDownSection } from 'react-mdl';
import { Link } from 'react-router-dom';

class Home extends Component{
    render() {
        return(
            <div style={{ width: '100%', margin: 'auto'}}>
               <Grid className='home-grid'>
                    <Cell col={12}>
                        <div className="hello-txt">
                            <img
                                src="https://cdn.vox-cdn.com/uploads/chorus_image/image/47848953/Candide-2.0.0.JPG"
                                alt=""
                                className="home-img" />
                        </div>
                    </Cell>

                    <Cell col={4}>
                        <div className="banner-text">
                            <h2> Our Goal :</h2>   
                            <img
                                src="https://img.icons8.com/color/180/goal.png"
                                alt=""
                                className="goal-img" />                         
                        </div>
                    </Cell>

                    <Cell col={8}>
                        <div className="banner-goal">
                            <p> 
                                You need to break the routine ?   <br/>  <br/>
                                Don't know where to spend your time and be sure that it was in the best places you can find in your city ?    <br/>  <br/>
                                You're having holidays in a new city and don't you know where to go ?    <br/>  <br/>
                                You got sick of going out to the same places everytime and you want to try something new ?      <br/>  <br/>
                                Don't worry !! Yes don't worry you're in the right place that will take you through it's collection in this website  and will help find the best place to go out to. Have fun !    <br/>  <br/>  
                            </p>    
                        </div>
                    </Cell>
                    <Cell col={12}>
                        <div className="about-section">
                            <h2> About us :</h2>
                            
                            <Grid>
                                

                                <Cell col={12}>
                                    <div className="about-text">
                                        <p>Tricky is a website that will guide you and help you find the best places where you can go through it's database.</p>
                                    </div>
                                </Cell>
                            </Grid>

                            
                            
                        </div>
                   </Cell>

               </Grid>

               

                <Footer size="mega" className="footer-section">
                    <FooterSection type="middle">
                        <FooterDropDownSection title="Navigate">
                            <FooterLinkList>
                                <Link to="/">Home</Link>
                                <Link to="/gallery">Gallery</Link>
                                <Link to="/about">About</Link>
                                <Link to="/contact">Contact</Link>
                            </FooterLinkList>
                        </FooterDropDownSection>

                        <FooterDropDownSection title="Features">
                            <FooterLinkList>
                                <a href="/">Terms</a>
                                <a href="/">Partners</a>
                                <a href="/">Updates</a>
                            </FooterLinkList>
                        </FooterDropDownSection>

                        <FooterDropDownSection title="Details">
                            <FooterLinkList>
                                <a href="/">Specs</a>
                                <a href="/">Tools</a>
                                <a href="/">Resources</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                        
                        <FooterDropDownSection title="FAQ">
                            <FooterLinkList>
                                <a href="/">Questions</a>
                                <a href="/">Answers</a>
                                <a href="/">Contact Us</a>
                            </FooterLinkList>
                        </FooterDropDownSection>
                    </FooterSection>
                    
                    <FooterSection type="bottom" logo="Tricky-2018">
                    </FooterSection>

                    <FooterSection type="bottom" logo="">
                        <FooterLinkList>
                            <p> Copyright 2018 - Tricky Team.</p>
                            <a href="/">Help</a>
                            <a href="/">Privacy & Terms</a>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </div>
        );
    }
}

export default Home;