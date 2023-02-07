import React, { Component } from "react";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

const styles = {
    footer: {
        display: 'inline-flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: '5px'
      },
    icons: {
        fontSize: '60px',
        margin: '0 10'
    },
    container: {
        justifyContent: 'center'
    },
    aTag: {
        color: '#ffffff'
    }
}

class Footer extends Component {
  render() {
    return (
      <footer style={styles.footer} className="page-footer grey darken-2">
        <div style={styles.container}>
          <a style={styles.aTag} href="https://github.com/cujion" target='_blank' rel="noreferrer"><AiFillGithub style={styles.icons}/></a>
          <a style={styles.aTag} href="https://www.linkedin.com/in/christopher-bonime-115844257/" target='_blank' rel="noreferrer"><AiFillLinkedin style={styles.icons}/></a>
          <a style={styles.aTag} href="https://www.instagram.com/chrisbonime/" target='_blank' rel="noreferrer"><AiFillInstagram style={styles.icons}/></a>
          <a style={styles.aTag} href="https://www.facebook.com/chris.bonime" target='_blank' rel="noreferrer"><AiFillFacebook style={styles.icons}/></a>
        </div>
      </footer>
    );
  }
}

export default Footer;
