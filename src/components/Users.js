import React from 'react';
import User from './User';


export default function Users() {
    return ( 
        <div className="right">
            <User src="http://static.wixstatic.com/media/500fcb_4c73e01934bf46efb930caa4b307da41.png_srz_280_249_85_22_0.50_1.20_0.00_png_srz" alt="user_ava" name="Stan"/>
            <div className="users__block">
                <User src="http://static.wixstatic.com/media/500fcb_4c73e01934bf46efb930caa4b307da41.png_srz_280_249_85_22_0.50_1.20_0.00_png_srz" alt="user_ava" name="Stan" min={true}/>
                <User src="http://static.wixstatic.com/media/500fcb_4c73e01934bf46efb930caa4b307da41.png_srz_280_249_85_22_0.50_1.20_0.00_png_srz" alt="user_ava" name="Stan" min={true}/> 
                <User src="http://static.wixstatic.com/media/500fcb_4c73e01934bf46efb930caa4b307da41.png_srz_280_249_85_22_0.50_1.20_0.00_png_srz" alt="user_ava" name="Stan" min={true}/> 
                <User src="http://static.wixstatic.com/media/500fcb_4c73e01934bf46efb930caa4b307da41.png_srz_280_249_85_22_0.50_1.20_0.00_png_srz" alt="user_ava" name="Stan" min={true}/> 
            </div> 
        </div>
    )
}