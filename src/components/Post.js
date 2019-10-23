import React, {
    Component
} from 'react';
import User from './User';


export default class Post extends Component {
    render() {
        return ( <
            div className = "post" >
            <
            User src = "http://static.wixstatic.com/media/500fcb_4c73e01934bf46efb930caa4b307da41.png_srz_280_249_85_22_0.50_1.20_0.00_png_srz"
            alt = "user_ava"
            name = "Sten"
            min = {
                true
            }
            / > <
            img src = {
                this.props.src
            }
            alt = {
                this.props.alt
            } > < /img> <
            div className = "post__name" >
            some account <
            /div> <
            div className = "post__descr" >
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don 't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn'
            t anything embarrassing hidden in the middle of text. <
            /div> <
            /div>
        )
    }
}