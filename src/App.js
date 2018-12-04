import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content  } from 'react-mdl'
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      /* header */      
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title="Tricky" scroll>
                    <Navigation>
                        <Link to="/" className="header-lien">Home</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>

                <Drawer title="Menu">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/gallery">Gallery</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
  }
}

export default App;
