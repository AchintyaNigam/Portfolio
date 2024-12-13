'use client';
import React from 'react';
import { motion } from "motion/react"

const Content = () => {
  return (
    <div className='z-100 bg-transparent h-full w-[70vw] pt-8 flex flex-col overflow-scroll'>

    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h1 className='text-8xl text-white font-bold p-8 pb-0'>CODING</h1>
    </motion.div>
      <h1 className='text-4xl text-slate-400 font-bold p-8 pt-2'>My Projects</h1>
      <div className='text-lg text-white p-8'>


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt hendrerit odio a euismod. Suspendisse a tincidunt lorem, sit amet congue metus. Mauris sit amet convallis nibh, id tempus ex. Pellentesque elementum quis libero sit amet viverra. Aliquam euismod nibh eu condimentum molestie. Donec vitae mattis sapien. In consequat accumsan lectus, ultricies tincidunt velit faucibus in. Morbi nec elementum erat, non bibendum nulla. Donec cursus volutpat metus nec facilisis. Aliquam erat volutpat. Mauris congue tellus sit amet vestibulum mollis.

Suspendisse vitae tincidunt ipsum. Fusce a pharetra lorem. Aliquam rutrum pellentesque ex, quis feugiat mi rhoncus eget. In tincidunt felis id tortor venenatis, at malesuada nibh ullamcorper. Praesent rhoncus, est ut pretium maximus, turpis justo egestas nulla, sed auctor nisl purus quis urna. Vivamus auctor, eros non tristique feugiat, mauris nisl iaculis velit, vitae fermentum mi metus in enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis molestie velit et bibendum laoreet. Quisque eu dolor aliquet, posuere urna ut, eleifend arcu.

Integer sed mi tempor, sollicitudin libero sed, tempus mauris. Proin non ullamcorper ipsum. Nunc nec sodales mauris. Pellentesque suscipit imperdiet ante, eget pretium ex egestas vel. Cras ullamcorper et sem vitae tincidunt. Phasellus sed fringilla orci. Fusce sit amet dolor porttitor, mattis nisl sit amet, porta ligula. Nulla sit amet nibh quam. Cras finibus lacinia quam, sit amet aliquet tellus lacinia non. Sed vel tristique mi. Nunc dictum est risus, vel maximus neque ultricies eget. Phasellus nec odio eu arcu suscipit venenatis.

Vestibulum elementum placerat turpis. Duis eget eleifend quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vel leo consequat, volutpat justo ac, placerat ligula. Sed porttitor imperdiet efficitur. Nunc tristique lorem id arcu dictum, et cursus est elementum. Aenean vitae urna ac urna facilisis convallis sit amet et est. Cras mollis vehicula egestas. Vestibulum nunc nisl, feugiat in tellus at, congue semper erat.

Nunc efficitur, felis a pellentesque eleifend, ipsum est varius risus, vitae ornare turpis ipsum sed tellus. Morbi volutpat sem eu tempus aliquet. Nam vestibulum arcu sit amet diam rhoncus convallis. Suspendisse ullamcorper aliquet ligula, eget ultricies sapien condimentum quis. Quisque porta in est in consequat. Maecenas non dapibus lorem. Sed rutrum scelerisque orci ut fringilla. Curabitur aliquet nisi a elit venenatis fermentum. 
      


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt hendrerit odio a euismod. Suspendisse a tincidunt lorem, sit amet congue metus. Mauris sit amet convallis nibh, id tempus ex. Pellentesque elementum quis libero sit amet viverra. Aliquam euismod nibh eu condimentum molestie. Donec vitae mattis sapien. In consequat accumsan lectus, ultricies tincidunt velit faucibus in. Morbi nec elementum erat, non bibendum nulla. Donec cursus volutpat metus nec facilisis. Aliquam erat volutpat. Mauris congue tellus sit amet vestibulum mollis.

Suspendisse vitae tincidunt ipsum. Fusce a pharetra lorem. Aliquam rutrum pellentesque ex, quis feugiat mi rhoncus eget. In tincidunt felis id tortor venenatis, at malesuada nibh ullamcorper. Praesent rhoncus, est ut pretium maximus, turpis justo egestas nulla, sed auctor nisl purus quis urna. Vivamus auctor, eros non tristique feugiat, mauris nisl iaculis velit, vitae fermentum mi metus in enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis molestie velit et bibendum laoreet. Quisque eu dolor aliquet, posuere urna ut, eleifend arcu.

Integer sed mi tempor, sollicitudin libero sed, tempus mauris. Proin non ullamcorper ipsum. Nunc nec sodales mauris. Pellentesque suscipit imperdiet ante, eget pretium ex egestas vel. Cras ullamcorper et sem vitae tincidunt. Phasellus sed fringilla orci. Fusce sit amet dolor porttitor, mattis nisl sit amet, porta ligula. Nulla sit amet nibh quam. Cras finibus lacinia quam, sit amet aliquet tellus lacinia non. Sed vel tristique mi. Nunc dictum est risus, vel maximus neque ultricies eget. Phasellus nec odio eu arcu suscipit venenatis.

Vestibulum elementum placerat turpis. Duis eget eleifend quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce vel leo consequat, volutpat justo ac, placerat ligula. Sed porttitor imperdiet efficitur. Nunc tristique lorem id arcu dictum, et cursus est elementum. Aenean vitae urna ac urna facilisis convallis sit amet et est. Cras mollis vehicula egestas. Vestibulum nunc nisl, feugiat in tellus at, congue semper erat.

Nunc efficitur, felis a pellentesque eleifend, ipsum est varius risus, vitae ornare turpis ipsum sed tellus. Morbi volutpat sem eu tempus aliquet. Nam vestibulum arcu sit amet diam rhoncus convallis. Suspendisse ullamcorper aliquet ligula, eget ultricies sapien condimentum quis. Quisque porta in est in consequat. Maecenas non dapibus lorem. Sed rutrum scelerisque orci ut fringilla. Curabitur aliquet nisi a elit venenatis fermentum. 
      </div>
  </div>
  );
}

export default Content;
