//* রিভিশন চেকলিস্ট 
//? ১. তুমি create react app দিয়ে রিএক্ট এর প্রজেক্ট বানাতে পারো কিনা --- i can do that!!!
import React from 'react';
//? ৪. তুমি জাভাস্ক্রিপ্ট অবজেক্ট দিয়ে স্টাইল article ট্যাগ এর মধ্যে একটা h2 এর মধ্যে কিছু স্টাইল দাও। মিনিমাম ৩টা স্টাইল দিব। 
const h2 = {
    color: 'lightseagreen',
    fontSize: '2.5rem',
    marginTop: '30px'
}
const Checklist = () => {
    return (
        //? ২. JSX দিয়ে একটা div এর মধ্যে article ট্যাগ দিয়ে একটা ছোট ব্লগ টাইপের কিছু লিখতে পারো কিনা 
        <div>
            {/* ৩. তুমি css ক্লাস লিখবে যেটার নাম হবে blog তারপর তোমার JSX এর মধ্যে গিয়ে article ট্যাগ এর মধ্যে blog ক্লাস যোগ করবে।  */}
            <article className='blog'>
                <h2 style={h2}>Lorem ipsum dolor sit amet.</h2>
                {/* ৫. article ট্যাগ এর মধ্যে একটা প্যারাগ্রাফ ট্যাগ যোগ করো। তারপর inline স্টাইল সেখানে যোগ করো।  */}
                <p style={{color: 'lightblue', fontSize: '1.5rem'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sint magnam, accusantium molestiae minima quidem error esse dolores consectetur nihil!</p>
                <a href="">Read More</a>
            </article>
        </div>
    );
};

export default Checklist;