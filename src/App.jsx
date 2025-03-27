import React, { useState } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(false) 
  const turnOnDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className="{`dark:bg-black ${darkMode && 'dark'}`}">
    <div className="bg-white text-black p-4 justify-center items-center flex h-screen flex-col ">
      <button onClick={setDarkMode} className=" fixed top-4 right-4 z-50 p-2 rounded-full bg-white text-white shadow hover:scale-105 transition ">{darkMode ? "☀️" : "🌕"}</button>
      <h1 className="text-3xl font-bold mb-4">Hello Tailwind</h1>
      <p className="text-lg text-lowercase">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti impedit accusamus asperiores sequi numquam dignissimos molestiae. Perferendis, sunt placeat? Esse facere error molestias amet quae inventore perspiciatis asperiores recusandae. Aspernatur at deleniti ratione reiciendis quae, accusamus suscipit repudiandae corporis sequi debitis sapiente odit quas? Repudiandae, labore nobis modi odit nemo cumque recusandae saepe omnis reiciendis tempore, illum ipsam tempora corrupti necessitatibus ratione provident hic rem excepturi repellendus! Voluptate quasi dolore doloribus labore incidunt veniam officia magnam quisquam, quod earum beatae consequatur necessitatibus similique exercitationem error iure rem dolor ullam nisi et! Neque, suscipit! Unde odit quae dolore optio excepturi nobis reiciendis repellat neque necessitatibus consequatur fugit laudantium vero, quidem non!</p>
    </div>
    </div>
  )
}

export default App

