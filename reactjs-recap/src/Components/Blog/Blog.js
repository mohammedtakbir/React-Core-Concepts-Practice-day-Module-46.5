import React from 'react';
//? ৬. ব্লগ নামক একটা কম্পোনেন্ট বানাও
const Blog = (props) => {
    return (
        <div>
            {/* ৮. প্রত্যেকটা কম্পোনেন্ট এ heading এবং author নামে দুইটা প্রপার্টি সেন্ড করবে এবং সেই প্রপার্টিগুলো দেখাবে।  */}
            <h3><span>{props.heading}</span> <span style={{marginLeft: '20px'}}>{props.author}</span></h3>
        </div>
    );
};

export default Blog;