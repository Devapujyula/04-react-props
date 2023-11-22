import React from 'react'

function Card({userName = "Prakash Dsp", post = "Not assigned yet"}) {
  // console.log(props)
  return (
    // <div>
    //  <img  src='https://images.pexels.com/photos/17961718/pexels-photo-17961718/free-photo-of-clock-tower-in-izmir-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load' alt=''></img>
    //  <h1 className='text -2xl bg-green-500 p-3 rounded'>Card for photos</h1>
    //  <p>he best free stock photos, royalty free images & videos shared by creators</p>
    // </div>
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/17961718/pexels-photo-17961718/free-photo-of-clock-tower-in-izmir-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" width="384" height="512" />
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">

       {/* technically this approach id correct but not scalable for props */}
        {userName || "Prakash Dsp"}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {post}
        {/* {myArr} */}
      </div>
    </figcaption>
  </div>
</figure>
  )
}

export default Card
