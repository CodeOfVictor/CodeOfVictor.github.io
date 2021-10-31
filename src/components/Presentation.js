import React from "react";
import { Avatar, Button } from '@mui/material';
import "./Presentation.css";

class Presentation extends React.Component
{

    render()
    {
        return (
            <div id='Presentation'>
                <div id="avatar">
                    <Avatar
                        alt="Image cv"
                        src="cvPhoto.jpg"
                        sx={{ width: 324, height: 324 }}
                    />
                </div>
                <div id="data">
                    <Text>Víctor José Barneto Magen</Text>
                    <Text>29/09/1998</Text>
                    <Text>Zaragoza 50018</Text>
                </div>
                <div id="contact">
                    <Button variant="outlined" onClick={openLinkedin}>Linkedin</Button>
                    <Button variant="outlined" onClick={openGitHub}>Github</Button>
                    <Button variant="outlined" onClick={openTwitter}>Twitter</Button>
                    <Button variant="outlined" onClick={openMail}>Mail</Button>
                </div>
            </div>
            );
    }
}

function openLinkedin()
{
    var win = window.open("https://www.linkedin.com/in/v%C3%ADctor-jos%C3%A9/", 'linkedin');
    win.focus();
}

function openGitHub()
{
    var win = window.open("https://github.com/CodeOfVictor", 'github');
    win.focus();
}

function openTwitter()
{
    var win = window.open("https://twitter.com/CodeOfVictor", 'twitter');
    win.focus();
}

function openMail()
{
    var win = window.open("correovictorb@gmail.com", 'mail');
    win.focus();
}

export default Presentation;