import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <section className='m-0 p-0 w-full h-screen flex '>
        <div className='m-0 p-0 w-1/5 h-screen hidden bg-emerald-900 xl:flex'>sidebar</div>
        <div className='p-2 w-full'>
          <div className=''>some text</div>
          <form className='m-6 flex flex-col w-90% items-center lg:items-baseline'>
            <div className='flex flex-col lg:flex-row lg:gap-6'>
              <div className='flex flex-col '>
                <label for="type" className='mx-2'>Report type:</label>
                <select name='type' id='type' className='p-1.5 w-90 lg:w-60 rounded-lg bg-gray-200'>
                  <option value="meow">Meow</option>
                  <option value="bark">Bark</option>
                  <option value="mooo">Mooooo</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label for="type" className='mx-2'>Report type:</label>
                <select name='type' id='type' className='p-1.5 w-90 lg:w-60 rounded-lg bg-gray-200'>
                  <option value="meow">Meow</option>
                  <option value="bark">Bark</option>
                  <option value="mooo">Mooooo</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:gap-6'>
              <div className='flex flex-col'>
                <label for="type" className='mx-2'>Report type:</label>
                <select name='type' id='type' className='p-1.5 w-90 lg:w-60 rounded-lg bg-gray-200'>
                  <option value="meow">Meow</option>
                  <option value="bark">Bark</option>
                  <option value="mooo">Mooooo</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label for="type" className='mx-2'>Report type:</label>
                <select name='type' id='type' className='p-1.5 w-90 lg:w-60 rounded-lg bg-gray-200'>
                  <option value="meow">Meow</option>
                  <option value="bark">Bark</option>
                  <option value="mooo">Mooooo</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label for="type" className='mx-2'>Report type:</label>
                <select name='type' id='type' className='p-1.5 w-90 lg:w-60 rounded-lg bg-gray-200'>
                  <option value="meow">Meow</option>
                  <option value="bark">Bark</option>
                  <option value="mooo">Mooooo</option>
                </select>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-1 items-center lg:items-end flex-wrap w-full'>
              <div className='flex flex-col'>
                <label for="type" className='mx-2'>Report type:</label>
                <select name='type' id='type' className='p-1.5 w-90 lg:w-35 2xl:w-50 rounded-lg bg-gray-200'>
                  <option value="meow">Meow</option>
                  <option value="bark">Bark</option>
                  <option value="mooo">Mooooo</option>
                </select>
              </div>
              <div className='flex flex-col '>
                <label for="date" className='mx-2'>From:</label>
                <input type="date" name="from" id="from" className='p-1.5 w-90 lg:w-30 2xl:w-40 rounded-lg bg-gray-200'/>
              </div>
              <div className='flex flex-col'>
                <label for="date" className='mx-2'>To:</label>
                <input type="date" name="to" id="to" className='p-1.5 w-90 lg:w-30 2xl:w-40 rounded-lg bg-gray-200'/>
              </div>
              <div className='flex gap-1'>
                <button className=' p-2 bg-blue-500 rounded-lg'>Something</button>
                <button className=' p-2 bg-gray-300 rounded-lg'>Something</button>
              </div>
              <div className='flex'>
                <input type="text" placeholder='search' className=' p-2 w-90 lg:w-30 2xl:w-40 bg-gray-300 rounded-lg rounded-e-none'/>
                <button className=' p-2 bg-blue-500 rounded-lg rounded-s-none'>🔎</button>
              </div>
              <div className='flex gap-1 lg:ml-auto '>
                <button className=' p-2 bg-gray-300 rounded-lg rounded-e-none'>XML</button>
                <button className=' p-2 bg-gray-300'>CSV</button>
                <button className=' p-2 bg-gray-300'>HTML</button>
                <button className=' p-2 bg-gray-300 rounded-lg rounded-s-none'>PDF</button>
              </div>
            </div>
            
          </form>
        </div>
      </section>
    </>
  )
}

export default App
