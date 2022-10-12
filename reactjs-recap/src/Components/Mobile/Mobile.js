//? ৯. আরেকটা কম্পোনেন্ট বানাও। যেটার নাম হবে। Mobile সেখানে একটা বাটন থাকবে। বাটন এর নাম হবে "battery down" আর উপরে একটা সংখ্যা থাকবে। ১০০। (এইটা দিয়ে বুঝবে মোবাইল এর ব্যাটারি ১০০% আছে) এখন তুমি যতবার বাটনে ক্লিক করবে। সেই সংখ্যা এর মান ১০ করে কমতে থাকবে। 
import React, { useState } from 'react';
const Mobile = () => {
    const [batteryParcent, setBatteryParcent] = useState(100);
    const batteryDown = () => {
        //? ১০. (স্পেশাল চ্যালেঞ্জ) উপরের ব্যাটারী ডাউন বাটনে চাপ দিলে কমবে। তবে কমতে কমতে যখন ব্যাটারি এর পরিমাণ ০ হয়ে যাবে, তারপরে পুনরায় বাটনে চাপ দিলে ব্যাটারি কমবে না। অর্থাৎ নেগেটিভ হবে না। (দেখো এইটা করতে পারো কিনা)
        if(batteryParcent === 0){
            return;
        }
        setBatteryParcent(batteryParcent - 10);
    }
    return (
        <div>
            <h1>{batteryParcent}%</h1>
            <button onClick={batteryDown}>Battery Down</button>
        </div>
    );
};

export default Mobile;