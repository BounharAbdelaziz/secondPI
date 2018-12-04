import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Footer, FooterSection, FooterLinkList, FooterDropDownSection } from 'react-mdl';

import { Link } from 'react-router-dom';

const card = (props) => (
    <Card shadow={5} style={{minWidth: '320px', margin:'auto'}}>
        <CardTitle style={{ color:'#fff', 
                            height:'176px', 
                            background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_gasipzlslVtNT6fSp7cvKA4XdQx8KfLOuVVZ0dmv-HWC621PQ) center / cover'
                        }}>
                        Shopping
        </CardTitle>

        <CardText>
            You wanna go shopping ? Come over here and discover the best places to go ! 
        </CardText>

        <CardActions border>
            <Button colored> Learn more..</Button>
        </CardActions>

        <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
        </CardMenu>
    </Card>
)


class Gallery extends Component{

    // constructeur

    constructor(props){
        super(props);
        this.state = { activeTab : 0};
    }

    // toggleCategories () permet de filtrer les categories 

    toggleCategories(){
        if (this.state.activeTab === 0){
            return(                
                <div className="allCategories-grid">
                    <Grid>
                        {/* debut */}
                            {/* Restaurant */}
                            <Cell col={4}>                            
                                <Card shadow={5} style={{minWidth: '320px',  margin:'auto'}} expand>
                                    <CardTitle style={{ color:'#fff', 
                                                        height:'176px', 
                                                        background:'url(http://www.detainee063.com/wp-content/uploads/2015/08/elegant-kitchen-restaurant-ideas-long-rectangle-abc-kitchen-open-table-wooden-dark-brown-ceiling-ideas-wooden-kitchen-chairs-leather-cushion-grey-large-tile-flooring.jpg) center / cover'
                                                    }}>
                                                    Restaurant
                                    </CardTitle>

                                    <CardText>
                                        You wanna pass a wonderfull moment with your family while eating to best food ? Come over here and discover the best places to go ! 
                                    </CardText>

                                    <CardActions border>
                                        <Button colored> Learn more..</Button>
                                    </CardActions>

                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>
                            </Cell>

                            
                            
                                {/* Cinema */}
                                <Card shadow={5} style={{minWidth: '320px',  margin:'auto'}} expand>
                                    <CardTitle style={{ color:'#fff', 
                                                        height:'176px', 
                                                        background:'url(http://www.yankodesign.com/images/design_news/2008/06/30/multikino.jpg) center / cover'
                                                    }}>
                                                    Cinema
                                    </CardTitle>

                                    <CardText>
                                        You wanna watch a film in a cinema ? Come over here and discover the best places to go ! 
                                    </CardText>

                                    <CardActions border>
                                        <Button colored> Learn more..</Button>
                                    </CardActions>

                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>
                            


                            {/* shopping */}                            
                            <Cell col={4}>
                                
                                <Card shadow={5} style={{minWidth: '320px', margin:'auto'}}>
                                    <CardTitle style={{ color:'#fff', 
                                                        height:'176px', 
                                                        background:'url(https://d18lkz4dllo6v2.cloudfront.net/cumulus_uploads/entry/2014-10-23/Dubai%20Malls.jpg?w=660) center / cover'
                                                    }}>
                                                    Shopping
                                    </CardTitle>

                                    <CardText>
                                        You wanna go shopping ? Come over here and discover the best places to go ! 
                                    </CardText>

                                    <CardActions border>
                                        <Button colored> Learn more..</Button>
                                    </CardActions>

                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>

                            </Cell>
                        {/* fin multiple de 3 */}
                        

                        {/* debut */}
                            {/* GYM-FITNESS */}
                            <Card shadow={5} style={{minWidth: '320px', margin:'auto'}} expand>
                                <CardTitle style={{ color:'#fff', 
                                                    height:'176px', 
                                                    background:'url(https://risherco.com/wp-content/uploads/2013/05/Chase-Tower_all-photos_Page_02.jpg) center / cover'
                                                }}>
                                                GYM-FITNESS
                                </CardTitle>

                                <CardText>
                                    You wanna get that shape that will make you feel better ? Come over here and discover the best places to go ! 
                                </CardText>

                                <CardActions border>
                                    <Button colored> Learn more..</Button>
                                </CardActions>

                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>

                            {/* Hotels */}                            
                            <Cell col={4}>                            
                                <Card shadow={5} style={{minWidth: '320px', margin:'auto'}}>
                                    <CardTitle style={{ color:'#fff', 
                                                        height:'176px', 
                                                        background:'url(https://www.hospitalitynet.org/picture/153036639.jpg?v=1308320391) center / cover'
                                                    }}>
                                                    Hotels
                                    </CardTitle>

                                    <CardText>
                                        You wanna pass a wonderfull journey ? Come over here and discover the best places to go ! 
                                    </CardText>

                                    <CardActions border>
                                        <Button colored> Learn more..</Button>
                                    </CardActions>

                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>
                            </Cell>

                            {/* SPA */}       
                            <Card shadow={5} style={{minWidth: '320px', margin:'auto'}}>
                                <CardTitle style={{ color:'#fff', 
                                                    height:'176px', 
                                                    background:'url(http://www.dayoutinlondon.com/wp-content/uploads/2017/01/best-hotels-with-a-spa-in-london.jpg) center / cover'
                                                }}>
                                                SPA
                                </CardTitle>

                                <CardText>
                                You wanna get warm and have that bath that will change your mindset and make you feel better  ? Come over here and discover the best places to go ! 
                                </CardText>

                                <CardActions border>
                                    <Button colored> Learn more..</Button>
                                </CardActions>

                                <CardMenu style={{color: '#fff'}}>
                                    <IconButton name="share" />
                                </CardMenu>
                            </Card>
                        {/* fin multiple de 3 */}

                        {/* debut */}                                             
                            {/* GYM-FITNESS */}
                            <Cell col={4}>  
                                <Card shadow={5} style={{minWidth: '320px', margin:'auto'}} expand>
                                    <CardTitle style={{ color:'#fff', 
                                                        height:'176px', 
                                                        background:'url(https://risherco.com/wp-content/uploads/2013/05/Chase-Tower_all-photos_Page_02.jpg) center / cover'
                                                    }}>
                                                    GYM-FITNESS
                                    </CardTitle>

                                    <CardText>
                                        You wanna get that shape that will make you feel better ? Come over here and discover the best places to go ! 
                                    </CardText>

                                    <CardActions border>
                                        <Button colored> Learn more..</Button>
                                    </CardActions>

                                    <CardMenu style={{color: '#fff'}}>
                                        <IconButton name="share" />
                                    </CardMenu>
                                </Card>
                            </Cell>
                        
                    </Grid>

                  

                </div>   
            )
        }
        else if (this.state.activeTab === 1){
            return(
                <div className="gallery-grid">
                
                        Restaurant



                </div>
            )
        }
        else if (this.state.activeTab === 2){
            return(
                <div className="gallery-grid"> 
                    {/* SPA */}
                    <Card shadow={5} style={{minWidth: '320px', margin:'auto'}}>
                        <CardTitle style={{ color:'#fff', 
                                            height:'176px', 
                                            background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_gasipzlslVtNT6fSp7cvKA4XdQx8KfLOuVVZ0dmv-HWC621PQ) center / cover'
                                        }}>
                                        SPA
                        </CardTitle>

                        <CardText>
                            You wanna get warm and have that bath that will change your mindset and make you feel better ? Come over here and discover the best places to go ! 
                        </CardText>

                        <CardActions border>
                            <Button colored> Learn more..</Button>
                        </CardActions>

                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 3){
            return(
                <div className="gallery-grid">

                    <card />

                </div>
            )
        }
        else if (this.state.activeTab === 4){
            return(
                <div> <h4>SPA</h4> </div>
            )
        }
        else if (this.state.activeTab === 5){
            return(
                <div> <h4>Hotels</h4> </div>
            )
        }
        else if (this.state.activeTab === 6){
            return(
                <div> <h4>Gym</h4> </div>
            )
        }
        else if (this.state.activeTab === 7){
            return(
                <div> <h4>Shopping</h4> </div>
            )
        }
        
        
    }

    render() {
        return(
            <div className="gallery-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>All</Tab>
                    <Tab>Cafe</Tab>
                    <Tab>Restaurant</Tab>
                    <Tab>Cinema</Tab>
                    <Tab>SPa</Tab>                    
                    <Tab>Hotels</Tab>
                    <Tab>Gym-Fitness</Tab>   
                    <Tab>Shopping</Tab>
                </Tabs>
            
           
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()} </div>
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

export default Gallery;