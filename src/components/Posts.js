import React, {
    Component
} from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return ( <
            div className = "left" >
            <
            Post src = "https://images.pexels.com/photos/1246078/pexels-photo-1246078.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt = "inst" / >
            <
            Post src = "https://images.pexels.com/photos/1791241/pexels-photo-1791241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt = "second" / >
            <
            Post src = "https://images.pexels.com/photos/286588/pexels-photo-286588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt = "third" / >
            <
            Post src = "https://images.pexels.com/photos/3012724/pexels-photo-3012724.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt = "fourth" / >
            <
            Post src = "https://cdn.wallpapersafari.com/20/74/rZ5GTq.jpg"
            alt = "fifth" / >
            <
            /div>
        )
    }
}