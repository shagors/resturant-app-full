import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {MdFastfood} from 'react-icons/md'

const CreateContainer = () => {

  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);
  const [fields, setFields] = useState(false); //for error handle
  const [alertStatus, setAlertStatus] = useState("danger"); //error message
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='w-full min-h-screen h-auto flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center'>
          {
            fields && (
              <motion.p 
                initial={{opacity : 0}}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} 
                className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800'}`}
              >
                {msg}
              </motion.p>
            )
          }

          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFastfood className="text-xl text-gray-700" />
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give me a title..."
              className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
            />
          </div>
      </div>
    </div>
  )
}

export default CreateContainer;