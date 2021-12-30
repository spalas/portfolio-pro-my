import React from 'react';
import first from '../../assests/Home/1st.png'
import second from '../../assests/Home/2nd.png'

const Blogs = () => {
    return (
        <container>
            <h1 style={{color: "purple", marginTop:"20px", marginBottom: '25px'}}>My blogs</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                    <img src={first} className="card-img-top" alt="..."/>
                    <div className="card-body">
                            <h5 className="card-title">Blog</h5>
                            
                            <hr/>
                            
                            <h6 className="card-text"> On the other site that you can see State VS props </h6>
                            <br />
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={second} className="card-img-top" alt="..."/>
                    
                    </div>
                </div>
                
            </div>
        </container>
    );
};

export default Blogs;