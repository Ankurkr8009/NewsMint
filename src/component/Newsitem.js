import React from 'react'


export default function Newsitem(props){
 
    let { title, description, imageurl, newsurl, author, date, source } = props; //JS destructuring

    return (  
      <div className='my-3'> 
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
            <span className="badge rounded-pill bg-danger" > {source}</span>
          </div>
          <img src={!imageurl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowsHucJ7RjrY3t8uzYj9DRuRBHWE9YVmIOKymGclC6IR11brHVso6llt1&usqp=CAI&s" : imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}. . .</h5>
            <p className="card-text">{description} </p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }

