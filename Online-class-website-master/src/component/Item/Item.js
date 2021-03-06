import React from 'react';

const Item = (props) => {
    const {img,name,price} = props.course;
    const AddEventHandler = props.AddEventHandler;
    
    return (
        <div className="col-md-4">
        <div className="single-item text-center my-4">
            <div className="card p-2">
                <img className="card-img-top" src={img} alt={name} />
                <div className="card-body">
                    <h5 className="card-name">{name}</h5>
                    <h4 className="price">${price}</h4>
                    <button className="btn btn-sm btn-primary" onClick={() =>AddEventHandler(props.course)}>Enroll Course</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Item;