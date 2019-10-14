import React from 'react';
import Contact from './Contact';
import './contact.css';

const List = [
    {
        name :'Carlos Collins',
        avatar:'https://zupimages.net/up/19/42/3m5m.jpg',
        line: true,
    } ,
    {
        name :'Carla Cisca',
        avatar: 'https://zupimages.net/up/19/42/peex.jpg',
        line: false,
    } ,
    {
        name :'Salia Quemar',
        avatar: 'https://zupimages.net/up/19/42/jnhs.jpg',
        line: false,
    } ,
    {
        name :'Lucien Fort',
        avatar: 'https://zupimages.net/up/19/42/gei2.jpg',
        line: true,
    } ,
    {
        name :'Agda Prata',
        avatar: 'https://zupimages.net/up/19/42/xs3d.jpg',
        line: true,
    } ,
] 
    const ContactList = () => (
        <div>
          {List.map(item => (
            <Contact name= {item.name} avatar={item.avatar} line={item.line}/>
          ))}
        </div>
    );

export default ContactList