import React from 'react';

const Blogs = () => {
    return (
        <div className="container">
            <div>
            <h1>Context API কাকে বলে ?</h1>
            <h4>Context API বলা হয় এমন global variable এর মত জিনিস  যার ডাটা গুলা কে অনেক যায়গায় পাস করা যায় ।সেটা হয় Props এর মাধ্যমে । এটি ব্যবহার করে Parent থেকে child কম্পনেন্টে ডাটা পাঠানো যায়। এটি রিয়েক্ট এর ১৬.৩ এর ভার্সন এ যুক্ত করা হয় ।</h4>
            </div>

            <div className="mt-5">
                <h1>Semantic tag কাকে বলে ?</h1>
                <h4>Semantic tag হলো কিছু HTML Tag যা মানুষ ও মেশিনের বুঝার জন্য সহজ ভাবে বর্ণনা করে । যেমন Haeder ,footer,article গুলা হলো সিমান্টিক ট্যাগ তারা তাদের ভিতরের জিনিস গুলার টাইপ ও তার আসল বিষয়বস্তু বর্ণনা করে। যাতে বুঝতে সহজ হয় ।</h4>
            </div>
        </div>
    );
};

export default Blogs;